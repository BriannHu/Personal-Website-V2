import React from "react";

import "./NavMenu.css";

export default function NavMenu() {
  return (
    <div className="nav-menu">
      <div className="nav-site-wrapper">
        <div className="nav-site-links">
          <ul className="nav-site-links-list">
            <li className="nav-site-links-item">Home</li>
            <li className="nav-site-links-item">About</li>
            <li className="nav-site-links-item">Experience</li>
            <li className="nav-site-links-item">Projects</li>
            <li className="nav-site-links-item">Contact</li>
          </ul>
        </div>
      </div>
      <div className="nav-extn-wrapper">
        <div className="nav-extn-links">Links Here</div>
      </div>
    </div>
  );
}
