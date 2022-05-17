import React from "react";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Button from "react-bootstrap/Button";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const EditPost = () => {
  const navigate = useNavigate();
  const [posts, setPost] = useState({
    description: "",
    location: "",
  });
  const [user, setUser] = useState(null);
  let params = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:3001/posts/getPost/${params.id}`)
      .then((res) => {
        setPost(res.data);
        setUser(res.data);
        console.log("setPost", res.data);
        console.log("post", posts.id);
      });
  }, []);

  const updatePost = (e) => {
    e.preventDefault();
    // console.log('post', post)

    if (posts.description !== "" && posts.location !== "") {
      let req = {
        description: posts.description,
        location: posts.location,
        // user: user.user_name,
        // id: user.id,
      };
      const token = localStorage.getItem("myJWT");
      if (!token) {
        // navigate("/login");
        console.log("no token");
      }
      const options = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      axios.put(`http://localhost:3001/posts/${params.id}`, req, options).then(
        (res) => {
          console.log("res", res.status);
          //navigate("/profile");
        },
        (err) => {
          // localStorage.removeItem("myJWT");
        }
      );
    }
  };

  const deletePost = () => {
    const token = localStorage.getItem("myJWT");

    if (!token) {
      console.log("sorry no token");
    }
    const options = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    axios.delete(`http://localhost:3001/posts/${params.id}`, options).then(
      (res) => {
        console.log(res.data, "delete success");
        navigate("/profile");
      },
      (err) => {
        console.log("ooops, something went wrong!");
        localStorage.removeItem("myJWT");
      }
    );
  };

  const handleChange = (event) => {
    setPost((preValue) => {
      return { ...preValue, [event.target.name]: event.target.value };
    });
  };

  // const test = () => {
  //   console.log(posts)
  // }

  return (
    <Form onSubmit={updatePost}>
      <Container className="p-4 d-flex justify-content-center">
        <Card style={{ width: "70rem" }}>
          <Card.Header className="text-center">Edit Your News..</Card.Header>
          <Card.Body>
            <FloatingLabel
              label="What Happened?"
              controlId="description"
              className="mb-3"
            >
              <Form.Control
                name="description"
                value={posts.description}
                onChange={handleChange}
                as="textarea"
                style={{ height: "100px" }}
              />
            </FloatingLabel>

            <FloatingLabel
              label="Where did this happen?"
              controlId="location"
              className="mb-3"
            >
              <Form.Control
                name="location"
                value={posts.location}
                onChange={handleChange}
                as="textarea"
                style={{ height: "100px" }}
              />
            </FloatingLabel>
            <Form.Group className="d-flex justify-content-end">
              <Button variant="secondary" type="submit">
                Submit
              </Button>
              <Button onClick={deletePost} variant="secondary">
                Delete
              </Button>
              {/* <Button type="button" onClick={test} variant="secondary">
                test
              </Button> */}
            </Form.Group>
          </Card.Body>
        </Card>
      </Container>
    </Form>
  );
};

export default EditPost;
