import axios from "axios";
import React, { useState, useEffect } from "react";
import { Card, Container, Button, ListGroup } from "react-bootstrap";
import EditPost from "./UpdatePost";

const Profile = () => {
  const [user, setUser] = useState(null);
  const [posts, setPosts] = useState(null);
  const [component, setComponent] = useState(null);

  useEffect(() => {

    

    let token = localStorage.getItem("myJWT");

    // console.log(token);
    const options = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    axios
      .post("http://localhost:3001/users/getInfo", { jwt: token }, options)
      .then((res) => {
        // console.log(res);
        setUser(res.data);
      })
      .catch((err) => {
        console.log(err);
      });

    // console.log(user);
  }, []);
  useEffect(() => {
    let token = localStorage.getItem("myJWT");

    // console.log(token);
    const options = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    axios
      .post("http://localhost:3001/posts/getPost", { jwt: token }, options)
      .then((res) => {
        setPosts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  // console.log("user", user);
  // console.log("posts", posts);

  const buttonFunction = () => {
    setComponent(<EditPost/>)
 };


  if (user === null) {
    return <div>loading user...</div>;
  } else {
    return (
      <div>
        <Container className="p-4 d-flex justify-content-center">
          <ListGroup variant="flush">
            <div>
              <img className="pp" src="/mock.jpeg" alt="" />
            </div>
            <ListGroup.Item>{user.user_name}</ListGroup.Item>
            <ListGroup.Item>
              {user.first_name} {user.last_name}
            </ListGroup.Item>
            <ListGroup.Item>{user.email}</ListGroup.Item>
            <ListGroup.Item>{user.address}</ListGroup.Item>
            <ListGroup.Item>{user.state}</ListGroup.Item>
            <ListGroup.Item>{user.city}</ListGroup.Item>
            <ListGroup.Item>{user.zip_code}</ListGroup.Item>
            <ListGroup.Item>{user.country}</ListGroup.Item>
          </ListGroup>
          <ul>
            {posts.map((post) => (
              <Card key={post.user_name}>
                <Card.Header as="h5">...</Card.Header>
                <Card.Body>
                  <Card.Title>{post.location}</Card.Title>
                  <Card.Text>{post.description}</Card.Text>
                  <Button onClick={this.buttonFunction()} className="btn" variant="primary">
                    edit
                  </Button>
                  <Button className="btn" variant="danger">
                    delete
                  </Button>
                </Card.Body>
              </Card>
            ))}
          </ul>
        </Container>
      </div>
    );
  }
};

export default Profile;





