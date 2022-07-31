import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { Link, Navigate } from 'react-router-dom';
import { connect } from 'react-redux';
import { login } from "../../redux/auth";
import { useFormik } from 'formik';
import { LoginSchema } from "../../validations/FormValidations";


const initialValues = {
  email: "",
  password: ""
}


function LoginForm({ login, isAuthenticated}) {


    const formik = useFormik({
      initialValues,
      onSubmit: values => {
      login(values.email,values.password);
      },
      validationSchema:LoginSchema
      
  })

if(isAuthenticated)
  return <Navigate to="/"/>
  
  return (
    <>
    <Form onSubmit={formik.handleSubmit} noValidate={true}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.email} name='email' required isInvalid={!!(formik.errors.email)&&formik.touched.email}/>
            <Form.Control.Feedback type="invalid">
                {formik.errors.email}
            </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" onChange={formik.handleChange} onBlur={formik.handleBlur}  value={formik.values.password} name='password' required isInvalid={!!(formik.errors.password && formik.touched.password)}/>
            <Form.Control.Feedback type="invalid">
                {formik.errors.password}
            </Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="outline-dark" type="submit" >
            Login
        </Button>
        <p>Don't have an account <Link to="/register">Register</Link></p>
        <p>Forgot my password <Link to="/reset-password">Reset Password</Link></p>
    </Form>

</>

  );
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { login })(LoginForm);