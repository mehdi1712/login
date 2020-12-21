import React from "react"
import { Container } from "react-bootstrap"
import "./App.css"
import { Route, Switch } from "react-router-dom"
import Routes from "./Routes"
import TokenProvider from './context/TokenProvider'

function App() {
   return (
      <TokenProvider>
      <Container>
         <Switch>
            {Routes.map((route) => (
               <Route {...route} />
            ))}
         </Switch>
      </Container>
      </TokenProvider>
   )
}

export default App
