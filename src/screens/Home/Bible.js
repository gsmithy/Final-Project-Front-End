import React, { useEffect, useState } from "react";
import axios from "axios";
import { Carousel } from "react-bootstrap";

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

  const objList = [verse1, verse2, verse3];

  // const cycle = document.getElementById('cycle');
  // let i = 0;
  // const cycleText = (props) => {
  //   cycle.innerHTML = objList[i];
  //   i = ++i % objList.length;

  //   return (
  //     <div id='cycle'>{props.text}</div>
  //   )
  // };
  // cycleText();
  // setInterval(cycleText, 100000);

  return (
    <>
      <Carousel fade indicators={false} interval={10000}>
        {objList.map((data, i) => (
          <Carousel.Item key={i}>
            <p className="d-block w-100">"{data.text}"</p>
          </Carousel.Item>
        ))}
      </Carousel>
    </>
  );
};

export default ApiCall;
