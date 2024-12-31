import React from "react";
import "./Balloon.css";

const Balloon = ({ color, left, top, animationDuration }) => {
  return (
    <div
      className="balloon"
      style={{
        backgroundColor: color,
        left: `${left}vw`,
        top: `${top}vh`,
        animationDuration: `${animationDuration}s`,
      }}
    ></div>
  );
};

export default Balloon;
