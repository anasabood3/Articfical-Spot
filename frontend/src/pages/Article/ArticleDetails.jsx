import React from 'react'

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import ArticleActions from "../../components/Article/ArticleActions";
import ArticleContent from "../../components/Article/ArticleContent";
import ArticleAuthor from "../../components/Article/ArticleAuthor";
import CommentForm from "../../components/Comment/CommentForm"
import Comment from '../../components/Comment/Comment';


function ArticleDetails() {
  return (
    <Container fluid>
      <Row>
        <Col md={1}>
          <div className="shadow-sm p-3 mb-5 bg-white rounded position-fixed">
            <ArticleActions />
          </div>
        </Col>

        <Col md={7}>
          <div className="shadow-md p-3 mb-5 bg-white rounded">
            <ArticleContent />
          </div>
          <div className="p-3 mb-5 bg-white rounded">
            <CommentForm />
            <Comment />
            <Comment />
            <Comment />
            <Comment />
          </div>
        </Col>
        <Col md={4}>
          <div className="shadow-sm p-3 mb-5 bg-white rounded">
            <ArticleAuthor />
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default ArticleDetails