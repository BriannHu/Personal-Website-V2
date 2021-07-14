import React, { useState } from "react";

import NavButton from "../components/NavButton/NavButton";

import Hero from "../components/Hero/Hero";
import NavMenu from "../components/NavMenu/NavMenu";

export default function MainLayout() {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };

  return (
    <>
      <NavButton active={active} handleClick={handleClick} />
      <NavMenu visibility={active ? "visible" : "hidden"} />
      <Hero />
    </>
  );
}
