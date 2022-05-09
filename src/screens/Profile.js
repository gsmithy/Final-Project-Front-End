import axios from "axios";
import React, { useState, useEffect } from "react";
import { Card, Container, Button, ListGroup } from "react-bootstrap";
import { useParams } from "react-router-dom";

const Profile = () => {
  return (
    <Container className="p-4 d-flex justify-content-center">
      <div>
        <img className="pp" src="/mock.jpeg" alt="" />
        <GetProfile />
      </div>
      <GetPosts />
    </Container>
  );
};

//GET Profile
const GetProfile = () => {
  const [profile, setProfile] = useState([]);

  let { username } = useParams();

  useEffect(() => {
    const url1 = `http://localhost:3001/users/${username}`;
    axios.get(url1).then((res) => {
      setProfile(res.data);
    });
  }, []);
  return (
    <div>
      <ListGroup variant="flush">
        <ListGroup.Item>{profile.user_name}</ListGroup.Item>
        <ListGroup.Item>
          {profile.first_name} {profile.last_name}
        </ListGroup.Item>
        <ListGroup.Item>{profile.email}</ListGroup.Item>
        <ListGroup.Item>{profile.address}</ListGroup.Item>
        <ListGroup.Item>{profile.state}</ListGroup.Item>
        <ListGroup.Item>{profile.city}</ListGroup.Item>
        <ListGroup.Item>{profile.zip_code}</ListGroup.Item>
        <ListGroup.Item>{profile.country}</ListGroup.Item>
      </ListGroup>
    </div>
  );
};

const GetPosts = () => {
  const [posts, setPosts] = useState([]);

  let { username } = useParams();

  useEffect(() => {
    const url2 = `http://localhost:3001/posts/${username}`;
    axios.get(url2).then((res) => {
      setPosts(res.data);
    });
  }, []);

  return (
    <ul>
      {posts.map((post) => (
        <Card key={post.UserId}>
          <Card.Header as="h5">...</Card.Header>
          <Card.Body>
            <Card.Title>{post.location}</Card.Title>
            <Card.Text>{post.description}</Card.Text>
            <Button variant="primary">edit</Button>
            <Button variant="primary">delete</Button>
          </Card.Body>
        </Card>
      ))}
    </ul>
  );
};

export default Profile;
