import React, { useEffect, useState } from "react";
import axios from "axios";
import {Card, Button} from "react-bootstrap";
import { Nav } from "react-bootstrap";



//Component is not rendering to page. "Undefined" error.
const AdminPosts = () => {
   const [posts, setPosts] = useState([]);
   const [status, setStatus] = useState([]);

    useEffect(() => {
        let token = localStorage.getItem("myJWT");
        console.log(token);
        const options = {
            headers: {
              'Authorization': `Bearer ${token}`
            }
          }

        axios.get('http://localhost:3001/admin/posts', options)
        .then(posts => {
            setPosts(posts.data);
            console.log(posts);
        })
    }, []);

    const deletePost = () => {
        axios.delete('http://localhost:3001/admin/delete')
        .then(() => {
            setStatus('Delete Successful');
        })
    }

    return (
        <div>
            <h1>All Posts</h1>
            <Nav className=" d-flex justify-content-beginning">
              <Nav.Link href="/Admin">Users</Nav.Link>
            </Nav>
            <ul>
              {posts.map(posts => 
                <Card key={posts.id}>
                  <Card.Header as="h5">{posts.user_name}</Card.Header>
                  <Card.Body>
                  <Card.Title>Good News: {posts.description}</Card.Title>
                  <Card.Text>Location: {posts.location}</Card.Text>
                 
            <Button onClick={ deletePost } className="btn" variant="danger">
              delete
            </Button>
          </Card.Body>
        </Card>
        )}
            </ul>   
        </div>
    );
};

export default AdminPosts;