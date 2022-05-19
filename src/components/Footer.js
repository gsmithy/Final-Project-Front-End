import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

const FooterPage = () => {
  return (
    <div className="flex">
      <Container className="footer">
        <Navbar  className="justify-content-center" variant="light" bg="light">
            <Navbar.Brand href="/admin">
              <img className='footerLogo'src="/BlackWorld.svg" alt="good news logo" />
            </Navbar.Brand>
          <Nav>
            <Nav.Link href="/">
              &copy; {new Date().getFullYear()} Copyright: GoodNews.com
            </Nav.Link>
          </Nav>
        </Navbar>
      </Container>
    </div>
  );
};

export default FooterPage;
