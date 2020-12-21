import React, { useState } from "react"

//create our context
const tokenContext = React.createContext()
const SetTokenContext = React.createContext()

function TokenProvider({ children }) {
   //create our state
   const [token, setToken] = useState({
       token_type:"",
       expires_in:"",
       access_token:"",
       refresh_token:""
   })

   return (
      <tokenContext.Provider value={token}>
         <SetTokenContext.Provider value={setToken}> {children} </SetTokenContext.Provider>
      </tokenContext.Provider>
   )
}
//custom hooks
/* ******************************** */
function useToken() {
   const token = React.useContext(tokenContext)

   if (token === undefined) {
      throw new Error("render <TokenProvider /> at top of the tree")
   }

   return token
}

function useSetToken() {
   const setToken = React.useContext(SetTokenContext)

   if (setToken === undefined) {
      throw new Error("render <TokenProvider /> at top of the tree")
   }

   return setToken
}


export { useToken, useSetToken }
export default TokenProvider
