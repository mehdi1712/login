import React from "react"
import "../styles/FormComponent.css"
import { Form, Button, Card } from "react-bootstrap"

const FormComponent = () => {
   return (
      <Card className="root-form">
         <Card.Header>ورود</Card.Header>
         <hr class="solid" />
         <Card.Body>
            <Form>
               <Form.Group>
                  <Form.Label>نام کاربری</Form.Label>
                  <Form.Control type="text" />
               </Form.Group>
               <Form.Text className="error">نام کاربری الزامی است</Form.Text>

               <Button variant="outline-primary">ادامه</Button>
            </Form>
         </Card.Body>
      </Card>
   )
}
export default FormComponent
