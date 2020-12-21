import React from "react"
// import { useToken } from "../context/TokenProvider"
import { Button } from "react-bootstrap"
import "../styles/Profile.css"
import { useHistory } from "react-router-dom"
import { useSetToken } from "../context/TokenProvider"

const Profile = () => {
   const setToken = useSetToken()
   // const token = useToken()
   const history = useHistory()
   const username = localStorage.getItem("username")
   const registered = localStorage.getItem("registered")
   if (registered === "0") {
      history.push("/")
   }
   const handleLogout = () => {
      localStorage.setItem("username", "")
      localStorage.setItem("registered", "0")
      localStorage.setItem("language_id", "")
      setToken({})
      history.push("/")
   }
   // console.log("token is " + token)
   return (
      <div className="div-profile">
         <h2>wellcom {username}</h2>
         <Button onClick={handleLogout}>LogOut</Button>
      </div>
   )
}
export default Profile
