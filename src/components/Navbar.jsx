// Navbar sits on top
const Navbar = () => {
  function openSignupPopup() {
    document.getElementById("signUpPopup").style.display = "block"
  }

  function openLoginPopup() {
    document.getElementById("logInPopup").style.display = "block"
  }
  return (
    // <div className="w3-top">
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
          onClick={openSignupPopup}
        >
          {" "}
          Sign Up
        </a>
        <a
          href="#"
          className="w3-bar-item w3-button"
          id="loginBtn"
          onClick={openLoginPopup}
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
      <a
        href="javascript:void(0)"
        className="w3-bar-item w3-button w3-right w3-hide-large w3-hide-medium"
        onclick="w3_open()"
      ></a>
    </div>
  )
}

export default Navbar
