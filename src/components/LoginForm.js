import React, { useState } from "react"
import "../styles/LoginForm.css"
import { Form, Button, Card } from "react-bootstrap"
import AuthService from "../api/index"
import { useHistory } from "react-router-dom"

const FormComponent = (props) => {
   const [username, setUsername] = useState("")
   const [loading, setLoading] = useState(false)
   const history = useHistory()

   const onChangeUsername = (e) => {
      const username = e.target.value
      setUsername(username)
   }

   const handleLogin = (e) => {
      e.preventDefault()
      setLoading(true)
      if (username) {
         AuthService.checkUsername(username).then(
            (response) => {
               const registered = response.data.registered
               localStorage.setItem("username", username)

               if (registered === true) {
                  //karbar sabegh
                  localStorage.setItem("registered", "1")
                  history.push("/verify")
               }
               if (registered === false) {
                  //new user
                  localStorage.setItem("code", response.data.code)
                  localStorage.setItem("registered", "0")
                  history.push("/register")
               }
               // localStorage.setItem("username", username)
               // history.push("/auth")
            },
            (error) => {
               // const resMessage = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()

               setLoading(false)
               history.push("/")
            }
         )
      } else {
         console.log("username empty")
         setLoading(false)
      }
   }

   return (
      <Card className="root-form">
         <Card.Header>نام کاربری را وارد کنید</Card.Header>
         <hr class="solid" />
         <Card.Body>
            <Form>
               <Form.Group>
                  <Form.Label>نام کاربری</Form.Label>
                  <Form.Control value={username} onChange={onChangeUsername} type="text" />
               </Form.Group>

               <div style={{ marginTop: "1rem" }}>
                  {!username && <Form.Text className="error">نام کاربری الزامی است</Form.Text>}
                  <br />
                  <br />
               </div>

               <Button className="btn-login" onClick={handleLogin} variant="outline-primary">
                  ادامه
               </Button>
            </Form>
         </Card.Body>
         {loading && <span>در حال بارگذاری...</span>}
      </Card>
   )
}
export default FormComponent
