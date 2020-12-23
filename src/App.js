import React, { useEffect } from "react"
import { Container } from "react-bootstrap"
import "./App.css"
import { Route, Switch } from "react-router-dom"
import Routes from "./Routes"
import AuthService from "./api/index"
import { useHistory } from "react-router-dom"

function App() {
   const history = useHistory()

   useEffect(() => {
      var now = new Date()
      var since_1970 = Math.round(now.getTime() / 1000)
      const login_time = Math.round(localStorage.getItem("login_time") / 1000)
      var expiresTime = localStorage.getItem("expires_in")
      // var expiresTime = 5

      if (since_1970 - login_time > expiresTime) {
         console.log("token expierd and refeshing ...")
         AuthService.refreshToken().then(
            (response) => {
               localStorage.setItem("access_token", response.data.access_token)
               localStorage.setItem("expires_in", response.data.expires_in)
               localStorage.setItem("refresh_token", response.data.refresh_token)
               var now = new Date()
               localStorage.setItem("login_time", now.getTime())
               console.log("refeshing dn")
            },
            (error) => {
               console.log("err in refresh token")
               // localStorage.clear()
               history.push("/login")
            }
         )
      }
   }, [])

   return (
      <Container>
         <Switch>
            {Routes.map((route) => (
               <Route {...route} />
            ))}
         </Switch>
      </Container>
   )
}

export default App
