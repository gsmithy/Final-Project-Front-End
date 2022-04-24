import React from 'react';
import ReactDOM from 'react-dom';
import Home from './screens/Home';
import Login from './screens/Login'
import NewPost from './screens/NewPost';
import Profile from './screens/Profile';
import SignUp from './screens/SignUp';

import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

const App = () => (
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
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/newpost" component={NewPost} />
        <Route path="/profile" component={Profile} />
        <Route path="/signup" component={SignUp} />
      </div>
    </Router>
  );
  
  ReactDOM.render(<App />, document.getElementById('root'));
