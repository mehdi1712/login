import React, { useState, useEffect } from "react"
import "../styles/VerifyUsername.css"
import { Form, Button, Card } from "react-bootstrap"
import AuthService from "../api/index"
import { useHistory } from "react-router-dom"

const VerifyUsername = (props) => {
   const [password, setPassword] = useState("")
   const [language, setLanguage] = useState([])
   const [success, setSuccess] = useState(true)
   const [loading, setLoading] = useState(false)
   const history = useHistory()

   localStorage.setItem("language_id", "1")

   useEffect(() => {
      async function fetchLanguages() {
         const result = await AuthService.getLanguage()
         setLanguage(result.data)
      }
      fetchLanguages()
   }, [])
   const onChangePassword = (e) => {
      const password = e.target.value
      setPassword(password)
   }
   const onChangeLanguage = (e) => {
      const ln = e.target.value
      localStorage.setItem("language_id", ln === "fa" ? "1" : "0")
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
               setSuccess(true)
               setLoading(false)
               localStorage.setItem("access_token", response.data.access_token)
               localStorage.setItem("expires_in", response.data.expires_in)
               localStorage.setItem("refresh_token", response.data.refresh_token)
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
