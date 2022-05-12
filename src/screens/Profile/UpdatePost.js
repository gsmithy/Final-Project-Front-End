import axios from "axios";
import React, { useState, useEffect } from "react";
import { Card, Container, Button, ListGroup } from "react-bootstrap";

const EditPost = () => {
  const [post, editPost] = useState([]);

  let { username } = useParams();

  useEffect(() => {
    const url = `http://localhost:3001/posts/${username}`;
    axios.get(url).then((res) => {
      editPost(res.data);
    });
  }, [username]);

return (
  <div>
    <InputGroup size="sm" className="mb-3">
      <InputGroup.Text id="inputGroup-sizing-sm">Location</InputGroup.Text>
      <FormControl
        aria-label="Small"
        aria-describedby="inputGroup-sizing-sm"
      />
    </InputGroup>
    <InputGroup>
      <InputGroup.Text>description</InputGroup.Text>
      <FormControl as="textarea" aria-label="With textarea" />
    </InputGroup>
  </div>
);
};
export default EditPost;