import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { Helmet } from 'react-helmet';

import './index.css';

import 'font-awesome/css/font-awesome.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

function Navbar() {
  const [showSidebar, setShowSidebar] = useState(false);
  const [showSignUpPopup, setShowSignUpPopup] = useState(false);
  const [showLoginPopup, setShowLoginPopup] = useState(false);

  function toggleSidebar() {
    setShowSidebar(!showSidebar);
  }

  function closeSidebar() {
    setShowSidebar(false);
  }

  function openSignupPopup() {
    setShowSignUpPopup(true);
  }

  function closeSignupPopup() {
    setShowSignUpPopup(false);
  }

  function openLoginPopup() {
    setShowLoginPopup(true);
  }

  function closeLoginPopup() {
    setShowLoginPopup(false);
  }

  return (
    <div className="w3-top">
      <div className="w3-bar w3-white w3-card" id="myNavbar">
        <a href="#home" className="w3-bar-item w3-button w3-wide">
          LOGO
        </a>
        <div className="w3-right w3-hide-small">
          <a href="#about" className="w3-bar-item w3-button">
            ABOUT
          </a>
          <a href="#" className="w3-bar-item w3-button" onClick={openSignupPopup}>
            Sign Up
          </a>
          <a href="#" className="w3-bar-item w3-button" onClick={openLoginPopup}>
            Log In
          </a>
          <a href="#pricing" className="w3-bar-item w3-button">
            PRICING
          </a>
          <a href="#contact" className="w3-bar-item w3-button">
            CONTACT
          </a>
        </div>
        <a
          href="javascript:void(0)"
          className="w3-bar-item w3-button w3-right w3-hide-large w3-hide-medium"
          onClick={toggleSidebar}
        >
          <i className="fa fa-bars"></i>
        </a>
      </div>

      {showSidebar && <Sidebar onClose={closeSidebar} />}

      {/* Signup Popup */}
      {showSignUpPopup && (
        <div className="popup">
          <div className="popup-content">
            <span className="close" onClick={closeSignupPopup}>
              &times;
            </span>
            <h2>Sign Up</h2>
            <form>
              <div className="input-wrapper">
                <i className="fa fa-user"></i>
                <input type="text" placeholder="Username" />
              </div>
              <div className="input-wrapper">
                <i className="fa fa-envelope"></i>
                <input type="email" placeholder="Email" />
              </div>
              <div className="input-wrapper">
                <i className="fa fa-lock"></i>
                <input type="password" placeholder="Password" />
              </div>
              <button type="submit">Sign Up</button>
            </form>
          </div>
        </div>
      )}

      {/* Login Popup */}
      {showLoginPopup && (
        <div className="popup">
          <div className="popup-content">
            <span className="close" onClick={closeLoginPopup}>
              &times;
            </span>
            <h2>Log In</h2>
            <form>
              <div className="input-wrapper">
                <i className="fa fa-envelope"></i>
                <input type="email" placeholder="Email" />
              </div>
              <div className="input-wrapper">
                <i className="fa fa-lock"></i>
                <input type="password" placeholder="Password" />
              </div>
              <button type="submit">Log In</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

function Sidebar({ onClose }) {
  function handleLinkClick() {
    onClose();
  }

  return (
    <nav className="w3-sidebar w3-bar-block w3-black w3-card w3-animate-left w3-hide-medium w3-hide-large" id="mySidebar">
      <a href="javascript:void(0)" onClick={onClose} className="w3-bar-item w3-button w3-large w3-padding-16">Close ×</a>
      <a href="#about" onClick={handleLinkClick} className="w3-bar-item w3-button">ABOUT</a>
      <a href="#team" onClick={handleLinkClick} className="w3-bar-item w3-button">TEAM</a>
      <a href="#work" onClick={handleLinkClick} className="w3-bar-item w3-button">WORK</a>
      <a href="#pricing" onClick={handleLinkClick} className="w3-bar-item w3-button">PRICING</a>
      <a href="#contact" onClick={handleLinkClick} className="w3-bar-item w3-button">CONTACT</a>
    </nav>
  );
}

function Header() {
  return (
    <header className="bgimg-1 w3-display-container w3-grayscale-min" id="home">
      <div className="w3-display-left w3-text-white" style={{ padding: '48px' }}>
        <span className="w3-jumbo w3-hide-small">Start something that matters</span><br />
        <span className="w3-xxlarge w3-hide-large w3-hide-medium">Start something that matters</span><br />
        <span className="w3-large">Stop wasting valuable time with projects that just aren't you.</span>
        <p><a href="#about" className="w3-button w3-white w3-padding-large w3-large w3-margin-top w3-opacity w3-hover-opacity-off">Learn more and start today</a></p>
      </div>
    </header>
  );
}

function AboutSection() {
  return (
    <div className="w3-container" style={{ padding: '128px 16px' }} id="about">
      <h3 className="w3-center">ABOUT THE COMPANY</h3>
      <p className="w3-center w3-large">Key features of our company</p>
      <div className="w3-row-padding w3-center" style={{ marginTop: '64px' }}>
        <div className="w3-quarter">
          <i className="fa fa-desktop w3-margin-bottom w3-jumbo w3-center"></i>
          <p className="w3-large">Responsive</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div className="w3-quarter">
          <i className="fa fa-heart w3-margin-bottom w3-jumbo"></i>
          <p className="w3-large">Passion</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div className="w3-quarter">
          <i className="fa fa-diamond w3-margin-bottom w3-jumbo"></i>
          <p className="w3-large">Quality</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div className="w3-quarter">
          <i className="fa fa-cog w3-margin-bottom w3-jumbo"></i>
          <p className="w3-large">Support</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
      </div>
    </div>
  );
}

function PricingSection() {
  return (
    <div className="w3-container" style={{ padding: '128px 16px' }} id="pricing">
      <h3 className="w3-center">PRICING</h3>
      <p className="w3-center w3-large">Choose a pricing plan that fits your needs</p>
      <div className="w3-row-padding w3-center" style={{ marginTop: '64px' }}>
        <div className="w3-third w3-margin-bottom">
          <ul className="w3-ul w3-white w3-hover-shadow">
            <li className="w3-black w3-xlarge w3-padding-32">Basic</li>
            <li className="w3-padding-16"><b>10GB</b> Storage</li>
            <li className="w3-padding-16"><b>10</b> Emails</li>
            <li className="w3-padding-16"><b>10</b> Domains</li>
            <li className="w3-padding-16"><b>Endless</b> Support</li>
            <li className="w3-padding-16">
              <h2 className="w3-wide">$ 10</h2>
              <span className="w3-opacity">per month</span>
            </li>
            <li className="w3-light-grey w3-padding-24">
              <button className="w3-button w3-black w3-padding-large">Sign Up</button>
            </li>
          </ul>
        </div>
        <div className="w3-third w3-margin-bottom">
          <ul className="w3-ul w3-white w3-hover-shadow">
            <li className="w3-red w3-xlarge w3-padding-32">Pro</li>
            <li className="w3-padding-16"><b>25GB</b> Storage</li>
            <li className="w3-padding-16"><b>25</b> Emails</li>
            <li className="w3-padding-16"><b>25</b> Domains</li>
            <li className="w3-padding-16"><b>Endless</b> Support</li>
            <li className="w3-padding-16">
              <h2 className="w3-wide">$ 25</h2>
              <span className="w3-opacity">per month</span>
            </li>
            <li className="w3-light-grey w3-padding-24">
              <button className="w3-button w3-black w3-padding-large">Sign Up</button>
            </li>
          </ul>
        </div>
        <div className="w3-third w3-margin-bottom">
          <ul className="w3-ul w3-white w3-hover-shadow">
            <li className="w3-black w3-xlarge w3-padding-32">Premium</li>
            <li className="w3-padding-16"><b>50GB</b> Storage</li>
            <li className="w3-padding-16"><b>50</b> Emails</li>
            <li className="w3-padding-16"><b>50</b> Domains</li>
            <li className="w3-padding-16"><b>Endless</b> Support</li>
            <li className="w3-padding-16">
              <h2 className="w3-wide">$ 50</h2>
              <span className="w3-opacity">per month</span>
            </li>
            <li className="w3-light-grey w3-padding-24">
              <button className="w3-button w3-black w3-padding-large">Sign Up</button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

function ContactSection() {
  return (
    <div className="w3-container w3-light-grey" style={{ padding: '128px 16px' }} id="contact">
      <h3 className="w3-center">CONTACT</h3>
      <p className="w3-center w3-large">Let's get in touch. Send us a message:</p>
      <div style={{ margin: 'auto', width: '60%' }}>
        <form>
          <input className="w3-input w3-border" type="text" placeholder="Name" required name="Name" />
          <input className="w3-input w3-section w3-border" type="text" placeholder="Email" required name="Email" />
          <input className="w3-input w3-section w3-border" type="text" placeholder="Subject" required name="Subject" />
          <textarea className="w3-input w3-section w3-border" placeholder="Message" required name="Message"></textarea>
          <button className="w3-button w3-black w3-section" type="submit">
            <i className="fa fa-paper-plane"></i> SEND MESSAGE
          </button>
        </form>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <footer className="w3-container w3-padding-64 w3-center w3-opacity">
      <div className="w3-xlarge w3-padding-32">
        <i className="fa fa-facebook-official w3-hover-opacity"></i>
        <i className="fa fa-instagram w3-hover-opacity"></i>
        <i className="fa fa-snapchat w3-hover-opacity"></i>
        <i className="fa fa-pinterest-p w3-hover-opacity"></i>
        <i className="fa fa-twitter w3-hover-opacity"></i>
        <i className="fa fa-linkedin w3-hover-opacity"></i>
      </div>
      <p>Powered by <a href="https://www.openai.com" target="_blank" rel="noopener noreferrer">OpenAI</a></p>
    </footer>
  );
}

function App() {
  return (
    <div>
      <Navbar />
      <Header />
      <AboutSection />
      <PricingSection />
      <ContactSection />
      <Footer />
    </div>
  );
}



ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

export default App;




