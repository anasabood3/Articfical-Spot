import React from 'react'

import { Col,Row,Container } from 'react-bootstrap'


import NewArticleForm from "../../components/Article/NewArticleForm"


function NewArticle() {
  return (
    <Container>
      
      
      <Row>
      <Col md={8}>
        <div className="shadow-md p-3 bg-white rounded"><NewArticleForm/></div>
        </Col>
        <Col md={4}>
        <div className="shadow-md p-3 bg-white rounded"></div>
        </Col>
      </Row>
      
      
      </Container>
    
  )
}

export default NewArticle