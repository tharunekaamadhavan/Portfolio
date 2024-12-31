import React, { useState, useEffect } from "react";
import Confetti from "react-confetti";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import "./NewYearCountdown.css";
import ChristmasTree from "./ChristmasTree";
import newYearSound from "/src/assets/new-year.mp3";
function NewYearCountdown() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [showSimulation, setShowSimulation] = useState(false);
  const [isNewYear, setIsNewYear] = useState(false);
  const [audio] = useState(new Audio(newYearSound));
  // Calculate the time left for the next New Year
  const calculateTimeLeft = (targetDate) => {
    const difference = targetDate - new Date();
    if (difference > 0) {
      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    } else {
      setIsNewYear(true); // Trigger for New Year event
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }
  };

  // Determine the next New Year's date
  const getNextNewYear = () => {
    const now = new Date();
    const year = now.getFullYear();
    return new Date(`January 1, ${year + 1} 00:00:00`);
  };

  useEffect(() => {
    const nextNewYear = getNextNewYear();
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft(nextNewYear));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // Handle New Year Simulation
  const simulateNewYear = () => {
    setShowSimulation(true);
    setTimeout(() => {
      setShowSimulation(false);
    }, 10000);
    audio.play();  // End simulation after 10 seconds
  };
 
  
  // Radial Progress Component
  const RadialProgress = ({ value, max, label, color }) => (
    <div className="circle">
      <CircularProgressbar
        value={value}
        maxValue={max}
        text={`${value} ${label}`}
        styles={buildStyles({
          textColor: "#fff",
          pathColor: color,
          textSize: "14px", 
          trailColor: "rgba(255, 255, 255, 0.2)",
        })}
      />
    </div>
  );

  return (
    
    
    <div className="countdown-container">
      
      <h1 className="countdown-title">🎆 Countdown to Next New Year! 🎉</h1>

      {isNewYear ? (
        <h2 className="countdown-message">🎉 Happy New Year! 🎆</h2>
      ) : (
        <div className="radial-timer">
          <RadialProgress value={timeLeft.days} max={365} label="Days" color="#ffffff" />
          <RadialProgress value={timeLeft.hours} max={24} label="Hours" color="#f54291" />
          <RadialProgress value={timeLeft.minutes} max={60} label="Minutes" color="#f5d442" />
          <RadialProgress value={timeLeft.seconds} max={60} label="Seconds" color="#4caf50" />
        </div>
      )}

      {isNewYear && <Confetti />}
      <div className="simulation-container">
        <h3>Want to experience the timer at New Year?</h3>
        <button className="simulation-button" onClick={simulateNewYear}>
          Experience New Year!
        </button>
      </div>

      {showSimulation && (
  <div className="modal-overlay">
    <div className="modal-box">
      <h2>🎆 Countdown Simulation: Happy New Year! 🎉</h2>
      <img src="/src/assets/new-year.gif" alt="newyear" />
      <Confetti />
      <button className="close-button" onClick={() => setShowSimulation(false)}>
        Close
      </button>
    </div>
  </div>
  
)}


  
  <ChristmasTree className="xmastree" />

    </div>
   
  );
}

export default NewYearCountdown;
