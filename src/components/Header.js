import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";

const Header = ({ title }) => {
  return (
    <div>
      <a href="/">Home</a>
      <a href="/login">Login</a>
      <a href="/newpost">New Post</a>
      <a href="/profile">Profile</a>
      <a href="/signup">Sign Up</a>

      <h1> {{ title }} </h1>
    </div>
  );
};

export default Header;
