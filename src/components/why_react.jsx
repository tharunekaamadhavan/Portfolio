import React,{useEffect,useState} from "react";
import MyAwesomeNavbar from './MyAwesomeNavbar'
import './why_react.css'

function MainContent(){
    const [reactSvg, setReactSvg] = useState(null);

    useEffect(() => {
        import('/src/assets/react.svg').then((image) => {
            setReactSvg(image.default);
        });
    }, []);
    return(
    <div className="main-content">
        <header className="hheader">  
        {reactSvg && <img src={reactSvg} width="40px" alt="react img" />}
        <nav>
            <ul className="nav-list">
                <li className="nav-list-item">Pricing</li>
                <li className="nav-list-item">About</li>
                <li className="nav-list-item">Contact</li>
            </ul>

            
        </nav>
        </header>
        <main>
        <h1>Reasons I'm excited to learn React</h1>
            <ol className="why-react">
                <li>React is a popular library, so I will be able to
                fit in with all the coolest devs out there! 😎</li>
                <li>I am more likely to get a job as a front end developer
                if I know React</li>
            </ol>
           </main>
           <footer><small>© 2025 Magna development. All rights reserved.</small></footer>
        </div>)
}

function Whyreact(){
return (
    <>

    <MyAwesomeNavbar/>
    
    <MainContent/>
    
    
</>
) 
};
export default Whyreact;