import axios from "axios";
import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";


const Profile = () => {
  const [posts, setPosts] = useState([]);

  //const url = 'http://localhost:3001/posts/'`${username}`;

  useEffect(() => {
    axios.get("http://localhost:3001/home").then((result) => {
      setPosts(result.data);
    });
  }, []);

  return (
    <Container className="p-4 d-flex justify-content-center">
      <div>
        <img />
        <h2>Name</h2>
        <ul>
          {posts.map((post) => (
            <li key={post.id}>{post.description}</li>
          ))}
        </ul>
      </div>
    </Container>
  );
};
export default Profile;
