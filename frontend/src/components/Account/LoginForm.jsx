import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import {login} from '../../actions/auth';

function LoginForm({login}) {

  let navigate = useNavigate();

  const initialFormData = Object.freeze({
    email: '',
    password: '',
  });

 

  const [formData, setFormData] = useState(initialFormData);
  const { email, password } = formData;
 
  const handleChange = (e) => {
    setFormData({
      ...formData,
      // Trimming any whitespace
      [e.target.name]: e.target.value.trim(),
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    login(email,password)
  };

  // If user is athenticated then redirect him into home page

  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" onChange={handleChange} value={email}name='email' required/>
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password"  placeholder="Password" onChange={handleChange} value={password} name='password' required />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="outline-dark" type="submit" onClick={handleSubmit}>
        Login
      </Button>
      <p>Don't have an account <Link to="/register">Register</Link></p>
      <p>Forgot my password (reset password component)</p>
    </Form>
 
  );
};

const mapStateToProps = state => (
  {
    // is athenticated?
  }
)

export default connect(null,{login})(LoginForm);