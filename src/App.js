import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { AppShell, Navbar, Header, Button } from "@mantine/core"
import "./App.css"
import Landing from "./pages/Landing"
import Home from "./pages/Home"
import Proposals from "./pages/Proposals"
import Milestones from "./pages/Milestones"
import SubmitProposal from "./pages/SubmitProposal"
import Navigation from "./components/Navigation"
import ScrollingHeader from "./components/ScrollingHeader"

function App() {
  function openNearAuthPopup() {
    document.getElementById("nearPopup").style.display = "block"
  }

  function openMetamaskAuthPopup() {
    document.getElementById("metamaskPopup").style.display = "block"
  }

  function closeNearAuthPopup() {
    document.getElementById("nearPopup").style.display = "none"
  }

  function closeMetamaskAuthPopup() {
    document.getElementById("metamaskPopup").style.display = "none"
  }

  return (
    <>
      <Router>
        <AppShell
          padding="xl"
          navbar={
            <Navbar width={{ base: 300 }} height={"100%"} p="xs">
              <Navigation />
              <Button onClick={openNearAuthPopup} sx={{ marginBottom: "20px" }}>
                Connect a NEAR wallet
              </Button>
              <Button onClick={openMetamaskAuthPopup}>
                Connect a MetaMask wallet
              </Button>
            </Navbar>
          }
          header={
            <Header height={100} p="xs">
              <ScrollingHeader />
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
            <Route path="/milestones" element={<Milestones />} />
            <Route path="/submitProposal" element={<SubmitProposal />} />
          </Routes>
        </AppShell>
      </Router>
      <div id="nearPopup" className="popup">
        <div className="popup-content">
          <span className="close" onClick={closeNearAuthPopup}>
            &times;
          </span>
          <h2>Connect Near Wallet</h2>
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
      <div id="metamaskPopup" className="popup">
        <div className="popup-content">
          <span className="close" onClick={closeMetamaskAuthPopup}>
            &times;
          </span>
          <h2>Connect MetaMask Wallet</h2>
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
