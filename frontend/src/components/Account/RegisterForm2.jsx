import React,{ useState } from "react";

import { useNavigate } from "react-router-dom";


import { Form, Button,InputGroup,Container } from "react-bootstrap";



function RegisterForm2() {

  let navigate=useNavigate();

  const initialFormData = Object.freeze({
		email: '',
		username: '',
		password: '',
	});


  const [formData, updateFormData] = useState(initialFormData);


  const handleChange = (e) => {
		updateFormData({
			...formData,
			// Trimming any whitespace
			[e.target.name]: e.target.value.trim(),
		});
	};

  const handleSubmit = (e) => {
		e.preventDefault();
		console.log(formData);

		
	};

  return (
    <Form noValidate>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Username</Form.Label>
        <Form.Control type="text" placeholder="Start with a letter ..." onChange={handleChange} name='username'/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" onChange={handleChange} name='email' />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" onChange={handleChange} name='password'/>
      </Form.Group>

      <Button variant="outline-dark" type="submit" onClick={handleSubmit}>
        Sign Up
      </Button>
    </Form>
  );
}

export default RegisterForm2;
