import { Alert } from "bootstrap";
import React from "react";
import { Badge,ListGroup } from "react-bootstrap";



function Categories() {
  return (
    <ListGroup as="ul">
      
      <ListGroup.Item
        as="li"
        className="d-flex justify-content-between align-items-start"
        action
        onClick={() => alert("Hello Amego")}
      >
        <div className="fw-bold">Sport</div>

        <Badge bg="primary" pill>
          14
        </Badge>
      </ListGroup.Item>
      <ListGroup.Item
        as="li"
        className="d-flex justify-content-between align-items-start"
        action
        onClick={() => alert("Hello Amego")}
      >
        <div className="fw-bold">Politic</div>

        <Badge bg="primary" pill>
          14
        </Badge>
      </ListGroup.Item>
      <ListGroup.Item
        as="li"
        className="d-flex justify-content-between align-items-start"
        action
        onClick={() => alert("Hello Amego")}
      >
        <div className="fw-bold">Cenima</div>

        <Badge bg="primary" pill>
          14
        </Badge>
      </ListGroup.Item>
      <ListGroup.Item
        as="li"
        className="d-flex justify-content-between align-items-start"
        action
        onClick={() => alert("Hello Amego")}
      >
        <div className="fw-bold">Games</div>

        <Badge bg="primary" pill>
          14
        </Badge>
      </ListGroup.Item>
    </ListGroup>
  );
}

export default Categories;
