import "./widgetLg.css";
import { useState,useEffect } from "react";
import { useSelector } from "react-redux";
import { userRequest } from "../../requestMethod";

export default function WidgetLg() {
  const [orders,setOrders] = useState([[]])
  const tokenUser = useSelector(state=>state.user.currentUser?.accessToken)
  useEffect(()=>{
    console.log(tokenUser)
    async function getOrders(){
      try{
        const res =  await userRequest(tokenUser).get("order/");
        setOrders(res.data)
        console.log(res.data)
      }catch{}
    }
    getOrders()

   
  },[])
  const Button = ({ type }) => {
    if(!type === 'pending') {
      return <button style={{ backgroundColor:'green' }} className={"widgetLgButton " + type}>{type}</button>;
    }
    return <button  style={{ backgroundColor:'red' }}  className={"widgetLgButton " + type}>{type}</button>;
  };
  return (
    <div className="widgetLg">
      <h3 className="widgetLgTitle">Latest transactions</h3>
      <table className="widgetLgTable">
        <tr className="widgetLgTr">
          <th className="widgetLgTh">Customer</th>
          <th className="widgetLgTh">Date</th>
          <th className="widgetLgTh">Amount</th>
          <th className="widgetLgTh">Status</th>
        </tr>
        {orders.length>0 ? orders?.map((order,key)=>(
            <tr className="widgetLgTr" key={key}>
            <td className="widgetLgUser">
              <img
                src="https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                alt=""
                className="widgetLgImg"
              />
              <span className="widgetLgName">{order.userId}</span>
            </td>
            <td className="widgetLgDate">{order.createdAt}</td>
            <td className="widgetLgAmount">{order.amount}</td>
            <td className="widgetLgStatus">
              <Button type={order.status} />
            </td>
          </tr>
        )) : (
            <p>tidak ada order</p>
        )}
      </table>
    </div>
  );
}
