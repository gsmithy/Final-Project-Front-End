import React from "react";
import Stories from "./Stories";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const FaveStories = ({ match }) => {
  return (
    <div>
      <h1>Favorite Stories</h1>
    </div>
  );
};

export default FaveStories;
