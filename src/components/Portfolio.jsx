import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import "./Portfolio.css";
import me from "../assets/me.jpg";
import arrowDown from "../assets/arrow-down.svg";
import MyProjects from "./MyProjects";
import Footer from "./Footer";

const Portfolio = () => {
  const projectsRef = useRef(null);
  const navigate = useNavigate();
  const [animationKey, setAnimationKey] = useState(0);

  useEffect(() => {
    // Page load animation
    document.body.style.opacity = 0;
    setTimeout(() => {
      document.body.style.transition = "opacity 1.5s ease-in-out";
      document.body.style.opacity = 1;
    }, 100);
  }, []);

  const handleScrollToProjects = () => {
    setAnimationKey((prevKey) => prevKey + 1); // Force re-trigger animation
    if (projectsRef.current) {
      window.scrollTo({
        top: projectsRef.current.offsetTop - 100, // Adjust the offset to bring it slightly up
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      <motion.div 
        className="portfolio-container"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <div className="content">
          <div className="left-section">
            <h1>
              Hi, I'm <span className="highlight">Tharunekaa Madhavan</span>
            </h1>
            <h3>B.Tech in Artificial Intelligence and Data Science</h3>
            <h5>Saranathan College of Engineering, Tiruchirappalli</h5>
            <p>
              I am a passionate learner and tech enthusiast with a strong interest in Machine Learning, Deep Learning, and Web Development.
            </p>
            <button className="contact-button">Contact Me</button>
          </div>
          <div className="right-section">
            <div className="profile-pic-wrapper">
              <img src={me} alt="Tharunekaa" className="profile-pic" />
            </div>
          </div>
        </div>
        
        <motion.button 
          className="scroll-down-button" 
          onClick={handleScrollToProjects}
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
        >
          <img src={arrowDown} alt="Scroll Down" className="scroll-icon" />
        </motion.button>
      </motion.div>

      {/* MyProjects Section with Cool Transition Effect */}
      <motion.div 
        ref={projectsRef}
        key={animationKey} // Force re-render on every click
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: -100 }} // Move up slightly
        transition={{ duration: 1, delay: 0.3 }}
      >
        <MyProjects />
        
      </motion.div>
      <Footer />
    </>
  );
};

export default Portfolio;
