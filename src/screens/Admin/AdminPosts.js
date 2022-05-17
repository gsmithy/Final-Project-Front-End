import React, { useEffect, useState } from "react";
import axios from "axios";
import { Card, Button } from "react-bootstrap";
import { Nav } from "react-bootstrap";

const AdminPosts = () => {
  const [posts, setPosts] = useState([]);
  const [status, setStatus] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem("myJWT");
    console.log(token);

    const options = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    axios.get("http://localhost:3001/home").then((post) => {
      console.log("post", post);
      setPosts(post.data);
    });
  }, []);

  return (
    <div>
      <h1>All Posts</h1>
      <Nav className=" d-flex justify-content-beginning">
        <Nav.Link href="/Admin">Users</Nav.Link>
      </Nav>
      <ul>
        {posts.map((post) => (
          <Card key={posts.id}>
            <Card.Header as="h5">{post.user_name}</Card.Header>
            <Card.Body>
              <Card.Title>Good News: {post.description}</Card.Title>
              <Card.Text>Location: {post.location}</Card.Text>

              <a
                href={`admin/editPost/${post.id}`}
                className="btn"
                variant="danger"
              >
                Edit
              </a>
            </Card.Body>
          </Card>
        ))}
      </ul>
    </div>
  );
};

export default AdminPosts;
