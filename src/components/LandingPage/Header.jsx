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
      </div>
    </div>
  )
}

export default Header
