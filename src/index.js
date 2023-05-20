import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"
import { MantineProvider } from "@mantine/core"

const globalStyles = () => ({
  body: {
    color: "#909296" // gray 3
  }
})

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <React.StrictMode>
    <MantineProvider
      theme={{
        colorScheme: "dark",
        primaryColor: "teal",
        primaryShade: 4,
        globalStyles
      }}
    >
      <App />
    </MantineProvider>
  </React.StrictMode>
)
