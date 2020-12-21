import React, { useState } from "react"
import "../styles/Forget.css"
import { Form, Button, Card } from "react-bootstrap"
import AuthService from "../api/index"
import { useHistory } from "react-router-dom"

const FormComponent = (props) => {
   const [username, setUsername] = useState("")
   const [success, setSuccess] = useState(true)
   const [loading, setLoading] = useState(false)
   const history = useHistory()
   const registered = localStorage.getItem("registered")

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
         AuthService.forget(username).then(
            (response) => {
               result = response.data

               setSuccess(true)
               setLoading(false)
               localStorage.setItem("username", username)
               console.log(result.code)
               history.push({
                  pathname: "/confirm-code",
                  recivedCode: result.code,
               })
            },
            (error) => {
               // const resMessage = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()

               setLoading(false)
               setSuccess(false)
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
         {!success && <span style={{ color: "red", marginBottom: "1rem" }}>یافت نشد</span>}
      </Card>
   )
}
export default FormComponent
