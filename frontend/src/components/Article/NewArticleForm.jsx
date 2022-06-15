import React from "react";
import { Form,Button,Alert } from "react-bootstrap";
import { useState } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";



function NewArticleForm() {

  const [article, setArticle] = useState({userId:'2',title:"",body:""});

  const { register, handleSubmit, formState: { errors,isSubmitSuccessful } } = useForm();

  const addArticle = e => {

    axios.post("https://jsonplaceholder.typicode.com/posts",article).then(
      res=>{console.log(res)}
    ).catch(err=>{console.log(err)});
  };



  return (
    <Form onSubmit={handleSubmit(addArticle)}>
      {isSubmitSuccessful && <Alert variant="success" className="py-3">Article was susccessfully posted</Alert>}
      <Form.Group className="mb-3">
        <Form.Label>Title</Form.Label>
        <Form.Control type="text" placeholder="Enter title" {...register("title", {required: "Title can not be empty", maxLength: 80})} value={article.title} onChange={e=>setArticle({...article,title:e.target.value})}/>
        
      </Form.Group>
      {errors.title && <Alert variant="danger">{errors.title.message}</Alert>}
      <Form.Group className="mb-3">
        <Form.Label>Content</Form.Label>
        <Form.Control type="text" placeholder="type your article here..." {...register("content", {required: "What a fucking empty article",minLength : {
  value: 25,
  message: 'shorter than my nail' 
}})} value={article.body} onChange={e=>setArticle({...article,body:e.target.value})}/>
      </Form.Group>
      {errors.content && <Alert variant="danger">{errors.content.message}</Alert>}
      <div className="d-flex justify-content-end">
        <Button className="mx-1" variant="primary" type="submit" >
          Post
        </Button>
        <Button className="mx-1" variant="warning">
          Draft
        </Button>
      </div>
      
    </Form>
    
  );
}

export default NewArticleForm;


