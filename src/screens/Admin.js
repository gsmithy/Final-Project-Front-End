import React, { useEffect, useState } from "react";
import axios from "axios";
import {Card, Button} from "react-bootstrap";
import { Nav } from "react-bootstrap";




const Admin = () => {
   const [users, setUsers] = useState([]);

    useEffect(() => {
        let token = localStorage.getItem("myJWT");
        console.log(token);
        const options = {
            headers: {
              'Authorization': `Bearer ${token}`
            }
          }

        axios.get('http://localhost:3001/admin', options)
        .then(users => {
            setUsers(users.data);
            console.log(users);
        })
    }, []);

    return (
        <div>
            <h1>All Users</h1>
            <Nav className=" d-flex justify-content-beginning">
              <Nav.Link href="/AdminPosts">Posts</Nav.Link>
            </Nav>
            <ul>
              {users.map(user => 
                <Card key={user.id}>
                  <Card.Header as="h5">User</Card.Header>
                  <Card.Body>
                  <Card.Title>{user.first_name}</Card.Title>
                  <Card.Text>{user.last_name}</Card.Text>
                 
            <Button className="btn" variant="danger">
              Delete
            </Button>
          </Card.Body>
        </Card>
        )}
            </ul>   
        </div>
    );
};

export default Admin;