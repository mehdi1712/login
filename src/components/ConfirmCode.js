import React, { useState, useEffect } from "react"
import "../styles/ConfirmCode.css"
import { Form, Button, Card } from "react-bootstrap"
import { useHistory } from "react-router-dom"

const ConfirmCode = (props) => {
   const recivedCode = props.history.location.recivedCode

   const [code, setCode] = useState("")
   //    const [success, setSuccess] = useState(true)
   const [loading, setLoading] = useState(false)
   const history = useHistory()
   //    const registered = localStorage.getItem("registered")

   const onChangeCode = (e) => {
      const code = e.target.value
      setCode(code)
   }
   const handleConfirm = () => {
      if (code === recivedCode) {
         history.push("/auth")
      }
   }

   return (
      <Card className="root-form">
         <Card.Header>تایید کد</Card.Header>
         <hr class="solid" />
         <Card.Body>
            <Form>
               <Form.Group>
                  <Form.Label> کد</Form.Label>
                  <Form.Control value={code} onChange={onChangeCode} type="text" />
               </Form.Group>

               {!code && <Form.Text className="error">کد الزامی است</Form.Text>}
               <br />
               {props && <span>{recivedCode}</span>}
               <br />
               <Button onClick={handleConfirm} variant="outline-primary">
                  تایید
               </Button>
            </Form>
         </Card.Body>
         {loading && <span>در حال بارگذاری...</span>}
      </Card>
   )
}
export default ConfirmCode
