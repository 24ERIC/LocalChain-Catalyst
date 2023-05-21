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
            <Route path="/home" element={<Home />} />
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
              Title of our Application
            </Title>
            <Text fz="xl">
              Long description of our application very very very very long
              <br />
              Even more text here so so so long text so it looks cooler
              <br />
              And one more line because it'll look so much better
            </Text>
            <Group spacing="xl" sx={{ marginTop: "80px" }}>
              <Button size="md" onClick={() => setLoggedIn(true)}>
                Connect NEAR Wallet
              </Button>
              <Button size="md">Connect MetaMask Wallet</Button>
            </Group>
          </div>
        </div>
      )}
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
