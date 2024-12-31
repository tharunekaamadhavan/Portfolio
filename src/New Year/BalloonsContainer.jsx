import React, { useState, useEffect } from "react";
import Balloon from "./Balloon";

const BalloonsContainer = () => {
  const [balloons, setBalloons] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      const newBalloon = {
        id: Date.now(),
        color: [
          "#ff4d4d", "#4d94ff", "#4dff4d", "#ffd11a"
        ][Math.floor(Math.random() * 4)], // Random color
        left: Math.random() * 100, // Random horizontal position in vw
        top: Math.random() * 100, // Random vertical position in vh
        animationDuration: Math.random() * 3 + 3, // Random speed (between 3s and 6s)
      };
      setBalloons((prev) => [...prev, newBalloon]);

      // Remove balloons after they float out of view
      setTimeout(() => {
        setBalloons((prev) => prev.filter((b) => b.id !== newBalloon.id));
      }, (newBalloon.animationDuration + 1) * 1000); // Slightly longer than animation duration
    }, 1000); // Generate a balloon every second

    return () => clearInterval(interval); // Clean up on component unmount
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        overflow: "hidden",
        pointerEvents: "none",
        zIndex: 1000,
      }}
    >
      {balloons.map((balloon) => (
        <Balloon
          key={balloon.id}
          color={balloon.color}
          left={balloon.left}
          top={balloon.top}
          animationDuration={balloon.animationDuration}
        />
      ))}
    </div>
  );
};

export default BalloonsContainer;
