import React, { useState } from "react";

import Appbar from "../components/Appbar/Appbar";
import Hero from "../components/Hero/Hero";

export default function MainLayout() {
  const [color, setColor] = useState("purple");
  const [image, setImage] = useState("/images/dark_blue_procreate.png");

  const handleColorClick = (newValue) => {
    setColor(newValue);
    switch (newValue) {
      case "#D3302F": // red
        setImage("/images/dark_blue_procreate.png");
        break;
      case "#1876D2": // blue
        setImage("/images/dark_blue_procreate.png");
        break;
      case "#398E3D": // green
        setImage("/images/dark_green_procreate.png");
        break;
      case "7B1FA2": // purple
        setImage("/images/dark_blue_procreate.png");
        break;
      default:
        setImage("/images/dark_blue_procreate.png");
        break;
    }
  };

  return (
    <>
      <Appbar handleColorClick={handleColorClick} />
      <Hero color={color} image={image} />
    </>
  );
}
