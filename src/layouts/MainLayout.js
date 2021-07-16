import React, { useState } from "react";

import Appbar from "../components/Appbar/Appbar";
import Hero from "../components/Hero/Hero";
import SideMenu from "../components/Appbar/SideMenu";

export default function MainLayout() {
  const [active, setActive] = useState(false);
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
      case "#04de37": // green
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

  const handleMenuClick = () => {
    setActive(!active);
  };

  return (
    <>
      <Appbar
        handleColorClick={handleColorClick}
        handleMenuClick={handleMenuClick}
      />

      <SideMenu active={active} handleMenuClick={handleMenuClick} />
      <Hero color={color} image={image} />
    </>
  );
}
