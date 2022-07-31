import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

import Col from "react-bootstrap/Col";

import Categories from "../../components/Categories/Categories";
import ArticleCard from "../../components/Article/ArticleCard";
import axios from "axios";
import Animations from "../../components/Article/ArticleLoading";
import { useEffect, useState } from "react";




function Feed() {
  const [articles, setArticles] = useState([]);
  const [loaded,setLoaded]=useState(false);



  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        setArticles(res.data);
        setLoaded(true);
      })
      .catch((err) => {
       alert(err);
      });
  }, []);

  return (
    <Container fluid>
      <Row>
        <Col md={3}>

          <div className="shadow-sm p-3 mb-5 bg-white rounded">
          <h4>Categories</h4>
            <Categories />
          </div>
        </Col>

        <Col md={6}>
          {/* {loaded?articles.map((article) => (
            <div className="p-3 mb-5 bg-white rounded">
            <ArticleCard key={article.id} article_data={article} />
            </div>
            )):<Animations/>} */}
        </Col>

        <Col md={3}>
          <div className="shadow-sm p-3 mb-5 bg-white rounded">
          <h4>Info and Ads</h4>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Feed;
