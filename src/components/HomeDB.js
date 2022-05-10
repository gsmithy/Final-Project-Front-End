import React from "react";
import axios from "axios";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";

export default class PersonList extends React.Component {
  state = {
    persons: [],
  };

  componentDidMount() {
    axios.get(`http://localhost:3001/home`).then((res) => {
      const persons = res.data;
      this.setState({ persons });
      console.log(res.persons);
    });
  }

  render() {
    return (
      <ul>
        {this.state.persons.map((person) => (
          <Container className="p-4 d-flex justify-content-center">
              <Card style={{ width: "40rem" }} key={person.id}>
                <Card.Header>
                <Card.Title>{person.user_name}</Card.Title>
                </Card.Header>
                <Card.Body>
                <Card.Subtitle>{person.location}</Card.Subtitle>
                <Card.Text>{person.description}</Card.Text>
                </Card.Body>
              </Card>
          </Container>
        ))}
      </ul>
    );
  }
}
