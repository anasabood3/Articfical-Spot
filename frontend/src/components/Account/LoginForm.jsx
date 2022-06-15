import React,{ useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";



function LoginForm() {
  
  let navigate=useNavigate();

  const initialFormData = Object.freeze({
		email: '',
		password: '',
	});

  const handleSubmit = (e) => {
		e.preventDefault();
		console.log(formData);
	};


  const [formData, updateFormData] = useState(initialFormData);

  const handleChange = (e) => {
		updateFormData({
			...formData,
			// Trimming any whitespace
			[e.target.name]: e.target.value.trim(),
		});
	};


  return (
    <Form>
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
    <Form.Group className="mb-3" controlId="formBasicCheckbox">
      <Form.Check type="checkbox" label="Check me out" />
    </Form.Group>
    <Button variant="outline-dark" type="submit" onClick={handleSubmit}>
      Login
    </Button>
  </Form>
  )
}

export default LoginForm