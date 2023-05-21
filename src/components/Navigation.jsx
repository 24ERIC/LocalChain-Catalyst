import { useState } from "react"
import { Link } from "react-router-dom"
import { createStyles } from "@mantine/styles"
import { ChartBar, Checkbox, Home, Mailbox } from "tabler-icons-react"

const routes = [
  {
    label: "Home",
    link: "/",
    icon: <Home size={22} strokeWidth={2} color={"grey"} />
  },
  {
    label: "Submit a Proposal",
    link: "/submitProposal",
    icon: <Mailbox size={22} strokeWidth={2} color={"grey"} />
  },
  {
    label: "Vote on Proposals",
    link: "/proposals",
    icon: <Checkbox size={22} strokeWidth={2} color={"grey"} />
  },
  {
    label: "Milestones",
    link: "/milestones",
    icon: <ChartBar size={22} strokeWidth={2} color={"grey"} />
  }
]

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
  },

  linkActive: {
    "&, &:hover": {
      backgroundColor: theme.colors.dark[6],
      color: theme.white
    }
  }
}))

const Navigation = () => {
  const [active, setActive] = useState("Home")
  const { classes, cx } = useStyles()

  return (
    <div>
      {routes.map((route) => (
        <Link
          key={route.label}
          className={cx(classes.link, {
            [classes.linkActive]: route.label === active
          })}
          to={route.link}
          onClick={() => setActive(route.label)}
        >
          {route.icon}&nbsp;&nbsp;{route.label}
        </Link>
      ))}
    </div>
  )
}

export default Navigation
