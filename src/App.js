import React, { useState } from "react"
import { Routes, Route } from "react-router-dom"
import {
  AppShell,
  Navbar,
  Header,
  Button,
  useMantineTheme,
  Title,
  Text,
  Group
} from "@mantine/core"
import { createStyles } from "@mantine/styles"
import { Logout } from "tabler-icons-react"
import "./App.css"
import Landing from "./pages/Landing"
import Home from "./pages/Home"
import Proposals from "./pages/Proposals"
import Milestones from "./pages/Milestones"
import SubmitProposal from "./pages/SubmitProposal"
import Navigation from "./components/Navigation"
import ScrollingHeader from "./components/ScrollingHeader"
import Web3 from "web3";
import axios from 'axios';
import { ReactComponent as Blob } from "./assets/blob.svg"


function App() {
  const [loggedIn, setLoggedIn] = useState(false)
  const theme = useMantineTheme()

  const useStyles = createStyles((theme) => ({
    link: {
      display: "flex",
      alignItems: "center",
      fontSize: theme.fontSizes.lg,
      textDecoration: "none",
      padding: `${theme.spacing.md} ${theme.spacing.md}`,
      marginBottom: "10px",
      borderRadius: theme.radius.sm,
      fontWeight: 500,

      "&:hover": {
        backgroundColor: theme.colors.dark[6],
        color: theme.white
      }
    }
  }))

  const { classes } = useStyles()

  function openMetamaskAuthPopup() {
    document.getElementById("metamaskPopup").style.display = "block"
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
      setLoggedIn(true);
      // Reset the form fields or perform any other necessary actions
      closeMetamaskAuthPopup();
    } catch (error) {
      // Handle errors, such as user denying permission or network issues
      console.error('Metamask authentication failed:', error);
    }
  }

  return (
    <>
      {loggedIn ? (
        <AppShell
          padding="xl"
          navbar={
            <Navbar width={{ base: 300 }} height={"100%"} p="xs">
              <div
                style={{
                  height: "calc(100% - 82px)",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between"
                }}
              >
                <Navigation />
                <div onClick={() => setLoggedIn(false)}>
                  <Text className={classes.link} sx={{ cursor: "pointer" }}>
                    <Logout size={22} strokeWidth={2} color={"grey"} />
                    &nbsp;&nbsp; Log out
                  </Text>
                </div>
              </div>
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
            <Route path="/milestones" element={<Milestones />} />
            <Route path="/submitProposal" element={<SubmitProposal />} />
          </Routes>
        </AppShell>
      ) : (
        <div
          style={{
            backgroundColor: theme.colors.dark[7],
            maxHeight: "100vh",
            overflow: "hidden"
          }}
        >
          <Blob
            style={{
              position: "absolute",
              right: 0,
              maxWidth: "100%",
              maxHeight: "100%"
            }}
          />
          <div
            style={{
              height: "100vh",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              marginLeft: "30px",
              width: "40%"
            }}
          >
            <Title
              sx={{
                color: theme.colors.teal[5],
                marginBottom: "20px"
              }}
            >
              LocalChain Catalyst
            </Title>
            <Text fz="xl">
              At LocalChain Catalyst, we are passionate about leveraging blockchain technology to ignite positive change within local communities. Our platform serves as a catalyst for transformation, empowering individuals, businesses, and organizations to make a lasting impact on their local ecosystem.
              <br />
              With LocalChain Catalyst, we aim to revolutionize community engagement, economic growth, and social empowerment. By combining the decentralized nature of blockchain technology with a focus on local communities, we create a powerful platform that fosters collaboration, trust, and transparency.              <br />
              Our Vision:
              We envision a world where local communities thrive, powered by the innovative potential of blockchain technology. Our vision is to create an inclusive ecosystem where individuals and organizations can connect, collaborate, and contribute to the betterment of their community.

            </Text>
            <Group spacing="xl" sx={{ marginTop: "80px" }}>
{/*              <Button size="md" onClick={() => setLoggedIn(true)}>
                Connect NEAR Wallet
              </Button>*/}

              <Button onClick={openMetamaskAuthPopup}>
                Connect a MetaMask wallet
              </Button>            </Group>
          </div>
        </div>
      )}
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
