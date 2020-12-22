import React from "react"
// import { useToken } from "../context/TokenProvider"
import { Button } from "react-bootstrap"
import "../styles/Profile.css"
import { useHistory } from "react-router-dom"

const Profile = () => {
   // const token = useToken()
   const history = useHistory()
   const username = localStorage.getItem("username")
   //const registered = localStorage.getItem("registered")
   const access_token = localStorage.getItem("access_token")

   if (access_token === null || access_token === "") {
      history.push("/login")
   }

   const handleLogout = () => {
      localStorage.setItem("username", "")
      localStorage.setItem("registered", "")
      localStorage.setItem("language_id", "")
      localStorage.removeItem("access_token")
      localStorage.removeItem("expires_in")
      localStorage.removeItem("refresh_token")
      history.push("/login")
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
