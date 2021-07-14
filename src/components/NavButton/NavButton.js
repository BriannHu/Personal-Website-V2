import React from "react";

import "./NavButton.css";

export default function NavButton(props) {
  return (
    <>
      <button
        className={
          props.active
            ? "hamburger hamburger--collapse is-active"
            : "hamburger hamburger--collapse"
        }
        type="button"
        onClick={props.handleClick}
      >
        <span className="hamburger-box">
          <span className="hamburger-inner"></span>
        </span>
      </button>
    </>
  );
}
