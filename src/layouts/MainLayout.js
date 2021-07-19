import React, { useState } from "react";
import { BrowserRouter } from "react-router-dom";

import About from "../components/About/About";
import Appbar from "../components/Appbar/Appbar";
import Contact from "../components/Contact/Contact";
import Education from "../components/Education/Education";
import Experience from "../components/Experience/Experience";
import Hero from "../components/Hero/Hero";
import Projects from "../components/Projects/Projects";
import SideMenu from "../components/Appbar/SideMenu";

import * as colors from "../constants/Colors";
import * as themes from "../constants/Themes";
import { ColorMap } from "../components/ColorMap/ColorMap";
import { ThemeMap } from "../components/ColorMap/ThemeMap";

export default function MainLayout() {
  const [active, setActive] = useState(false);
  const [color, setColor] = useState(ColorMap[colors.BLUE].color);
  const [credit, setCredit] = useState(ColorMap[colors.BLUE].credit);
  const [creditLink, setCreditLink] = useState(
    ColorMap[colors.BLUE].creditLink
  );
  const [hue, setHue] = useState(ColorMap[colors.BLUE].hue);
  const [image, setImage] = useState(ColorMap[colors.BLUE].darkImage);

  const [dark, setDark] = useState(true);
  const [primaryBackground, setPrimaryBackground] = useState(
    ThemeMap[themes.DARK].primaryBackground
  );
  const [secondaryBackground, setSecondaryBackground] = useState(
    ThemeMap[themes.DARK].secondaryBackground
  );
  const [tertiaryBackground, setTertiaryBackground] = useState(
    ThemeMap[themes.DARK].tertiaryBackground
  );
  const [primaryText, setPrimaryText] = useState(
    ThemeMap[themes.DARK].primaryText
  );
  const [secondaryText, setSecondaryText] = useState(
    ThemeMap[themes.DARK].secondaryText
  );

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

  const handleThemeClick = (newValue) => {
    const mode = newValue === true ? "light" : "dark";
    setDark(!dark);
    switch (mode) {
      case themes.LIGHT:
        setPrimaryBackground(ThemeMap[themes.LIGHT].primaryBackground);
        setSecondaryBackground(ThemeMap[themes.LIGHT].secondaryBackground);
        setTertiaryBackground(ThemeMap[themes.LIGHT].tertiaryBackground);
        setPrimaryText(ThemeMap[themes.LIGHT].primaryText);
        setSecondaryText(ThemeMap[themes.LIGHT].secondaryText);
        break;
      case themes.DARK:
        setPrimaryBackground(ThemeMap[themes.DARK].primaryBackground);
        setSecondaryBackground(ThemeMap[themes.DARK].secondaryBackground);
        setTertiaryBackground(ThemeMap[themes.DARK].tertiaryBackground);
        setPrimaryText(ThemeMap[themes.DARK].primaryText);
        setSecondaryText(ThemeMap[themes.DARK].secondaryText);
        break;
      default:
        setPrimaryBackground(ThemeMap[themes.DARK].primaryBackground);
        setSecondaryBackground(ThemeMap[themes.DARK].secondaryBackground);
        setTertiaryBackground(ThemeMap[themes.DARK].tertiaryBackground);
        setPrimaryText(ThemeMap[themes.DARK].primaryText);
        setSecondaryText(ThemeMap[themes.DARK].secondaryText);
        break;
    }
  };

  const handleMenuClick = () => {
    setActive(!active);
  };

  return (
    <BrowserRouter id="root">
      <Appbar
        handleColorClick={handleColorClick}
        handleMenuClick={handleMenuClick}
        handleThemeClick={handleThemeClick}
        dark={dark}
        primaryBackground={primaryBackground}
        primaryText={primaryText}
        secondaryBackground={secondaryBackground}
        secondaryText={secondaryText}
      />

      <SideMenu
        active={active}
        handleMenuClick={handleMenuClick}
        primaryBackground={primaryBackground}
        primaryText={primaryText}
        secondaryBackground={secondaryBackground}
        secondaryText={secondaryText}
        tertiaryBackground={tertiaryBackground}
      />
      <Hero
        color={color}
        credit={credit}
        creditLink={creditLink}
        image={image}
        primaryBackground={primaryBackground}
        primaryText={primaryText}
        secondaryBackground={secondaryBackground}
        secondaryText={secondaryText}
        tertiaryBackground={tertiaryBackground}
      />
      <About
        color={color}
        hue={hue}
        primaryBackground={primaryBackground}
        primaryText={primaryText}
        secondaryBackground={secondaryBackground}
        secondaryText={secondaryText}
        tertiaryBackground={tertiaryBackground}
      />
      <Experience
        color={color}
        primaryBackground={primaryBackground}
        primaryText={primaryText}
        secondaryBackground={secondaryBackground}
        secondaryText={secondaryText}
        tertiaryBackground={tertiaryBackground}
      />
      <Projects
        color={color}
        primaryBackground={primaryBackground}
        primaryText={primaryText}
        secondaryBackground={secondaryBackground}
        secondaryText={secondaryText}
        tertiaryBackground={tertiaryBackground}
      />
      <Education
        color={color}
        primaryBackground={primaryBackground}
        primaryText={primaryText}
        secondaryBackground={secondaryBackground}
        secondaryText={secondaryText}
        tertiaryBackground={tertiaryBackground}
      />
      <Contact
        color={color}
        primaryBackground={primaryBackground}
        primaryText={primaryText}
        secondaryBackground={secondaryBackground}
        secondaryText={secondaryText}
        tertiaryBackground={tertiaryBackground}
      />
    </BrowserRouter>
  );
}
