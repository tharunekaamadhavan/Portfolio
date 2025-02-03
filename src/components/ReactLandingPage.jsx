import React, { useRef } from "react";
import "./ReactLandingPage.css";

import background from '/src/assets/background.jpg';

const reactSvg = () => import('/src/assets/react.svg');
const links = [
    { link: "why-react?", image: reactSvg, text: "Why React?" },
    { link: "react-facts", image: () => import("/src/assets/react.png"), text: "React Facts" },
    { link: "vite+react", image: () => import("/src/assets/vite+react.png"), text: "Vite + React" },
    { link: "travel-journal", image: () => import("/src/assets/vite+react.png"), text: "Travel Journal" },
    { link: "new-year-countdown", image: null, text: "New Year Countdown!" },
    { link: "random-number-generator", image: () => import("/src/assets/react.svg"), text: "Random Number Generator" },
    { link: "contact", image: null, text: "Contact" },
];

function LazyImage({ importFunction }) {
    const [src, setSrc] = React.useState(null);

    React.useEffect(() => {
        if (importFunction) {
            importFunction().then((module) => setSrc(module.default));
        }
    }, [importFunction]);

    if (!src) return <div className="image-placeholder">Loading...</div>;
    return <img src={src} alt="Bubble" className="bubble-image" />;
}

function ReactLanding({ onLinkClick }) {
    const bubbleRef = useRef(null);

    return (
        <>
        
        
        <div className="bubble-banner-section" ref={bubbleRef} style={{backgroundImage: `url(${background})`, backgroundSize: 'cover', backgroundPosition: 'center', height: '100%', width: '100%'}}>
            <h1>Welcome to my Website!</h1>
            <h2>Start Exploring each Bubble</h2>
            <div className="bubble-container">
                {links.map((link, index) => (
                    <div key={index} className="bubble-item">
                        <div className="bubble" onClick={() => onLinkClick(link.link)}>
                            {link.image ? (
                                <LazyImage importFunction={link.image} />
                            ) : (
                                <div className="no-image">No Image</div>
                            )}
                        </div>
                        <p className="bubble-text">{link.text}</p>
                    </div>
                ))}
            </div>
        </div>
        </>
    );
}


export default ReactLanding;
