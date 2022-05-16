// import logo from "./logo.svg";
import "./App.css";
import Home from "./screens/Home";
import Login from "./screens/Login";
import NewPost from "./screens/NewPost";
import Profile from "./screens/Profile";
import SignUp from "./screens/SignUp";
import Header from "./components/Header";
import Admin from "./screens/Admin";
import Missing from "./screens/Missing";
import PrivateRoutes from "./hooks/PrivateRoute";
//import RequireAuth from "./components/RequireAuth";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <div>
        <div className="App">
          <Header />
        </div>
        <Routes>
        {/* //Public Routes */}
          <Route path="/login" element={<Login />} />
          <Route path="/newpost" element={<NewPost />} />
          <Route exact path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/signup" element={<SignUp />} />
        {/* //Protected Routes */}
          <Route element={<PrivateRoutes />}>
            <Route path="/admin" element={<Admin />} />
          </Route>
         {/* //Catch All */}
          <Route path="/missing" element={<Missing />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
