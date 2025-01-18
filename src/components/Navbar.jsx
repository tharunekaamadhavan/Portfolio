import React from "react";
import './Navbar.css'
import logo from '../assets/Magna.png'
const Navbar=()=>{
    return(
    <header className="header">
        <a href="/" className="logo">
                <img src={logo} alt="Logo" className="logo-img" />
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