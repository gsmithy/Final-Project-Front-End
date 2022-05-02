import logo from "./logo.svg";
import "./App.css";
import Home from "./screens/Home";
import Login from "./screens/Login";
import NewPost from "./screens/NewPost";
import Profile from "./screens/Profile";
import SignUp from "./screens/SignUp";

import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/newpost">New Post</Link>
          </li>
          <li>
            <Link to="/profile">Profile</Link>
          </li>
          <li>
            <Link to="/signup">Sign Up</Link>
          </li>
        </ul>

    
        <hr />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/newpost" element={<NewPost />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/signup" element={<SignUp />} />

        </Routes>
      </div>
    </Router>
  );
}

export default App;
