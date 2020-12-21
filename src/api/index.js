import axios from "axios"

const API_URL = "http://api.behzee.com/general/v1"
const app = "pros"

const login = (username) => {
   return axios
      .post(API_URL + "/users/check", {
         username,
         app,
      })
      .then((response) => {
         if (response.data) {
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
   const registered = localStorage.getItem("registered")
   const language_id = localStorage.getItem("language_id")
   return axios
      .post(API_URL + "/users/verify", {
         password,
         app,
         username,
         registered,
         language_id,
      })
      .then((response) => {
         if (response.data) {
            // localStorage.setItem("user", JSON.stringify(response.data));
            //  console.log(response.data)
         }

         return response.data
      })
}
const forget = (username) => {
   const send_code = "1"
   return axios
      .post(API_URL + "/users/send_code", {
         username,
         send_code,
      })
      .then((response) => {
         if (response.data) {
            // localStorage.setItem("user", JSON.stringify(response.data));
            console.log(response.data)
         }

         return response.data
      })
}

// const logout = () => {
//    localStorage.removeItem("user")
// }

// const getCurrentUser = () => {
//    return JSON.parse(localStorage.getItem("user"))
// }

export default {
   login,
   getLanguage,
   verifyLogin,
   forget,
}
