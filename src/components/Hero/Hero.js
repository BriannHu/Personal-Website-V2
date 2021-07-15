import React from "react";
// import TextLoop from "react-text-loop";

import "./Hero.css";

export default function Hero() {
  return (
    <div className="hero-section">
      <div className="first-half">
        <div className="title">
          Hello! 👋 I'm Brian <br />
          {/* I love to{" "} */}
          {/* <TextLoop
            children={[
              "build ideas.",
              "research tech.",
              "learn new things.",
              "solve problems.",
            ]}
            className="text-loop"
            interval={2000}
            mask={true}
            adjustingSpeed={100}
          ></TextLoop> */}
        </div>
      </div>
    </div>
  );
}
