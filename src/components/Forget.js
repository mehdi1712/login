import React, { useState } from "react"
import "../styles/Forget.css"
import { Form, Button, Card } from "react-bootstrap"
import AuthService from "../api/index"
import { useHistory } from "react-router-dom"

const FormComponent = (props) => {
   const [username, setUsername] = useState("")
   const [loading, setLoading] = useState(false)
   const history = useHistory()

   var result

   localStorage.setItem("registered", "0")
   const onChangeUsername = (e) => {
      const username = e.target.value
      setUsername(username)
   }

   const handleClick = (e) => {
      e.preventDefault()
      setLoading(true)
      if (username) {
         AuthService.sendCode(username).then(
            (response) => {
               result = response.data
               setLoading(false)
               if (result.registered === true) {
                  localStorage.setItem("code", result.code)
                  localStorage.setItem("registered", "1")
                  history.push("/forget-verify")
               } else {
                  console.log("not user")
                  localStorage.setItem("registered", "0")
                  history.push("/login")
               }
               // history.push({
               //    pathname: "/confirm-code",
               //    recivedCode: result.code,
               // })
            },
            (error) => {
               // const resMessage = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()

               setLoading(false)
            }
         )
      } else {
         console.log("username empty")
         setLoading(false)
      }
   }

   return (
      <Card className="root-form">
         <Card.Header>فراموشی</Card.Header>
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
               </div>

               <Button className="btn1" onClick={handleClick} variant="outline-primary">
                  ادامه
               </Button>
            </Form>
         </Card.Body>
         {loading && <span>در حال بارگذاری...</span>}
         <br />
      </Card>
   )
}
export default FormComponent
