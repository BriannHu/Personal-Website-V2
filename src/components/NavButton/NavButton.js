import React, { useState } from "react";

import "./NavButton.css";

export default function NavButton() {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };

  return (
    <button
      className={
        active
          ? "hamburger hamburger--collapse is-active"
          : "hamburger hamburger--collapse"
      }
      type="button"
      onClick={handleClick}
    >
      <span className="hamburger-box">
        <span className="hamburger-inner"></span>
      </span>
    </button>
  );
}
