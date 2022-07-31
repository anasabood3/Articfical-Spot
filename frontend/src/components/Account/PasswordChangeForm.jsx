import React from 'react'
import {Form,Button} from 'react-bootstrap';
import { useState } from 'react';
import { change_password } from '../../redux/auth';
import { connect } from 'react-redux';
import { PasswordChangeSchema } from '../../validations/FormValidations';
import { useFormik } from 'formik';
import { Navigate } from 'react-router-dom';

const initialValues = {
  current_password: '',
  new_password: '',
  re_new_password: ''
}


function PasswordChangeForm({change_password,isAuthenticated}) {

  const formik = useFormik({
    initialValues,
    onSubmit: values => {
    console.log(values);
    change_password(values.current_password,values.new_password,values.re_new_password);
    },
    validationSchema: PasswordChangeSchema

  })

  if(!isAuthenticated)
  return <Navigate to="/login"/>

  return (
    <>
      <Form noValidate onSubmit={formik.handleSubmit}>
      <Form.Group className="mb-3">
      <Form.Control type="password" placeholder="Enter Old Password" name='current_password' {...formik.getFieldProps('current_password')} required isInvalid={!!(formik.errors.current_password) && formik.touched.current_password}/>
      <Form.Control.Feedback type="invalid">
          {formik.errors.current_password}
        </Form.Control.Feedback>
      </Form.Group>


        <Form.Group className="mb-3 " controlId="formBasicEmail">
          <Form.Label>New Password</Form.Label>
          <Form.Control type="password" placeholder="Enter New Password" name='new_password' {...formik.getFieldProps('new_password')} required isInvalid={!!(formik.errors.new_password) && formik.touched.new_password} />
          <Form.Control.Feedback type="invalid">
          {formik.errors.new_password}
        </Form.Control.Feedback>
          <br/>
          <Form.Control type="password" placeholder="Enter New Password Again" name='re_new_password' {...formik.getFieldProps('re_new_password')} required isInvalid={!!(formik.errors.re_new_password) && formik.touched.re_new_password}/>
          <Form.Control.Feedback type="invalid">
          {formik.errors.re_new_password}
        </Form.Control.Feedback>
        </Form.Group>

        <Button variant="outline-dark" type="submit">
          Change Password
        </Button>
      </Form>

    </>
  )
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
  // user_name:state.auth.user.user_name
});


export default connect(mapStateToProps,{change_password}) (PasswordChangeForm);