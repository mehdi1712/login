import React, { useState } from "react"
import "../styles/FormComponent.css"
import { Form, Button, Card } from "react-bootstrap"
import AuthService from "../api/index"
import { useHistory } from "react-router-dom"

const FormComponent = (props) => {
   const [username, setUsername] = useState("")
   const [success, setSuccess] = useState(true)
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
         AuthService.login(username).then(
            () => {
               history.push("/profile")
               setSuccess(true)
            },
            (error) => {
               const resMessage = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()

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
         <Card.Header>ورود</Card.Header>
         <hr class="solid" />
         <Card.Body>
            <Form>
               <Form.Group>
                  <Form.Label>نام کاربری</Form.Label>
                  <Form.Control value={username} onChange={onChangeUsername} type="text" />
               </Form.Group>
               {!username && <Form.Text className="error">نام کاربری الزامی است</Form.Text>}

               <Button onClick={handleLogin} variant="outline-primary">
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
//09100046370
