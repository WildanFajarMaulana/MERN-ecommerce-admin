import axios from "axios"

const BASE_URL = "http://localhost:5000/api/"
 //const TOKEN =localStorage.getItem("persist:root") ? JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser?.accessToken : ""
// const TOKEN =JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser?.accessToken 
// console.log(TOKEN)
console.log(JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user))
export const publicRequest = axios.create({
    baseURL:BASE_URL
})

export const userRequest = (token_user)=>
    axios.create({
        baseURL:BASE_URL,
        headers:{token:`Bearer ${token_user}`}
    })
