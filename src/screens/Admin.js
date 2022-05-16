import React, { useEffect, useState } from "react";
import axios from "axios";
import {Card, Button} from "react-bootstrap";



//Component is not rendering to page. "Undefined" error.
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
            <ul>
              {users.map(user => 
                <Card key={user.user_name}>
                  <Card.Header as="h5">User</Card.Header>
                  <Card.Body>
                  <Card.Title>{user.first_name}</Card.Title>
                  <Card.Text>{user.last_name}</Card.Text>
                 
            <Button className="btn" variant="danger">
              delete
            </Button>
          </Card.Body>
        </Card>
        )}
            </ul>   
        </div>
    );
};

export default Admin;