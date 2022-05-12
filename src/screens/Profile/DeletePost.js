import axios from "axios";
import React, { useState, useEffect } from "react";
import { Card, Container, Button, ListGroup } from "react-bootstrap";


const DeletePost = () => {
  const [post, deletePost] = useState([]);

  let { id } = useParams();

  useEffect(() => {
    const url = `http://localhost:3001/posts/${id}`;
    axios.delete(url).then((res) => {
      deletePost(res.data);
    });
  }, [id]);

  return;
}




export default DeletePost;