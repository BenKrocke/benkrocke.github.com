import React, { useState } from "react";
import './App.css';
import first from "./images/1.png";
import second from "./images/2.png";
import third from "./images/3.png";
import fourth from "./images/4.png";
import fifth from "./images/5.png";
import {NotificationContainer, NotificationManager} from 'react-notifications';

const images = [first, second, third, fourth, fifth];

function App() {
  const [index, setIndex] = useState(0);

  const increaseIndex = () => {
    if (index < images.length - 1) {
      setIndex(index + 1);
    };
  }

  const resetIndex = () => {
      NotificationManager.info('U bent terug bij de eerste stap', null, 2000);
      setIndex(0);
  }

  return (
    <div>
      <NotificationContainer />
      <div className="bg-transparent w-full h-16 absolute" onClick={() => resetIndex()}></div>
      <img src={images[index]} alt={"empty"} onClick={() => increaseIndex()} />
    </div>
  );
}

export default App;
