import React from "react";
import axios from "axios";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Carousel from "react-bootstrap/Carousel";


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
      <div>
        <Carousel>
        {this.state.persons.map((person) => (
          // <Container className="p-4 d-flex justify-content-center">
          //   <Card style={{ width: "40rem" }} key={person.id}>
          //     <Card.Header>
          //       <Card.Title>{person.user_name}</Card.Title>
          //     </Card.Header>
          //     <Card.Body>
          //       <Card.Subtitle>{person.location}</Card.Subtitle>
          //       <Card.Text>{person.description}</Card.Text>
          //     </Card.Body>
          //   </Card>
          // </Container>
          <Carousel.Item key={person.id}>
            <img
              className="d-block w-100"
              src="https://via.placeholder.com/300x150/CBA8A0/FFFFFF/?text=Good+News!"
              alt="First slide"
            />
            <Carousel.Caption>
              <h1>{person.description}</h1>
              <h3>{person.user_name}</h3>
              <p>{person.location}</p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
        </Carousel>
      </div>
    );
  }
}

