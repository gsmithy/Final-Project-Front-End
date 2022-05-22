import React, { useEffect, useState } from "react";
import axios from "axios";
import {Card, Button} from "react-bootstrap";
import { Nav } from "react-bootstrap";
import { useNavigate } from "react-router-dom";


const Admin = () => {
  let navigate = useNavigate();

   const [users, setUsers] = useState([]);

    useEffect(() => {
        let token = localStorage.getItem("myJWT");
        console.log(token);
        //added for unlogged in admins
        if (!token) {
          console.log('Sorry, You need to log in!')
          navigate('/login')
        }
        const options = {
            headers: {
              'Authorization': `Bearer ${token}`
            }
          }

        axios.get('http://localhost:3001/admin', options)
        .then(user => {
            setUsers(user.data);
            console.log(user.data);
        });
    }, []);

    return (
        <div>
            <h1>All Users</h1>
            <Nav className=" d-flex justify-content-beginning">
              <Nav.Link href="/adminposts">Posts</Nav.Link>
            </Nav>
            <ul className="admin-box">
              {users.map(user => 
                <Card key={user.id}>
                  <Card.Header as="h5">User</Card.Header>
                  <Card.Body>
                  <Card.Title>{user.first_name}</Card.Title>
                  <Card.Text>{user.last_name}</Card.Text>
                 
          <Button href={`/admin/editUser/${user.id}`} className="btn" variant="secondary">
              Edit
            </Button>
          </Card.Body>
        </Card>
        )}
            </ul>   
        </div>
    );
};

export default Admin;