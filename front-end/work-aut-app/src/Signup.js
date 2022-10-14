// imports react
import React, {useRef} from 'react'
// imports react boot-strap functions
import { Form, Button, Card} from "react-bootstrap"

export default function LogIn() {
    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmRef = useRef()
  return (
    <>
        <Card>
            <Card.Body>
                <h2 className="text-center mb-4">Sign Up</h2>
                <Form>
                    <Form.Group id = "email">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" ref={emailRef} required />
                    </Form.Group>
                    <Form.Group id = "password">
                        <Form.Label>password</Form.Label>
                        <Form.Control type="password" ref={passwordRef} required />
                    </Form.Group>
                    <Form.Group id = "password-conformation">
                        <Form.Label>Password Conformation</Form.Label>
                        <Form.Control type="password" ref={passwordConfirmRef} required />
                    </Form.Group>
                    <Button className="w-100" type="submit">Sign up</Button>
                </Form>
            </Card.Body>
        </Card>
        <div className='w-100 text-center mt-2'>
            Already have an account?LOG IN
        </div>
    </>
  )
}
