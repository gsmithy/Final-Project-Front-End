import React, { useEffect, useState } from "react";
import axios from "axios";
import { Card, Button } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";

const UpdateUser = () => {
  let params = useParams();

  const navigate = useNavigate();
  const [user, setUser] = useState("");

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
      .get(`http://localhost:3001/admin/${params.id}`, options)
      .then((res) => {
        setUser(res.data);
      });
  }, []);

  const deleteUser = () => {
    const token = localStorage.getItem("myJWT");

    if (!token) {
      console.log("sorry no token");
    }
    const options = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    axios.delete(`http://localhost:3001/admin/user/${params.id}`, options).then(
      (res) => {
        console.log(res.data, "delete success");
        navigate("/admin");
      },
      (err) => {
        console.log("ooops, something went wrong!");
        // localStorage.removeItem("myJWT");
      }
    );
  };

  return (
    <div>
      <h1>User</h1>
      <Nav className=" d-flex justify-content-beginning"></Nav>
      <ul>
        <Card>
          <Card.Header as="h5">User</Card.Header>
          <Card.Body>
            <Card.Title>{user.first_name}</Card.Title>
            <Card.Text>{user.last_name}</Card.Text>
            <Button onClick={deleteUser} className="btn" variant="danger">
              Delete
            </Button>{" "}
            || <a href="/admin">Back</a>
          </Card.Body>
        </Card>
      </ul>
    </div>
  );
};

export default UpdateUser;
