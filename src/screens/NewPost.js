import React from "react";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import axios from "axios";

const NewPost = (e) => {
  // const [user_name, setUsername] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");

  const createPost = () => {
    //e.preventDefault();

    if (description !== '' && location !== '') {
      const req = {
        description,
        location
      }

      const token = localStorage.getItem('myJWT')

      // if (!token) {
      //   //Redirect
      // };

      const options = {
        headers: {
          'Authorization' : `Bearer ${token}`
        }
      }

      axios.post('http://localhost:3001/posts', req, options)
        .then(result => {
        console.log(result.data);
      });
  };
};

  return (
    <div onChange={ createPost} >
      <Container className="p-4 d-flex justify-content-center">
        <Card style={{ width: "70rem" }}>
          <Card.Header className="text-center">Good News to Share</Card.Header>
          <Card.Body>

           
            {/* <Form.Select aria-label="Default select example" className="mb-3">
              <option>What Kind of News?</option>
              <option value="1">Healing!</option>
              <option value="2">Financial Provision!</option>
              <option value="3">Relationship Restoration!</option>
              <option value="4">Miracle!</option>
              <option value="5">Other!</option>
            </Form.Select> */}

            <FloatingLabel
              controlId="description"
              label="What Happened?"
              className="mb-3"
              onChange={e => setDescription(e.target.value) }
            >
              <Form.Control
                as="textarea"
                placeholder="Leave a testimony here"
                style={{ height: "100px" }}
              />
            </FloatingLabel>

            <FloatingLabel
              controlId="location"
              label="Where did this happen?"
              className="mb-3"
              onChange={e => setLocation(e.target.value) }
            >
              <Form.Control
                as="textarea"
                placeholder="Leave a testimony here"
                style={{ height: "100px" }}
              />
            </FloatingLabel>

            {/* <Form.Group controlId="formFileMultiple" className="mb-3">
              <Form.Label>Upload Pictures or Videos!</Form.Label>
              <Form.Control type="file" multiple />
            </Form.Group> */}

            <Form.Group className="d-flex justify-content-end">
              <Button variant="secondary" type="submit">
                Submit
              </Button>
            </Form.Group>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
 
};
export default NewPost;
