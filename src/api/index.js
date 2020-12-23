import axios from "axios"

const API_URL = "http://api.behzee.com/general/v1"
const app = "pros"

const checkUsername = (username) => {
   return axios
      .post(API_URL + "/users/check", {
         username,
         app,
      })
      .then((response) => {
         if (response.data) {
            console.log(response.data)
         }

         return response.data
      })
}

const getLanguage = () => {
   return axios.get(API_URL + "/languages").then((response) => {
      if (response.data) {
         // localStorage.setItem("user", JSON.stringify(response.data));
      }

      return response.data
   })
}

const verifyLogin = (password) => {
   const username = localStorage.getItem("username")
   const language_id = localStorage.getItem("language_id")
   const registered = localStorage.getItem("registered")
   return axios
      .post(API_URL + "/users/verify", {
         password,
         app,
         username,
         language_id,
         registered,
      })
      .then((response) => {
         if (response.data) {
            //token get back
            // console.log(response.data)
         }

         return response.data
      })
}

const sendCode = (username) => {
   const send_code = "1"
   return axios
      .post(API_URL + "/users/send_code", {
         username,
         send_code,
         app,
      })
      .then((response) => {
         if (response.data) {
            console.log(response.data)
         }

         return response.data
      })
}

const verifyForget = (password) => {
   const username = localStorage.getItem("username")

   return axios
      .post(API_URL + "/users/verify_code", {
         password,
         app,
         username,
      })
      .then((response) => {
         if (response.data) {
            //token get back
            // console.log(response.data)
         }

         return response.data
      })
}
const refreshToken = () => {
   const refresh_token = localStorage.getItem("refresh_token")
   const access_token = localStorage.getItem("access_token")

   return axios
      .post(
         API_URL + "/users/refresh",
         {
            refresh_token,
         },
         {
            headers: {
               Authorization: `Bearer ${access_token}`,
            },
         }
      )
      .then((response) => {
         if (response.data) {
            //token get back
            // console.log(response.data)
         }

         return response.data
      })
}

// const logout = () => {
//    localStorage.removeItem("")
// }

export default {
   checkUsername,
   getLanguage,
   verifyLogin,
   sendCode,
   verifyForget,
   refreshToken,
}
