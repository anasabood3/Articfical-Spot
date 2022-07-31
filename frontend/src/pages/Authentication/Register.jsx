import React from "react";
import { Container } from "react-bootstrap";
import SignupForm from "../../components/Account/SignupForm";


function Register() {
  return (
    <Container className="py-5 d-flex justify-content-center">
      <SignupForm/>
    </Container>
  );
}

export default Register;
