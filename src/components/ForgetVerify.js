import React, { useState } from "react"
import "../styles/Register.css"
import { Form, Button, Card } from "react-bootstrap"
import AuthService from "../api/index"
import { useHistory } from "react-router-dom"

const ForgetVerify = () => {
   const [code, setCode] = useState("")
   const [loading, setLoading] = useState(false)
   const history = useHistory()

   const onChangeCode = (e) => {
      const code = e.target.value
      setCode(code)
   }

   const handleClick = () => {
      if (code === localStorage.getItem("code")) {
         console.log("code correct")
         AuthService.verifyForget(code).then(
            (response) => {
               localStorage.setItem("access_token", response.data.access_token)
               localStorage.setItem("expires_in", response.data.expires_in)
               localStorage.setItem("refresh_token", response.data.refresh_token)
               var now = new Date()
               localStorage.setItem("login_time", now.getTime())
               history.push("/profile")
            },
            (error) => {
               console.log("expired code ")
               // const resMessage = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
               setLoading(false)
            }
         )
      } else {
         console.log("code is empty or not correct")
         setLoading(false)
      }
   }
   return (
      <Card className="root-form-register">
         <Card.Header>تایید کد</Card.Header>
         <hr class="solid" />
         <Card.Body>
            <Form>
               <Form.Group>
                  <Form.Label>کد </Form.Label>
                  <Form.Control value={code} onChange={onChangeCode} type="text" />
               </Form.Group>

               <div style={{ marginTop: "1rem" }}>
                  {!code && <Form.Text className="error">کد الزامی است</Form.Text>}
                  <br />
                  <span> کد و پسورد : {localStorage.getItem("code")}</span>
                  <br />
               </div>
               <Button className="btn-reg" onClick={handleClick} variant="outline-primary">
                  ثبت نام
               </Button>
            </Form>
         </Card.Body>
         {loading && <span>در حال بارگذاری...</span>}
      </Card>
   )
}
export default ForgetVerify
