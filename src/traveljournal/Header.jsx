import React from "react";
import './Header.css'
import globe from '../assets/globe.png'

function Header(){
    return(
        <header className="journal-header">
            <img src={globe} alt="globe logo" className="globe"/>
            <h1>My Travel Journal</h1>
        </header>
    )
}
export default Header