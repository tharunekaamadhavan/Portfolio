import react from "../assets/react.svg";
import React from "react";
import "./MyProjects.css";
import {useNavigate} from 'react-router-dom';
const MyProjects = () => {
  const navigate=useNavigate();
  const handleProjectClick = (path) => {navigate(path)};
    return(
        <>
    
    <div className="projects-section">
    <h2 className="section-title">My Projects</h2>
    <div className="projects-container">
      {/* Project 1 */}
      <div className="project-card" onClick={() => handleProjectClick("/react-landing")}>
        <img src={react} alt="Project 1 Logo" className="project-logo" />
        <h3 className="project-title">React Mini Projects</h3>
        <div className="divider"></div>
        <p className="project-description">
          A collection of mini projects built using React.js
        </p>
      </div>

     
    </div>
  </div>
  </>)}
export default MyProjects;