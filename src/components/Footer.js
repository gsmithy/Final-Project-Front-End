import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

const FooterPage = () => {
  return (
    <Container>
    <Navbar className=" d-flex justify-content-center" expand="lg" variant="secondary" bg="light">
      <div>
        
          &copy; {new Date().getFullYear()} Copyright: <a href="http://localhost:3000"> GoodNews.com </a>
        
      </div>
    </Navbar>

    </Container>
    
  );
}

export default FooterPage;