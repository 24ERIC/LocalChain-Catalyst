<<<<<<< Updated upstream
import { Button, Image, Text, Title } from "@mantine/core"

const Header = () => {
  return (
    <div style={{ position: "relative", color: "white" }}>
      <Image
        src="https://images.unsplash.com/photo-1461088945293-0c17689e48ac?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2371&q=80"
        sx={{ opacity: 0.4 }}
      />
      <div style={{ position: "absolute", top: "30%", padding: "48px" }}>
        <Title sx={{ fontSize: "50px", marginBottom: "20px" }}>
          Start something that matters
        </Title>
        <Text fz="xl" sx={{ marginBottom: "70px" }}>
          Be the change in your community.
        </Text>
        <Button variant="outline" size="md">
          Submit a proposal
        </Button>
=======



const Header = () => {
  return (
    <header className="bgimg-1 w3-display-container w3-grayscale-min" id="home">
      <div
        className="w3-display-left w3-text-white"
        style={{ padding: "48px" }}
      >
        <span className="w3-jumbo w3-hide-small">
            You Have 10 Proposals to Vote
        </span>
        <br />
        <span className="w3-xxlarge w3-hide-large w3-hide-medium">
          Check out the Milestones for approved proposals
        </span>
        <br />
        <span className="w3-large">
          Check out the Milestones for approved proposals
        </span>
        <p>
          <a
            href="#about"
            className="w3-button w3-white w3-padding-large w3-large w3-margin-top w3-opacity w3-hover-opacity-off"
          >
            Learn more and start today
          </a>
        </p>
>>>>>>> Stashed changes
      </div>
    </div>
  )
}

export default Header
