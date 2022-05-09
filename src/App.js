// import logo from "./logo.svg";
import "./App.css";
import Home from "./screens/Home";
import Login from "./screens/Login";
import NewPost from "./screens/NewPost";
import Profile from "./screens/Profile";
import SignUp from "./screens/SignUp";
import Header from "./components/Header";
import LoginDB from "./components/LoginDB";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <div className="App">
          <Header />
        </div>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/newpost" element={<NewPost />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/logindb" element={<LoginDB />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
