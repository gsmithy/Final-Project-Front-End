import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";

// const Header = ({ title }) => {
//   return (
//     <div>
//       <a href="/">Home</a>
//       <a href="/login">Login</a>
//       <a href="/newpost">New Post</a>
//       <a href="/profile">Profile</a>
//       <a href="/signup">Sign Up</a>
//       <h1> {{ title }} </h1>
//     </div>
//   );
// };

// export default Header;

export default class Header extends React.Component {
  render() {
    return (
      <div>
        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="/">Good News!</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/login">Login</Nav.Link>
              <Nav.Link href="/newpost">New Post</Nav.Link>
              <Nav.Link href="/profile">Profile</Nav.Link>
              <Nav.Link href="/Sign Up">Sign Up</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      </div>
    );
  }
}
