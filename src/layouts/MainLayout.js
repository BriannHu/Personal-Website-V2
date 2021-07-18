import React, { useState } from "react";
import { BrowserRouter } from "react-router-dom";

import About from "../components/About/About";
import Appbar from "../components/Appbar/Appbar";
import Education from "../components/Education/Education";
import Experience from "../components/Experience/Experience";
import Hero from "../components/Hero/Hero";
import Projects from "../components/Projects/Projects";
import SideMenu from "../components/Appbar/SideMenu";

import * as colors from "../constants/Colors";
import { ColorMap } from "../components/ColorMap/ColorMap";

export default function MainLayout() {
  const [active, setActive] = useState(false);
  const [color, setColor] = useState(ColorMap[colors.BLUE].color);
  const [credit, setCredit] = useState(ColorMap[colors.BLUE].credit);
  const [creditLink, setCreditLink] = useState(
    ColorMap[colors.BLUE].creditLink
  );
  const [hue, setHue] = useState(ColorMap[colors.BLUE].hue);
  const [image, setImage] = useState(ColorMap[colors.BLUE].darkImage);

  const handleColorClick = (newValue) => {
    setColor(ColorMap[newValue].color);
    switch (newValue) {
      case colors.RED:
        setCredit(ColorMap[colors.RED].credit);
        setCreditLink(ColorMap[colors.RED].creditLink);
        setHue(ColorMap[colors.RED].hue);
        setImage(ColorMap[colors.RED].darkImage);
        break;
      case colors.BLUE:
        setCredit(ColorMap[colors.BLUE].credit);
        setCreditLink(ColorMap[colors.BLUE].creditLink);
        setHue(ColorMap[colors.BLUE].hue);
        setImage(ColorMap[colors.BLUE].darkImage);
        break;
      case colors.GREEN:
        setCredit(ColorMap[colors.GREEN].credit);
        setCreditLink(ColorMap[colors.GREEN].creditLink);
        setHue(ColorMap[colors.GREEN].hue);
        setImage(ColorMap[colors.GREEN].darkImage);
        break;
      case colors.PURPLE:
        setCredit(ColorMap[colors.PURPLE].credit);
        setCreditLink(ColorMap[colors.PURPLE].creditLink);
        setHue(ColorMap[colors.PURPLE].hue);
        setImage(ColorMap[colors.PURPLE].darkImage);
        break;
      default:
        setCredit(ColorMap[colors.BLUE].credit);
        setCreditLink(ColorMap[colors.BLUE].creditLink);
        setHue(ColorMap[colors.BLUE].hue);
        setImage(ColorMap[colors.BLUE].darkImage);
        break;
    }
  };

  const handleMenuClick = () => {
    setActive(!active);
  };

  return (
    <BrowserRouter>
      <Appbar
        handleColorClick={handleColorClick}
        handleMenuClick={handleMenuClick}
      />

      <SideMenu active={active} handleMenuClick={handleMenuClick} />
      <Hero
        color={color}
        credit={credit}
        creditLink={creditLink}
        image={image}
      />
      <About color={color} hue={hue} />
      <Experience color={color} />
      <Projects color={color} />
      <Education color={color} />
    </BrowserRouter>
  );
}
