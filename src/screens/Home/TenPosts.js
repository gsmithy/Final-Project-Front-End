import React from "react";
import axios from "axios";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
// import Carousel from "react-bootstrap/Carousel";

export default class PersonList extends React.Component {
  state = {
    persons: [],
  };

  componentDidMount() {
    axios.get(`http://localhost:3001/homelist`).then((res) => {
      const persons = res.data;
      this.setState({ persons });
      console.log(res.persons);
    });
  }

  render() {
    return (
      <div>
        {this.state.persons.map((person) => (
          <Container className="p-4 justify-content-center" key={person.id}>
            <Card>
              <Card.Header className="text-center">
                {person.user_name}
              </Card.Header>
              <Card.Body>
                <Card.Title>{person.location}</Card.Title>
                <Card.Text>{person.description}</Card.Text>
              </Card.Body>
            </Card>
          </Container>
        ))}

        {/* <Carousel>
        {this.state.persons.map((person) => (
          <Carousel.Item key={person.id}>
            <img
              className="d-block w-100"
              src="/Carousel.png"
              alt="First slide"
            />
            <Carousel.Caption>
              <h1>{person.description}</h1>
              <h3>{person.user_name}</h3>
              <p>{person.location}</p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
        </Carousel> */}
      </div>
    );
  }
}
