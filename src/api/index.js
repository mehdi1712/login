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
}
