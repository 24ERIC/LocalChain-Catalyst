import "./App.css"

function App() {
  function openSignupPopup() {
    document.getElementById("signUpPopup").style.display = "block"
  }

  function closeSignupPopup() {
    document.getElementById("signUpPopup").style.display = "none"
  }

  function openLoginPopup() {
    document.getElementById("logInPopup").style.display = "block"
  }

  function closeLoginPopup() {
    document.getElementById("logInPopup").style.display = "none"
  }

  function onClick(element) {
    document.getElementById("img01").src = element.src
    document.getElementById("modal01").style.display = "block"
    var captionText = document.getElementById("caption")
    captionText.innerHTML = element.alt
  }

  // Toggle between showing and hiding the sidebar when clicking the menu icon
  var mySidebar = document.getElementById("mySidebar")

  function w3_open() {
    if (mySidebar.style.display === "block") {
      mySidebar.style.display = "none"
    } else {
      mySidebar.style.display = "block"
    }
  }

  // Close the sidebar with the close button
  function w3_close() {
    mySidebar.style.display = "none"
  }
  return (
    <>
      {/* <!-- Navbar (sit on top) --> */}
      <div className="w3-top">
        <div className="w3-bar w3-white w3-card" id="myNavbar">
          <a href="#home" className="w3-bar-item w3-button w3-wide">
            LOGO
          </a>
          {/* <!-- Right-sided navbar links --> */}
          <div className="w3-right w3-hide-small">
            <a href="#about" className="w3-bar-item w3-button">
              ABOUT
            </a>
            <a
              href="#"
              className="w3-bar-item w3-button"
              id="signupBtn"
              onclick="openSignupPopup()"
            >
              {" "}
              Sign Up
            </a>
            <a
              href="#"
              className="w3-bar-item w3-button"
              id="loginBtn"
              onclick="openLoginPopup()"
            >
              {" "}
              Log In
            </a>
            <a href="#pricing" className="w3-bar-item w3-button">
              PRICING
            </a>
            <a href="#contact" className="w3-bar-item w3-button">
              {" "}
              CONTACT
            </a>
          </div>
          {/* <!-- Hide right-floated links on small screens and replace them with a menu icon --> */}

          <a
            href="javascript:void(0)"
            className="w3-bar-item w3-button w3-right w3-hide-large w3-hide-medium"
            onclick="w3_open()"
          ></a>
        </div>
      </div>

      {/* <!-- Sidebar on small screens when clicking the menu icon --> */}
      <nav
        className="w3-sidebar w3-bar-block w3-black w3-card w3-animate-left w3-hide-medium w3-hide-large"
        style={{ display: "none" }}
        id="mySidebar"
      >
        <a
          href="javascript:void(0)"
          onclick="w3_close()"
          className="w3-bar-item w3-button w3-large w3-padding-16"
        >
          Close ×
        </a>
        <a href="#about" onclick="w3_close()" className="w3-bar-item w3-button">
          ABOUT
        </a>
        <a href="#team" onclick="w3_close()" className="w3-bar-item w3-button">
          TEAM
        </a>
        <a href="#work" onclick="w3_close()" className="w3-bar-item w3-button">
          WORK
        </a>
        <a
          href="#pricing"
          onclick="w3_close()"
          className="w3-bar-item w3-button"
        >
          PRICING
        </a>
        <a
          href="#contact"
          onclick="w3_close()"
          className="w3-bar-item w3-button"
        >
          CONTACT
        </a>
      </nav>

      {/* <!-- Header with full-height image --> */}
      <header
        className="bgimg-1 w3-display-container w3-grayscale-min"
        id="home"
      >
        <div
          className="w3-display-left w3-text-white"
          style={{ padding: "48px" }}
        >
          <span className="w3-jumbo w3-hide-small">
            Start something that matters
          </span>
          <br />
          <span className="w3-xxlarge w3-hide-large w3-hide-medium">
            Start something that matters
          </span>
          <br />
          <span className="w3-large">
            Stop wasting valuable time with projects that just isn't you.
          </span>
          <p>
            <a
              href="#about"
              className="w3-button w3-white w3-padding-large w3-large w3-margin-top w3-opacity w3-hover-opacity-off"
            >
              Learn more and start today
            </a>
          </p>
        </div>
      </header>

      {/* <!-- About Section --> */}
      <div
        className="w3-container"
        style={{ padding: "128px 16px" }}
        id="about"
      >
        <h3 className="w3-center">ABOUT THE COMPANY</h3>
        <p className="w3-center w3-large">Key features of our company</p>
        <div className="w3-row-padding w3-center" style={{ marginTop: "64px" }}>
          <div className="w3-quarter">
            <p className="w3-large">Responsive</p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore.
            </p>
          </div>
          <div className="w3-quarter">
            <p className="w3-large">Passion</p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore.
            </p>
          </div>
          <div className="w3-quarter">
            <p className="w3-large">Design</p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore.
            </p>
          </div>
          <div className="w3-quarter">
            <p className="w3-large">Support</p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore.
            </p>
          </div>
        </div>
      </div>

      {/* <!-- Promo Section - "We know design" --> */}
      <div
        className="w3-container w3-light-grey"
        style={{ padding: "128px 16px" }}
      >
        <div className="w3-row-padding">
          <div className="w3-col m6">
            <h3>We know design.</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod
              <br />
              tempor incididunt ut labore et dolore.
            </p>
            <p>
              <a href="#work" className="w3-button w3-black">
                {" "}
                View Our Works
              </a>
            </p>
          </div>
          <div className="w3-col m6">
            <img
              className="w3-image w3-round-large"
              src="https://www.w3schools.com/w3images/phone_buildings.jpg"
              alt="Buildings"
              width="700"
              height="394"
            />
          </div>
        </div>
      </div>

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

      {/* <!-- Work Section --> */}
      <div className="w3-container" style={{ padding: "128px 16px" }} id="work">
        <h3 className="w3-center">OUR WORK</h3>
        <p className="w3-center w3-large">What we've done for people</p>

        <div className="w3-row-padding" style={{ marginTop: "64px" }}>
          <div className="w3-col l3 m6">
            <img
              src="https://www.w3schools.com/w3images/tech_mic.jpg"
              style={{ width: "100%" }}
              onclick="onClick(this)"
              className="w3-hover-opacity"
              alt="A microphone"
            />
          </div>
          <div className="w3-col l3 m6">
            <img
              src="https://www.w3schools.com/w3images/tech_phone.jpg"
              style={{ width: "100%" }}
              onclick="onClick(this)"
              className="w3-hover-opacity"
              alt="A phone"
            />
          </div>
          <div className="w3-col l3 m6">
            <img
              src="https://www.w3schools.com/w3images/tech_drone.jpg"
              style={{ width: "100%" }}
              onclick="onClick(this)"
              className="w3-hover-opacity"
              alt="A drone"
            />
          </div>
          <div className="w3-col l3 m6">
            <img
              src="https://www.w3schools.com/w3images/tech_sound.jpg"
              style={{ width: "100%" }}
              onclick="onClick(this)"
              className="w3-hover-opacity"
              alt="Soundbox"
            />
          </div>
        </div>

        <div className="w3-row-padding w3-section">
          <div className="w3-col l3 m6">
            <img
              src="https://www.w3schools.com/w3images/tech_tablet.jpg"
              style={{ width: "100%" }}
              onclick="onClick(this)"
              className="w3-hover-opacity"
              alt="A tablet"
            />
          </div>
          <div className="w3-col l3 m6">
            <img
              src="https://www.w3schools.com/w3images/tech_camera.jpg"
              style={{ width: "100%" }}
              onclick="onClick(this)"
              className="w3-hover-opacity"
              alt="A camera"
            />
          </div>
          <div className="w3-col l3 m6">
            <img
              src="https://www.w3schools.com/w3images/tech_typewriter.jpg"
              style={{ width: "100%" }}
              onclick="onClick(this)"
              className="w3-hover-opacity"
              alt="A typewriter"
            />
          </div>
          <div className="w3-col l3 m6">
            <img
              src="https://www.w3schools.com/w3images/tech_tableturner.jpg"
              style={{ width: "100%" }}
              onclick="onClick(this)"
              className="w3-hover-opacity"
              alt="A tableturner"
            />
          </div>
        </div>
      </div>

      {/* <!-- Modal for full size images on click--> */}
      <div
        id="modal01"
        className="w3-modal w3-black"
        onclick="this.style.display='none'"
      >
        <span
          className="w3-button w3-xxlarge w3-black w3-padding-large w3-display-topright"
          title="Close Modal Image"
        >
          ×
        </span>
        <div className="w3-modal-content w3-animate-zoom w3-center w3-transparent w3-padding-64">
          <img id="img01" className="w3-image" />
          <p id="caption" className="w3-opacity w3-large"></p>
        </div>
      </div>

      {/* <!-- Skills Section --> */}
      <div className="w3-container w3-light-grey w3-padding-64">
        <div className="w3-row-padding">
          <div className="w3-col m6">
            <h3>Our Skills.</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod
              <br />
              tempor incididunt ut labore et dolore.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod
              <br />
              tempor incididunt ut labore et dolore.
            </p>
          </div>
          <div className="w3-col m6">
            <p className="w3-wide">Photography</p>
            <div className="w3-grey">
              <div
                className="w3-container w3-dark-grey w3-center"
                style={{ width: "90%" }}
              >
                90%
              </div>
            </div>
            <p className="w3-wide">Web Design</p>
            <div className="w3-grey">
              <div
                className="w3-container w3-dark-grey w3-center"
                style={{ width: "85%" }}
              >
                85%
              </div>
            </div>
            <p className="w3-wide">Photoshop</p>
            <div className="w3-grey">
              <div
                className="w3-container w3-dark-grey w3-center"
                style={{ width: "75%" }}
              >
                75%
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- Pricing Section --> */}
      <div
        className="w3-container w3-center w3-dark-grey"
        style={{ padding: "128px 16px" }}
        id="pricing"
      >
        <h3>PRICING</h3>
        <p className="w3-large">Choose a pricing plan that fits your needs.</p>
        <div className="w3-row-padding" style={{ marginTop: "64px" }}>
          <div className="w3-third w3-section">
            <ul className="w3-ul w3-white w3-hover-shadow">
              <li className="w3-black w3-xlarge w3-padding-32">Basic</li>
              <li className="w3-padding-16">
                <b>10GB</b> Storage
              </li>
              <li className="w3-padding-16">
                <b>10</b> Emails
              </li>
              <li className="w3-padding-16">
                <b>10</b> Domains
              </li>
              <li className="w3-padding-16">
                <b>Endless</b> Support
              </li>
              <li className="w3-padding-16">
                <h2 className="w3-wide">$ 10</h2>
                <span className="w3-opacity">per month</span>
              </li>
              <li className="w3-light-grey w3-padding-24">
                <button className="w3-button w3-black w3-padding-large">
                  Sign Up
                </button>
              </li>
            </ul>
          </div>
          <div className="w3-third">
            <ul className="w3-ul w3-white w3-hover-shadow">
              <li className="w3-red w3-xlarge w3-padding-48">Pro</li>
              <li className="w3-padding-16">
                <b>25GB</b> Storage
              </li>
              <li className="w3-padding-16">
                <b>25</b> Emails
              </li>
              <li className="w3-padding-16">
                <b>25</b> Domains
              </li>
              <li className="w3-padding-16">
                <b>Endless</b> Support
              </li>
              <li className="w3-padding-16">
                <h2 className="w3-wide">$ 25</h2>
                <span className="w3-opacity">per month</span>
              </li>
              <li className="w3-light-grey w3-padding-24">
                <button className="w3-button w3-black w3-padding-large">
                  Sign Up
                </button>
              </li>
            </ul>
          </div>
          <div className="w3-third w3-section">
            <ul className="w3-ul w3-white w3-hover-shadow">
              <li className="w3-black w3-xlarge w3-padding-32">Premium</li>
              <li className="w3-padding-16">
                <b>50GB</b> Storage
              </li>
              <li className="w3-padding-16">
                <b>50</b> Emails
              </li>
              <li className="w3-padding-16">
                <b>50</b> Domains
              </li>
              <li className="w3-padding-16">
                <b>Endless</b> Support
              </li>
              <li className="w3-padding-16">
                <h2 className="w3-wide">$ 50</h2>
                <span className="w3-opacity">per month</span>
              </li>
              <li className="w3-light-grey w3-padding-24">
                <button className="w3-button w3-black w3-padding-large">
                  Sign Up
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* <!-- Contact Section --> */}
      <div
        className="w3-container w3-light-grey"
        style={{ padding: "128px 16px" }}
        id="contact"
      >
        <h3 className="w3-center">CONTACT</h3>
        <p className="w3-center w3-large">
          Lets get in touch. Send us a message:
        </p>
        <div style={{ marginTop: "48px" }}>
          <p> Chicago, US</p>
          <p>Phone: +00 151515</p>
          <p>Email: mail@mail.com</p>
          <br />
          <form action="/action_page.php" target="_blank">
            <p>
              <input
                className="w3-input w3-border"
                type="text"
                placeholder="Name"
                required
                name="Name"
              />
            </p>
            <p>
              <input
                className="w3-input w3-border"
                type="text"
                placeholder="Email"
                required
                name="Email"
              />
            </p>
            <p>
              <input
                className="w3-input w3-border"
                type="text"
                placeholder="Subject"
                required
                name="Subject"
              />
            </p>
            <p>
              <input
                className="w3-input w3-border"
                type="text"
                placeholder="Message"
                required
                name="Message"
              />
            </p>
            <p>
              <button className="w3-button w3-black" type="submit">
                SEND MESSAGE
              </button>
            </p>
          </form>
          {/* <!-- Image of location/map --> */}
          <img
            src="https://www.w3schools.com/w3images/map.jpg"
            className="w3-image w3-greyscale"
            style={{ width: "100%", marginTop: "48px" }}
          />
        </div>
      </div>

      {/* <!-- Footer --> */}
      <footer className="w3-center w3-black w3-padding-64">
        <a href="#home" className="w3-button w3-light-grey">
          To the top
        </a>
        <p>
          Powered by{" "}
          <a
            href="https://www.w3schools.com/w3css/default.asp"
            title="W3.CSS"
            target="_blank"
            className="w3-hover-text-green"
          >
            w3.css
          </a>
        </p>
      </footer>

      <div id="signUpPopup" className="popup">
        <div className="popup-content">
          <span className="close" onclick="closeSignupPopup()">
            &times;
          </span>
          <h2>Sign Up</h2>
          <form>
            <div className="input-wrapper">
              <input type="text" placeholder="Username" />
            </div>
            <div className="input-wrapper">
              <input type="password" placeholder="Password" />
            </div>
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>

      <div id="logInPopup" className="popup">
        <div className="popup-content">
          <span className="close" onclick="closeLoginPopup()">
            &times;
          </span>
          <h2>Log In</h2>
          <form>
            <div className="input-wrapper">
              <input type="text" placeholder="Username" />
            </div>
            <div className="input-wrapper">
              <input type="password" placeholder="Password" />
            </div>
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </>
  )
}

export default App
