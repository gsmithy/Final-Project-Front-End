import axios from "axios";
import React, { useState, useEffect } from "react";
import { Card, Container, Button, ListGroup } from "react-bootstrap";


const DeletePost = () => {
  const [post, deletePost] = useState('');

  useEffect(() => {


    axios.delete('http://localhost:3001/posts').then((res) => {
      deletePost(res.data);
    });
  }, [id]);

  return;
}




export default DeletePost;