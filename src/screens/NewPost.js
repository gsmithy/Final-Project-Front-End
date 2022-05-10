import React from "react";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Button from "react-bootstrap/Button";

const NewPost = () => {
  return (
    <div>
      <Container className="p-4 d-flex justify-content-center">
        <Card style={{ width: "70rem" }}>
          <Card.Header className="text-center">Good News to Share</Card.Header>
          <Card.Body>
            <FloatingLabel
              controlId="floatingInput"
              label="Email address"
              className="mb-3"
            >
              <Form.Control type="email" placeholder="name@example.com" />
            </FloatingLabel>

            <Form.Select aria-label="Default select example" className="mb-3">
              <option>What Kind of News?</option>
              <option value="1">Healing!</option>
              <option value="2">Financial Provision!</option>
              <option value="3">Relationship Restoration!</option>
              <option value="4">Miracle!</option>
              <option value="5">Other!</option>
            </Form.Select>

            <FloatingLabel
              controlId="floatingTextarea2"
              label="What Happened?"
              className="mb-3"
            >
              <Form.Control
                as="textarea"
                placeholder="Leave a testimony here"
                style={{ height: "100px" }}
              />
            </FloatingLabel>

            <Form.Group controlId="formFileMultiple" className="mb-3">
              <Form.Label>Input Pictures or Videos!</Form.Label>
              <Form.Control type="file" multiple />
            </Form.Group>

            <Form.Group className="d-flex justify-content-end">
              <Button variant="secondary" type="submit" method="post">
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
