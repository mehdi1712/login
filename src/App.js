import React from "react"
import { Container } from "react-bootstrap"
import "./App.css"
import { Route, Switch } from "react-router-dom"
import Routes from "./Routes"

function App() {
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
