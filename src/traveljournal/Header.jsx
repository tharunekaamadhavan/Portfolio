import React from "react";
import './Header.css'
function Header(){
    return(
        <header className="journal-header">
            <img src="/src/assets/globe.png" alt="globe logo" className="globe"/>
            <h1>My Travel Journal</h1>
        </header>
    )
}
export default Header