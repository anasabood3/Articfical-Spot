import React, { useState } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import { connect } from 'react-redux';
import { update_account } from "../../redux/auth";
import { useFormik } from 'formik';
import { AccountEditSchema } from "../../validations/FormValidations";
import { Navigate } from "react-router-dom";



function AccountEditForm({ user, update_account,isAuthenticated }) {

  const formik = useFormik({
    initialValues:user,
    onSubmit: values => {
      update_account(values);

    },
    validationSchema: AccountEditSchema

  })


    if (!isAuthenticated) {
      return <Navigate to='/login' />
  }


  return (
    <Form onSubmit={formik.handleSubmit} noValidate>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Row>
          <Col><Form.Label>First Name</Form.Label>
            <Form.Control type="text" placeholder="At least 4 characters" name='first_name' onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.first_name} required isInvalid={!!(formik.errors.first_name)&&formik.touched.first_name} />
            <Form.Control.Feedback type="invalid">
                {formik.errors.first_name}
            </Form.Control.Feedback></Col>
          <Col><Form.Label>Last Name</Form.Label>
            <Form.Control type="text" placeholder="At least 4 characters" name='last_name' {...formik.getFieldProps('last_name')} isInvalid={!!(formik.errors.last_name)&&formik.touched.last_name} />
            <Form.Control.Feedback type="invalid">
                {formik.errors.last_name}
            </Form.Control.Feedback></Col>
        </Row>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>User Name</Form.Label>
        <Form.Control type="text" disabled name='user_name' {...formik.getFieldProps('user_name')} isInvalid={!!(formik.errors.user_name) && formik.touched.user_name} />
        <Form.Control.Feedback type="invalid">
          {formik.errors.user_name}
        </Form.Control.Feedback>
        <Form.Label>E-mail Address</Form.Label>
        <Form.Control type="email" name='email' disabled {...formik.getFieldProps('email')} required isInvalid={!!(formik.errors.email) && formik.touched.email} />
        <Form.Control.Feedback type="invalid">
          {formik.errors.email}
        </Form.Control.Feedback>
        <Form.Label>Phone Number</Form.Label>
        <Form.Control type="text" name='phone_number' {...formik.getFieldProps('phone_number')} isInvalid={!!(formik.errors.phone_number) && formik.touched.phone_number} />
        <Form.Control.Feedback type="invalid">
          {formik.errors.phone_number}
        </Form.Control.Feedback>
      </Form.Group>


      <Form.Group className="mb-3">
        <Form.Label>Date of Birth</Form.Label>
        <Form.Control type="text" placeholder="YYYY-MM-DD" name='date_of_birth' {...formik.getFieldProps('date_of_birth')} isInvalid={!!(formik.errors.date_of_birth)&&formik.touched.date_of_birth} />
        <Form.Control.Feedback type="invalid">
          {formik.errors.date_of_birth}
        </Form.Control.Feedback>
        <Form.Label>Gender</Form.Label>
        <Form.Select name="gender" {...formik.getFieldProps('gender')}>
          <option value="M">Male</option>
          <option value="F">Female</option>
        </Form.Select>

      </Form.Group>


      <Form.Group className="mb-3">
        <Row>
          <Col><Form.Label>Country</Form.Label>
            <Form.Control type="text" placeholder="Enter Country" name='country' {...formik.getFieldProps('country')} isInvalid={!!(formik.errors.country)&&formik.touched.country} /></Col>
          <Col><Form.Label>City</Form.Label>
            <Form.Control type="text" name='city' {...formik.getFieldProps('city')} isInvalid={!!(formik.errors.city)&&formik.touched.city} /></Col>
        </Row>
      </Form.Group>


      <Form.Group className="mb-3">
        <Form.Label>About</Form.Label>
        <Form.Control type="text" placeholder="Enter Your Bio" name='about' {...formik.getFieldProps('about')} isInvalid={!!(formik.errors.about)&&formik.touched.about} />
        <Form.Control.Feedback type="invalid">
          {formik.errors.about}
        </Form.Control.Feedback>
      </Form.Group>

      <Button variant="outline-dark" type="submit">
        Update
      </Button>
    </Form>
  );
};

const mapStateToProps = state => ({
  user: state.auth.user,
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { update_account })(AccountEditForm);