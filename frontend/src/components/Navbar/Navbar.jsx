import React from "react";

import { Container } from "react-bootstrap";
import { Navbar } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Nav, NavDropdown } from "react-bootstrap";
import { Button, Form, FormControl } from "react-bootstrap";
import { Link,useNavigate } from "react-router-dom";

function Navibar() {

  let navigate=useNavigate();
  return (
    <>
      <Navbar expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand onClick={()=>{navigate('/')}}>

              <img
                alt=""
                src="https://react-bootstrap.netlify.app/logo.svg"
                width="30"
                height="30"
                className="d-inline-block align-top"
              />
{" "}
            Artificial Spot
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Form className="d-flex">
              <FormControl
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-info">Search</Button>
            </Form>
          </Navbar.Collapse>
          <Nav className="justify-content-end">

              <Button variant="outline-info" className="mx-3" onClick={()=>{navigate('/new-article')}}>
                Create Post
              </Button>

            <NavDropdown title="UserName" id="collasible-nav-dropdown">
              

                <NavDropdown.Item onClick={()=>{navigate('/dashboard')}}>
                  Dashboards
                </NavDropdown.Item>



                <NavDropdown.Item onClick={()=>{navigate('/reading-list')}}>
                  Reading List
                </NavDropdown.Item>


                <NavDropdown.Item onClick={()=>{navigate('/notifications')}}>
                  Notifications
                </NavDropdown.Item>


              <NavDropdown.Divider />

                <NavDropdown.Item  onClick={()=>{navigate('/settings')}}>Settings</NavDropdown.Item>

              <NavDropdown.Item  onClick={()=>{navigate('/logout')}}>Log Out</NavDropdown.Item>
           
            </NavDropdown>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default Navibar;
