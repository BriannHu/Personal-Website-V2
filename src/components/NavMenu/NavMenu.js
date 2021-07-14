import React from "react";

import "./NavMenu.css";

export default function NavMenu(props) {
  return (
    <div className="nav-menu" style={{ visibility: props.visibility }}>
      <div className="nav-site-wrapper">
        <div className="nav-site-links">
          <ul className="nav-site-links-list">
            <li className="nav-site-links-item">home</li>
            <li className="nav-site-links-item">about</li>
            <li className="nav-site-links-item">experience</li>
            <li className="nav-site-links-item">projects</li>
            <li className="nav-site-links-item">contact</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
