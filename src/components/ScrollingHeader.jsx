import { Title, createStyles } from "@mantine/core"

const useStyles = createStyles((theme) => ({
  scrollContainer: {
    display: "flex",
    alignItems: "center",
    height: "100%",
    width: "100%",
    overflow: "hidden"
  },
  scrollingText: {
    background: `linear-gradient(to right, ${theme.colors.teal[4]}, ${theme.colors.violet[5]})`,
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    transform: "translateX(100%)",
    width: "100%",
    animation: "scroll 10s linear infinite",
    "@keyframes scroll": {
      from: {
        transform: "translateX(100%)"
      },
      to: {
        transform: "translateX(-100%)"
      }
    }
  }
}))

const ScrollingHeader = () => {
  const { classes } = useStyles()

  return (
    <div className={classes.scrollContainer}>
      <Title className={classes.scrollingText}>
        Solana Project for OlympiHacks
      </Title>
    </div>
  )
}

export default ScrollingHeader
