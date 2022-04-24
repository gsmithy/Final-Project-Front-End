import React from 'react';

const Header = ({ title }) => (
    <div>
        <a href="/">Home</a>
        <a href="/login">Login</a>
        <a href="/newpost">New Post</a>
        <a href="/profile">Profile</a>
        <a href="/signup">Sign Up</a>
        <h1> {{title}} </h1>
    </div>
);

export default Header;