import React from 'react'
import axios from "axios";

import { useEffect, useState } from "react";

import { useParams } from 'react-router-dom';


function ArticleContent(props) {
  const [article, setArticle] = useState({});


  let { id } = useParams();

  useEffect(() => {
    axios
      .get(`http://127.0.0.1:8000/posts/${id}`)
      .then((res) => {
        setArticle(res.data);
      })
      .catch((err) => {
       alert(err);
      });
  });

  return (
    <div className="blog-post">
      <h2 className="blog-post-title">{article.title}</h2>
      <p className="blog-post-meta">
        {article.publish_date}
      </p>

      <blockquote>
        <p>
          {article.content}
        </p>
      </blockquote>

    </div>
  );
}

export default ArticleContent