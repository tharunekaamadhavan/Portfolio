import React from "react";
import './Navbar.css'
const Navbar=()=>{
    return(
    <header className="header">
        <a href="/" className="logo">
                <img src="./src/assets/Magna.png" alt="Logo" className="logo-img" />
            </a>
        <nav className="navbarr">
        <a href="/">Home</a>
        <a href="/">About</a>
        <a href="/">Portfolio</a>
        <a href="/">Service</a>
        <a href="/">Contact</a>
        </nav>

    </header>)

}
export default Navbar