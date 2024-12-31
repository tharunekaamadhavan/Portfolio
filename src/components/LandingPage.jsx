import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Container } from "react-bootstrap";
import './LandingPage.css';

const links = [
    { link: "why-react?", image: "/src/assets/react.svg", text: "Why React?" },
    { link: "react-facts", image: "/src/assets/react.png", text: "React Facts" },
    { link: "vite+react", image: "/src/assets/vite+react.png", text: "Vite + React" },
    { link: "travel-journal", image: "/src/assets/vite+react.png", text: "Travel Journal" },
    {link:"new-year-countdown",image:"",text:"New Year Countdown!"}
];

function Landing({ onLinkClick }) {
    const bubbleRef = useRef(null);
    return (
        <div className="bubble-banner-section" ref={bubbleRef}>
            <h1>Welcome to my Website!</h1>
            <h2>Start Exploring each Bubble</h2>
            <div className="bubble-container">
                {links.map((link, index) => (
                    <div key={index} className="bubble-item">
                        <div className="bubble" onClick={() => onLinkClick(link.link)}>
                            <img src={link.image} alt={link.link} className="bubble-image" />
                        </div>
                        <p className="bubble-text">{link.text}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Landing;
