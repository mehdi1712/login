import React, { useState } from "react"
import "../styles/LoginForm.css"
import { Form, Button, Card } from "react-bootstrap"
// import AuthService from "../api/index"
import { useHistory } from "react-router-dom"

const Register = () => {
   const [username, setUsername] = useState("")
   const [password, setPassword] = useState("")
   // const [success, setSuccess] = useState(true)
   const [loading, setLoading] = useState(false)
   // const history = useHistory()

   const onChangeUsername = (e) => {
      const username = e.target.value
      setUsername(username)
   }
   const onChangePassword = (e) => {
      const password = e.target.value
      setPassword(password)
   }
   const handleRegister = () => {
      if (username && password) {
         //     AuthService.login(username).then(
         //        () => {
         //           setSuccess(true)
         //           localStorage.setItem("registered", "1")
         //           localStorage.setItem("username", username)
         //           history.push("/auth")
         //        },
         //        (error) => {
         //           // const resMessage = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
         //           setLoading(false)
         //           setSuccess(false)
         //           localStorage.setItem("registered", "0")
         //           history.push("/")
         //        }
         //     )
         //  } else {
         //     console.log("username & pass empty")
         //     setLoading(false)
      }
   }
   return (
      <Card className="root-form">
         <Card.Header>ثبت نام</Card.Header>
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
               <Form.Group>
                  <Form.Label>رمز عبور</Form.Label>
                  <Form.Control value={username} onChange={onChangePassword} type="text" />
               </Form.Group>

               <div style={{ marginTop: "1rem" }}>
                  {!username && <Form.Text className="error">رمز عبور الزامی است</Form.Text>}
                  <br />
                  <br />
               </div>

               <Button className="btn" onClick={handleRegister} variant="outline-primary">
                  ثبت نام
               </Button>
            </Form>
         </Card.Body>
         {loading && <span>در حال بارگذاری...</span>}
      </Card>
   )
}
export default Register
