import React from "react";
import PersonList from '../components/HomeDB'
import ApiCall from "../components/Bible";

const Home = () => {
  return (
    <div>
      <h2>Home</h2>
      <li>
      <PersonList />
      </li>
      <ApiCall/>
    </div>
  );
};

export default Home;
