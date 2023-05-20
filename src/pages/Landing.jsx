import Header from "../components/LandingPage/Header"
import About from "../components/LandingPage/About"
import Promo from "../components/LandingPage/Promo"
import Pricing from "../components/LandingPage/Pricing"
import Contact from "../components/LandingPage/Contact"
import Skills from "../components/LandingPage/Skills"
import Work from "../components/LandingPage/Work"

const Landing = () => {
  return (
    <>
      <Header />
      <About />
      <Promo />
      <nav
        className="w3-sidebar w3-bar-block w3-black w3-card w3-animate-left w3-hide-medium w3-hide-large"
        style={{ display: "none" }}
        id="mySidebar"
      >
        <a
          href="javascript:void(0)"
          onClick="w3_close()"
          className="w3-bar-item w3-button w3-large w3-padding-16"
        >
          Close ×
        </a>
        <a href="#about" onClick="w3_close()" className="w3-bar-item w3-button">
          ABOUT
        </a>
        <a href="#team" onClick="w3_close()" className="w3-bar-item w3-button">
          TEAM
        </a>
        <a href="#work" onClick="w3_close()" className="w3-bar-item w3-button">
          WORK
        </a>
        <a
          href="#pricing"
          onClick="w3_close()"
          className="w3-bar-item w3-button"
        >
          PRICING
        </a>
        <a
          href="#contact"
          onClick="w3_close()"
          className="w3-bar-item w3-button"
        >
          CONTACT
        </a>
      </nav>

      {/* <!-- Team Section --> */}
      <div className="w3-container" style={{ padding: "128px 16px" }} id="team">
        <h3 className="w3-center">THE TEAM</h3>
        <p className="w3-center w3-large">The ones who runs this company</p>
        <div
          className="w3-row-padding w3-grayscale"
          style={{ marginTop: "64px" }}
        >
          <div className="w3-col l3 m6 w3-margin-bottom">
            <div className="w3-card">
              <img
                src="https://www.w3schools.com/w3images/team2.jpg"
                alt="John"
                style={{ width: "100%" }}
              />
              <div className="w3-container">
                <h3>John Doe</h3>
                <p className="w3-opacity">CEO & Founder</p>
                <p>
                  Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse
                  sodales pellentesque elementum.
                </p>
                <p>
                  <button className="w3-button w3-light-grey w3-block">
                    Contact
                  </button>
                </p>
              </div>
            </div>
          </div>
          <div className="w3-col l3 m6 w3-margin-bottom">
            <div className="w3-card">
              <img
                src="https://www.w3schools.com/w3images/team1.jpg"
                alt="Jane"
                style={{ width: "100%" }}
              />
              <div className="w3-container">
                <h3>Anja Doe</h3>
                <p className="w3-opacity">Art Director</p>
                <p>
                  Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse
                  sodales pellentesque elementum.
                </p>
                <p>
                  <button className="w3-button w3-light-grey w3-block">
                    Contact
                  </button>
                </p>
              </div>
            </div>
          </div>
          <div className="w3-col l3 m6 w3-margin-bottom">
            <div className="w3-card">
              <img
                src="https://www.w3schools.com/w3images/team3.jpg"
                alt="Mike"
                style={{ width: "100%" }}
              />
              <div className="w3-container">
                <h3>Mike Ross</h3>
                <p className="w3-opacity">Web Designer</p>
                <p>
                  Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse
                  sodales pellentesque elementum.
                </p>
                <p>
                  <button className="w3-button w3-light-grey w3-block">
                    Contact
                  </button>
                </p>
              </div>
            </div>
          </div>
          <div className="w3-col l3 m6 w3-margin-bottom">
            <div className="w3-card">
              <img
                src="https://www.w3schools.com/w3images/team4.jpg"
                alt="Dan"
                style={{ width: "100%" }}
              />
              <div className="w3-container">
                <h3>Dan Star</h3>
                <p className="w3-opacity">Designer</p>
                <p>
                  Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse
                  sodales pellentesque elementum.
                </p>
                <p>
                  <button className="w3-button w3-light-grey w3-block">
                    Contact
                  </button>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- Promo Section "Statistics" --> */}
      <div className="w3-container w3-row w3-center w3-dark-grey w3-padding-64">
        <div className="w3-quarter">
          <span className="w3-xxlarge">14+</span>
          <br />
          Partners
        </div>
        <div className="w3-quarter">
          <span className="w3-xxlarge">55+</span>
          <br />
          Projects Done
        </div>
        <div className="w3-quarter">
          <span className="w3-xxlarge">89+</span>
          <br />
          Happy Clients
        </div>
        <div className="w3-quarter">
          <span className="w3-xxlarge">150+</span>
          <br />
          Meetings
        </div>
      </div>
      <Work />
      <Skills />
      <Pricing />
      <Contact />
    </>
  )
}

export default Landing
