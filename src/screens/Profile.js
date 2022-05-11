import axios from "axios";
import React, { useState, useEffect } from "react";
import { Card, Container, Button, ListGroup } from "react-bootstrap";
import { useParams } from "react-router-dom";

const Profile = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    let token = localStorage.getItem("myJWT");

    // console.log(token);
    const options = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    axios
      .post("http://localhost:3001/users/getOne", { jwt: token }, options)
      .then((res) => {
        // console.log(res);
        setUser(res.data);
      })
      .catch((err) => {
        console.log(err);
      });

    console.log(user);
  }, []);

  if (user === null) {
    return <div>loading user</div>;
  } else {
    return (
      <div>
        <ListGroup variant="flush">
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
      </div>
    );
  }

  //   return (
  //     <Container className="p-4 d-flex justify-content-center">
  //       <div>
  //         <img className="pp" src='/mock.jpeg' alt="" />
  //         <GetProfile />
  //       </div>
  //       <GetPosts />
  //       <EditPost/>
  //     </Container>

  //   );
  // };

  //GET Profile

  // const [profile, setProfile] = useState([]);

  // let { username } = useParams();

  // useEffect(() => {
  //   const url = `http://localhost:3001/users/${username}`;
  //   axios.get(url).then((res) => {
  //     if (!res) {
  //       history.push('/')
  //        }
  //        return setProfile(res.data);

  //   })

  // }, [username]);

  // const GetPosts = () => {
  //   const [posts, setPosts] = useState([]);

  //   let { username } = useParams();

  //   useEffect(() => {
  //     const url = `http://localhost:3001/posts/${username}`;
  //     axios.get(url).then((res) => {
  //       setPosts(res.data);
  //     });
  //   }, [username]);

  //   return (
  //     <ul>
  //       {posts.map((post) => (
  //         <Card key={post.user_name}>
  //           <Card.Header as="h5">...</Card.Header>
  //           <Card.Body>
  //             <Card.Title>{post.location}</Card.Title>
  //             <Card.Text>{post.description}</Card.Text>
  //             <Button className="btn" variant="primary">
  //               edit
  //             </Button>
  //             <Button onClick={DelePost}className="btn" variant="danger">
  //               delete
  //             </Button>
  //           </Card.Body>
  //         </Card>
  //       ))}
  //     </ul>
  //   );
  // };

  // const EditPost = () => {
  //   const [post, editPost] = useState([]);

  //   let { username } = useParams();

  //   useEffect(() => {
  //     const url = `http://localhost:3001/posts/${username}`;
  //     axios.get(url).then((res) => {
  //       editPost(res.data);
  //     });
  //   }, [username]);

  // return (
  //   <div>
  //     <InputGroup size="sm" className="mb-3">
  //       <InputGroup.Text id="inputGroup-sizing-sm">Location</InputGroup.Text>
  //       <FormControl
  //         aria-label="Small"
  //         aria-describedby="inputGroup-sizing-sm"
  //       />
  //     </InputGroup>
  //     <InputGroup>
  //       <InputGroup.Text>description</InputGroup.Text>
  //       <FormControl as="textarea" aria-label="With textarea" />
  //     </InputGroup>
  //   </div>
  // );

  // const DelePost = () => {
  //   const [post, deletePost] = useState([]);

  //   let { id } = useParams();

  //   useEffect(() => {
  //     const url = `http://localhost:3001/posts/${id}`;
  //     axios.delete(url).then((res) => {
  //       deletePost(res.data);
  //     });
  //   }, [id]);

  //   return;
};

export default Profile;
