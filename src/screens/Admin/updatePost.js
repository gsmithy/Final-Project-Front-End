import React, { useEffect, useState } from "react";
import axios from "axios";
import { Card, Button } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";

const UpdatePost = () => {
  let params = useParams();

  const navigate = useNavigate();
  const [posts, setPost] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("myJWT");

    if (!token) {
      console.log("sorry no token");
    }
    const options = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    axios
      .get(`http://localhost:3001/posts/getPost/${params.id}`)
      .then((res) => {
        setPost(res.data);
      });
  }, []);

  const deletePost = () => {
    const token = localStorage.getItem("myJWT");

    if (!token) {
      console.log("sorry no token");
    }
    const options = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    axios.delete(`http://localhost:3001/admin/${params.id}`, options).then(
      (res) => {
        console.log(res.data, "delete success");
        navigate("/adminPosts");
      },
      (err) => {
        console.log("ooops, something went wrong!");
        // localStorage.removeItem("myJWT");
      }
    );
  };

  return (
    <div>
      <h1>All Posts</h1>
      <Nav className=" d-flex justify-content-beginning">
        <Nav.Link href="/Admin">Post</Nav.Link>
      </Nav>
      <ul>
        <Card>
          <Card.Header as="h5">{posts.user_name}</Card.Header>
          <Card.Body>
            <Card.Title>Good News: {posts.description}</Card.Title>
            <Card.Text>Location: {posts.location}</Card.Text>
            <Button onClick={deletePost} className="btn" variant="danger">
              Delete
            </Button>{" "}
            || <a href="/adminposts">Back</a>
          </Card.Body>
        </Card>
      </ul>
    </div>
  );
};

export default UpdatePost;
