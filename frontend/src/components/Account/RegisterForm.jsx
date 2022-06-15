import React from "react";
import { Form, Button,InputGroup,Container } from "react-bootstrap";



function RegisterForm() {
  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Full Name</Form.Label>
        <InputGroup className="mb-3">
          <Form.Control aria-label="First name" placeholder="First Name" />
          <Form.Control aria-label="Last name" placeholder="Last Name" />
        </InputGroup>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Username</Form.Label>
        <Form.Control type="text" placeholder="Start with a letter ..." />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password (Again)</Form.Label>
        <Form.Control
          type="password"
          placeholder="Retype your password again"
        />
      </Form.Group>

      <Button variant="outline-dark" type="submit">
        Sign Up
      </Button>
    </Form>
  );
}

export default RegisterForm;
