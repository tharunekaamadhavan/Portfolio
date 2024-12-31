import React from "react";
import './ReactFacts.css'

function Header(){
    return(<header className="headerr">
            <nav className="navv">
                <img src="./src/assets/react.svg" alt="react logo"/>
                <span>ReactFacts</span>
            </nav>
        </header>)
}
function Main(){
    return(
        <div className="bodyy">
        
        <main className="mainn">
            
            <h1>Fun facts about React</h1>
            <ul className="facts-list">
                <li>Was first released in 2013</li>
                <li>Was originally created by Jordan Walke</li>
                <li>Has well over 200K stars on GitHub</li>
                <li>Is maintained by Meta</li>
                <li>Powers thousands of enterprise apps, including mobile apps</li>
            </ul>
        </main>
        </div>
    )
}
function ReactFacts(){
    return (
        <>
        <Header/>
        <Main/>
        </>
    )
}
export default ReactFacts;