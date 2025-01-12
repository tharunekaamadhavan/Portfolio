import Whyreact from './components/why_react.jsx';
import Landing from './components/LandingPage.jsx';
import Default from './components/Vite+ReactDefault';
import Navbar from './components/Navbar.jsx';
import ReactFacts from './components/ReactFacts.jsx';
import TravelJournal from './traveljournal/TravelJournal.jsx';
import NewYearCountdown from './New Year/NewYearCountdown.jsx';
import BalloonsContainer from './New Year/BalloonsContainer.jsx';
import RandomNumberGenerator from './RandomNumberGenerator.jsx';
import Contacts from './Contacts/Contacts.jsx';
import { BrowserRouter as Router, Routes, Route, Link, useNavigate, useLocation } from 'react-router-dom';
import background from '/src/assets/background.jpg';
function App() {
  return (
    <Router>
      <MainApp />
    </Router>
  );
}

function MainApp() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleLinkClick = (link) => {
    navigate(`/${link.toLowerCase()}`);
  };

  return (
    <>
      <div style={{backgroundImage: `url(${background})`,backgroundSize: 'cover',
        backgroundPosition: 'center',}}>
        
        {location.pathname !== '/why-react' && (
          <Navbar/>
        )}
        {location.pathname === '/new-year-countdown' && <BalloonsContainer />}

        <Routes>
          <Route path="/" element={<Landing onLinkClick={handleLinkClick} />} />
          <Route path="/vite+react" element={<Default />} />
          <Route path="/why-react" element={<Whyreact />} />
          <Route path="/react-facts" element={<ReactFacts />} />
          <Route path="/travel-journal" element={<TravelJournal/>}/>
          <Route path="/new-year-countdown" element={<NewYearCountdown/>}/>
          <Route path="/random-number-generator" element={<RandomNumberGenerator/>}/>
          <Route path="/contact" element={<Contacts/>}/>
        </Routes>
        
      </div>
    </>
  );
}

export default App;
