import React from "react";

import { Container } from "react-bootstrap";
import { Navbar } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Nav, NavDropdown } from "react-bootstrap";
import { Button, Form, FormControl } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { Fragment } from "react";
import { useState } from 'react';
import { connect } from 'react-redux';
import { logout } from '../../redux/auth';


function Navibar({ logout, isAuthenticated }) {

  let navigate = useNavigate();

  
  const guestLinks = () => (
    <Fragment>
      <Button variant="outline-info" className="mx-3" onClick={() => { navigate('/login') }}>
        LOGIN
      </Button>
    </Fragment>
  )

  const authLinks = () => (
    <Fragment>
      <Button variant="outline-info" className="mx-3" onClick={() => { navigate('/new-article') }}>
        Create Post
      </Button>

      <NavDropdown id="collasible-nav-dropdown" title="Settings">

      <i class="fa fa-cog" aria-hidden="true"></i>
        <NavDropdown.Item onClick={() => { navigate('/dashboard') }}>
          Dashboards
        </NavDropdown.Item>



        <NavDropdown.Item onClick={() => { navigate('/reading-list') }}>
          Reading List
        </NavDropdown.Item>


        <NavDropdown.Item onClick={() => { navigate('/notifications') }}>
          Notifications
        </NavDropdown.Item>


        <NavDropdown.Divider />

        <NavDropdown.Item onClick={() => { navigate('/settings') }}>Settings</NavDropdown.Item>

        <NavDropdown.Item onClick={() => {logout() }}>Log Out</NavDropdown.Item>

      </NavDropdown>
    </Fragment>
  )

  return (
    <>
      <Navbar expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand onClick={() => { navigate('/') }}>

            <img
              alt=""
              src="https://seeklogo.com/images/B/blogger_B-logo-47610B2F87-seeklogo.com.png"
              width="30"
              height="30"
              className="d-inline-block align-top p-1"
            />
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

          {isAuthenticated?authLinks():guestLinks()}
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { logout })(Navibar);