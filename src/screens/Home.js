import React from "react";
import PersonList from '../components/HomeDB'
import BibleVerses from "../components/Bible";

const Home = () => {
  return (
    <div>
      <h2>Home</h2>
      <li>
      <PersonList />
      </li>
      <BibleVerses/>
    </div>
  );
};

export default Home;
