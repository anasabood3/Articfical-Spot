import React from "react";
import { Container } from "react-bootstrap";
import RegisterForm2 from "../../components/Account/RegisterForm2"; 


function Register() {
  return (
    <Container className="py-5 d-flex justify-content-center">
      <RegisterForm2/>
    </Container>
  );
}

export default Register;
