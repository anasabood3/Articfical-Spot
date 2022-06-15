import React from "react";
import { Card,Row,Col,Button } from "react-bootstrap";
import { Link,useNavigate } from "react-router-dom";



function ArticleCard(props) {
  let navigate=useNavigate();

  
  return (
    <Card className=" shadow-sm mb-2">
      <Card.Img
        variant="top"
        src="https://thumbs.dreamstime.com/z/high-hopes-facebook-cover-file-fully-editable-66317529.jpg"
      />
      <Card.Body>
        <Card.Title>{props.article_data.title}</Card.Title>
        <Card.Text>{props.article_data.body}</Card.Text>
      </Card.Body>
      <Card.Footer>
        <Row >
          <Col className="d-flex justify-content-start"> <Button variant="outline-dark" size="sm">Save to Reading List</Button></Col>
          <Col className="d-flex justify-content-end"> <Button onClick={()=>{navigate(`/articles/${props.article_data.id}`)}} variant="outline-dark" size="sm" >More Details</Button></Col>
        </Row>
      </Card.Footer>
    </Card>
  );
}

export default ArticleCard;
