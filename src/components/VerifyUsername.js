import React, { useState, useEffect } from "react"
import "../styles/VerifyUsername.css"
import { Form, Button, Card } from "react-bootstrap"
import AuthService from "../api/index"
import { useHistory } from "react-router-dom"
import { useSetToken } from "../context/TokenProvider"

const VerifyUsername = (props) => {
   const setToken = useSetToken()
   const [password, setPassword] = useState("")
   const [language, setLanguage] = useState([])
   const [success, setSuccess] = useState(true)
   const [loading, setLoading] = useState(false)
   const history = useHistory()
   const registered = localStorage.getItem("registered")
   if (registered === 0) {
      history.push("/")
   }
   localStorage.setItem("language_id", "1")
   var result = []

   useEffect(async () => {
      result = await AuthService.getLanguage()
      setLanguage(result.data)
   }, [])
   const onChangePassword = (e) => {
      const password = e.target.value
      setPassword(password)
   }
   const onChangeLanguage = (e) => {
      const ln = e.target.value
      localStorage.setItem("language_id", ln == "fa" ? "1" : "0")
   }
   const handleForget = () => {
      history.push("/forget")
   }

   const handleLogin = (e) => {
      e.preventDefault()
      setLoading(true)
      if (password) {
         AuthService.verifyLogin(password).then(
            (response) => {
               // history.push("/auth")
               setSuccess(true)
               setLoading(false)
               setToken(response.data)
               history.push("/profile")
            },
            (error) => {
               setLoading(false)
               setSuccess(false)
            }
         )
      } else {
         console.log("password empty")
         setLoading(false)
      }
   }

   if (localStorage.getItem("registered") === "0") {
      history.push("/")
   }
   return (
      <Card className="root-form">
         <Card.Header>احراز هویت</Card.Header>
         <hr class="solid" />
         <Card.Body>
            <Form>
               <Form.Group>
                  <Form.Label> رمز عبور</Form.Label>
                  <Form.Control value={password} onChange={onChangePassword} type="text" />
               </Form.Group>
               {!password && <Form.Text className="error">رمز الزامی است</Form.Text>}

               <Form.Group style={{ marginTop: "1rem" }} controlId="exampleForm.ControlSelect1">
                  <Form.Label>زبان</Form.Label>
                  <Form.Control onChange={onChangeLanguage} as="select">
                     {language && language.map((l) => <option key={l.id}>{l.name}</option>)}
                  </Form.Control>
               </Form.Group>
               <div style={{ marginTop: "1rem" }}>
                  <span onClick={handleForget} className="forget-pass">
                     فراموشی رمز عبور
                  </span>
               </div>

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
export default VerifyUsername
//09100046370
