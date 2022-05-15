import React from "react";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Button from "react-bootstrap/Button";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const EditPost = () => {
  const navigate = useNavigate();
  const [post, setPost] = useState("");
 

  // const [user, setUser] = useState(null);

  let params = useParams();

  useEffect(() => {
    axios.get(`http://localhost:3001/posts/getPost/${params.id}`).then(
      (res) => {
        console.log("setPost", res.data);
        setPost(res.data);
        console.log("post", post.id);
      }

      // console.log(res)
    );
  }, []);

  const updatePost = (e) => {
    e.preventDefault();
    // console.log('post', post)

    //  if (post.description !== "" && post.location !== "") {

    let req = {
      description: post.description,
      location: post.location,
      
    };

    const token = localStorage.getItem("myJWT");

    // if (!token) {
    //   // navigate("/login");
    //   console.log("no token");
    // }

    const options = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    axios.put(`http://localhost:3001/posts/${params.id}`, req).then(
      (res) => {
        console.log(res.data);
        //navigate("/profile");
      },
      (err) => {
        // localStorage.removeItem("myJWT");
      }
    );
  };
  // };

  return (
    <Form onSubmit={updatePost}>
      <Container className="p-4 d-flex justify-content-center">
        <Card style={{ width: "70rem" }}>
          <Card.Header className="text-center">Edit Your News..</Card.Header>
          <Card.Body>
            <FloatingLabel
              controlId="description"
              className="mb-3"
             
            >
              <Form.Control
                value={post.description}
                onChange={(event) => setPost({description: event.target.value})}
                as="textarea"
                style={{ height: "100px" }}
              />
            </FloatingLabel>

            <FloatingLabel
              controlId="location"
              className="mb-3"
              
            >
              <Form.Control
                as="textarea"
                value={post.location}
                onChange={(event) => setPost({location: event.target.value })}
                style={{ height: "100px" }}
              />
            </FloatingLabel>
            <Form.Group className="d-flex justify-content-end">
              <Button variant="secondary" type="submit">
                Submit
              </Button>
            </Form.Group>
          </Card.Body>
        </Card>
      </Container>
    </Form>
  );
};

export default EditPost;
