import axios from "axios";
import React, { useState, useEffect } from "react";
import { Card, Container, Form, Button, ListGroup, NavItem } from "react-bootstrap";
import { Navigate, useNavigate, useParams } from "react-router-dom";

const ImgUpload = (props) => {
  let [image, setImage] = useState("");
  const [selectedFile, setSelectedFile] = useState("");
  const [preview, setPreview] = useState("");
let navigate = useNavigate();

  let params = useParams();

  const token = localStorage.getItem("myJWT");
  const options = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const onFileSelected = (e) => {
    if (e.target.files[0]) {
      setSelectedFile(e.target.files[0]);
      console.log("name:", e.target.files[0]);
    }
  };

  const uploadFile = (e) => {
    e.preventDefault();
    try {
      // construct the file name
      let fileData = new FormData();
      //Prepend
      fileData.set("image", selectedFile, `${Date.now()}-${selectedFile.name}`);
      //set request headers
      const headers = {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${props.token}`,
        },
      };

      //post to the server

      axios
        .post(
          `http://localhost:3001/users/images/${params.id}`,
          fileData,
          headers
        )
        .then((res) => {
          console.log(res);
          navigate('/profile')
        });
    } catch {}
  };
  //LOAD IMAGE PREVIEW WHEN UPLOADED
  useEffect(() => {
    if (selectedFile) {
      const reader = new FileReader();
      reader.onloadend = () => setPreview(reader.result);
      reader.readAsDataURL(selectedFile);
    }
  }, [selectedFile]);

  useEffect(() => {
    axios
      .post(
        `http://localhost:3001/users/getInfo/${params.id}`,
        { jwt: token },
        options
      )
      .then((res) => {
        setImage(res.data);
        console.log("DATA", res.data);
      });
  }, []);

  return (
    <>
    <Form onSubmit={uploadFile}>
    <div>Upload Photo for {image.first_name} </div>
      
      <Container className="p-4 d-flex justify-content-center">
        <Card style={{ width: "70rem" }}>
          <Card.Header className="text-center">Upload Something..</Card.Header>
          <Card.Body></Card.Body>

    <Form.Group controlId="formFileMultiple" className="mb-3">
              <Form.Label>Upload your picture!</Form.Label>
              <Form.Control type="file" onChange={onFileSelected} multiple />
            </Form.Group>
            <img src={image.profile_pic} />
            {preview ? <img src={preview} alt="preview" width="250" /> : ""}
            <Button variant="secondary"type="submit">Submit</Button>
            </Card>
      </Container>
      </Form>
           </>
  );
};

export default ImgUpload;
