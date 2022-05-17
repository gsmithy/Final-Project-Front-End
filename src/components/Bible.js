import React, { useEffect, useState } from "react";
import axios from "axios";

const ApiCall = () => {
  const [verse1, setVerse1] = useState([]);
  const [verse2, setVerse2] = useState([]);
  const [verse3, setVerse3] = useState([]);

  useEffect(() => {
    axios
      .get("https://bible-api.com/ephesians 3:19")
      .then((res) => {
        setVerse1(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
    axios
      .get("https://bible-api.com/revelation 19:10")
      .then((res) => {
        setVerse2(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
    axios
      .get("https://bible-api.com/matthew+28:18-19")
      .then((res) => {
        setVerse3(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const states = [verse1, verse2, verse3];

  return (
    <>
      {states.map((verse, i) => {
        return <p key={i}>{verse.text}</p>;
      })}
    </>
  );
};

export default ApiCall;
