import React from "react";
import { Container } from "react-bootstrap";
import LoginForm from "../../components/Account/LoginForm";
import { Link, Redirect } from 'react-router-dom';


function Login() {
  return (
    <Container className="py-5  d-flex justify-content-center">
     <LoginForm/>
    </Container>
  );
}

export default Login;
