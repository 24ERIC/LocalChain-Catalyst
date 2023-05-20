import React from "react"
import * as ReactDOM from "react-dom/client"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { AppShell, Navbar, Header, Aside, Footer } from "@mantine/core"
import "./App.css"
// import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";
import Landing from "./pages/Landing"
import Home from "./pages/Home"
import Proposals from "./pages/Proposals"
import Voting from "./pages/Voting"
import Milestones from "./pages/Milestones"
import SubmitProposal from "./pages/SubmitProposal"
import Navigation from "./components/Navigation"

function App() {
  // function openSignupPopup() {
  //   document.getElementById("signUpPopup").style.display = "block"
  // }

  // function closeSignupPopup() {
  //   document.getElementById("signUpPopup").style.display = "none"
  // }

  // function openLoginPopup() {
  //   document.getElementById("logInPopup").style.display = "block"
  // }

  // function closeLoginPopup() {
  //   document.getElementById("logInPopup").style.display = "none"
  // }

  // function onClick(element) {
  //   document.getElementById("img01").src = element.src
  //   document.getElementById("modal01").style.display = "block"
  //   var captionText = document.getElementById("caption")
  //   captionText.innerHTML = element.alt
  // }

  // // Toggle between showing and hiding the sidebar when clicking the menu icon
  // var mySidebar = document.getElementById("mySidebar")

  // function w3_open() {
  //   if (mySidebar.style.display === "block") {
  //     mySidebar.style.display = "none"
  //   } else {
  //     mySidebar.style.display = "block"
  //   }
  // }

  // // Close the sidebar with the close button
  // function w3_close() {
  //   mySidebar.style.display = "none"
  // }

  return (
    <Router>
      <AppShell
        padding="md"
        navbar={
          <Navbar width={{ base: 300 }} height={"100%"} p="xs">
            <Navigation />
          </Navbar>
        }
        header={
          <Header height={100} p="xs">
            OLYMPIHACKS SOLANA
          </Header>
        }
        styles={(theme) => ({
          main: {
            backgroundColor: theme.colors.dark[7]
          }
        })}
      >
        <Routes>
          <Route exact path="/" element={<Landing />} />
          <Route path="/home" element={<Home />} />
          <Route path="/proposals" element={<Proposals />} />
          <Route path="/voting" element={<Voting />} />
          <Route path="/milestones" element={<Milestones />} />
          <Route path="/submitProposal" element={<SubmitProposal />} />
        </Routes>
      </AppShell>
    </Router>
    /* <div id="signUpPopup" className="popup">
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
      </div> */
  )
}

export default App

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<App />)
