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
  const { classes, cx } = useStyles()

  return (
    <div className={cx(classes.scrollContainer)}>
      <Title className={cx(classes.scrollingText)}>
        Solana Project for OlympiHacks
      </Title>
    </div>
  )
}

export default ScrollingHeader
