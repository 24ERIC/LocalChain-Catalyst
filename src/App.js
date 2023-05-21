import React from "react"
import * as ReactDOM from "react-dom/client"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { AppShell, Navbar, Header, Button } from "@mantine/core"
import "./App.css"
import Landing from "./pages/Landing"
import Home from "./pages/Home"
import Proposals from "./pages/Proposals"
import Voting from "./pages/Voting"
import Milestones from "./pages/Milestones"
import SubmitProposal from "./pages/SubmitProposal"
import Navigation from "./components/Navigation"
import ScrollingHeader from "./components/ScrollingHeader"
import Web3 from "web3";
import axios from 'axios';


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

  async function handleMetamaskAuthSubmit(event) {
    event.preventDefault();
    if (!window.ethereum) {
      // Metamask extension is not installed or not accessible
      console.error('Metamask extension is not installed or not accessible');
      return;
    }

    try {
      // Request permission to access accounts
      await window.ethereum.request({ method: 'eth_requestAccounts' });

      // Create a new Web3 instance using the Metamask provider
      const web3 = new Web3(window.ethereum);

      // Get the current Ethereum accounts
      const accounts = await web3.eth.getAccounts();

      // Perform additional authentication logic, such as verifying the user's identity

      // Get the user's address
      const userAddress = accounts[0];

      // Prompt the user to sign a message
      const signature = await web3.eth.personal.sign(
          'Authentication message', // Message to sign
          userAddress, // User's Ethereum address
          '' // Password (optional)
      );

      // Prepare the request data
      const requestData = {
        provider: 'metamask',
        userAddress,
        signature,
      };

      // Send the request to the server
      const response = await axios.post('/api/auth', requestData);

      // Handle the server response
      console.log(response.data); // You can modify this according to your needs

      // Reset the form fields or perform any other necessary actions
      closeMetamaskAuthPopup();
    } catch (error) {
      // Handle errors, such as user denying permission or network issues
      console.error('Metamask authentication failed:', error);
    }
  }

  return (
    <>
      <Router>
        <AppShell
          padding="md"
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
            <Route path="" element={<Home />} />
            <Route path="/proposals" element={<Proposals />} />
            <Route path="/voting" element={<Voting />} />
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
          <h2>MetaMask Wallet</h2>
          <form onSubmit={handleMetamaskAuthSubmit}>

          <button type="submit">Connect</button>
          </form>
        </div>
      </div>
    </>
  )
}

export default App

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<App />)
