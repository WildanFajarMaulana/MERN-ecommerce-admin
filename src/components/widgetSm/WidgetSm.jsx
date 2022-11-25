import "./widgetSm.css";
import { Visibility } from "@material-ui/icons";
import { useEffect, useState } from "react";
import { userRequest } from "../../requestMethod";
import { useSelector } from "react-redux";
export default function WidgetSm() {
  const [users,setUsers] = useState([])
  const tokenUser = useSelector(state=>state.user.currentUser?.accessToken)
  useEffect(()=>{
    console.log(tokenUser)
    async function getUsers(){
      try{
        const res =  await userRequest(tokenUser).get("users/");
        setUsers(res.data)
      }catch{}
    }
    getUsers()

   
  },[])
  return (
    <div className="widgetSm">
      <span className="widgetSmTitle">New Join Members</span>
      <ul className="widgetSmList">
        {users?.map((user,key)=>(
               <li className="widgetSmListItem" key={key}>
               <img
                 src={user.img || "https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500"}
                 alt=""
                 className="widgetSmImg"
               />
               <div className="widgetSmUser">
                 <span className="widgetSmUsername">{user.username}</span>
               </div>
               <button className="widgetSmButton">
                 <Visibility className="widgetSmIcon" />
                 Display
               </button>
             </li>
        ))}
      </ul>
    </div>
  );
}
