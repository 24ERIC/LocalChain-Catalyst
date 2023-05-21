import { useDisclosure } from "@mantine/hooks"
import {
  createStyles,
  Card,
  Text,
  SimpleGrid,
  UnstyledButton,
  rem,
  Modal,
  Button,
  Progress,
  Title,
  useMantineTheme
} from "@mantine/core"
import React, { useState, useEffect } from "react"

const proposals = [
  {
    title: "Build a New Church",
    cat: "Social Services and Welfare",
    desc: "Build a new Church at Newlands Heath Rd and Moorfield Walk Ave",
    votes: 6037,
    date: "11/20/2022"
  },
  {
    title: "Create a new Bus Stop",
    cat: "Marlite Panels (FED)",
    desc: "Aquamarine",
    votes: 752,
    date: "8/17/2022"
  },
  {
    title: "Pave a street",
    cat: "Drilled Shafts",
    desc: "Green",
    votes: 7716,
    date: "8/11/2022"
  },
  {
    title: "Fund the Library",
    cat: "RF Shielding",
    desc: "Crimson",
    votes: 8206,
    date: "3/1/2023"
  },
  {
    title: "Invest in Elementary Schools",
    cat: "Fire Protection",
    desc: "Violet",
    votes: 1405,
    date: "2/7/2023"
  },
  {
    title: "Create a new Park",
    cat: "Structural & Misc Steel Erection",
    desc: "Pink",
    votes: 706,
    date: "3/28/2023"
  },
  {
    title: "Professional Training Bootcamp",
    cat: "EIFS",
    desc: "Indigo",
    votes: 9574,
    date: "4/16/2023"
  },
  {
    title: "Build a Statue",
    cat: "Wall Protection",
    desc: "Green",
    votes: 1935,
    date: "7/14/2022"
  },
  {
    title: "Build a new Garden",
    cat: "Wall Protection",
    desc: "Green",
    votes: 5935,
    date: "12/4/2022"
  },
  {
    title: "Celebrate Oktoberfest",
    cat: "Wall Protection",
    desc: "Green",
    votes: 8725,
    date: "9/11/2021"
  }
]

proposals.sort(function (a, b) {
  return new Date(a.date) - new Date(b.date)
})

const useStyles = createStyles((theme) => ({
  card: {
    backgroundColor: theme.colors.dark[6],
    marginTop: "40px"
  },

  item: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    borderRadius: theme.radius.md,
    height: rem(90),
    backgroundColor: theme.colors.dark[7],
    transition: "transform 100ms ease",

    "&:hover": {
      transform: "scale(1.05)"
    }
  }
}))

const Proposals = () => {
  const { classes } = useStyles()
  const theme = useMantineTheme()
  const [opened, { open, close }] = useDisclosure(false)
  const [position, setPosition] = useState(0)
  const [progress, setProgress] = useState(0)
  const [progColor, setProgColor] = useState("red")
  const [proposal, setProposal] = useState(proposals)

  useEffect(
    () => async () => {
      fetch("/proposals")
        .then((response) => response.json())
        .then((data) => {
          setProposal(data.proposals.filter((x) => x.userAddress !== null))
        })
        .catch((error) => {
          console.error("Error:", error)
        })
    },
    []
  )

  useEffect(() => {
    if (progress <= 40) {
      setProgColor("red")
    } else {
      if (progress <= 80) {
        setProgColor("yellow")
      } else {
        setProgColor("green")
      }
    }
  }, [progress])

  const handleNotInterested = (title) => {
    setProposal(proposal.filter((x) => x.title !== title))
    close()
  }

  const handleSupport = (title) => {
    proposal[position].votes += 1
    setProposal(proposal.filter((x) => x.title != title))
    close()

  const voteForProposal = async (title) => {
    const proposalName = { title }
    fetch("/voteForProposal", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(proposalName)
    })
      .then((response) => {
        console.log("success?", response)
      })
      .catch((error) => {
        console.log(error)
      })
  }

  const items = proposal.map((item, index) => (
    <UnstyledButton
      key={index}
      className={classes.item}
      onClick={() => {
        setPosition(index)
        setProgress(100 * (item.votes / 10000))
        open()
      }}
    >
      <Text size="lg" mt={7}>
        {item.proposalName}
      </Text>
    </UnstyledButton>
  ))

  return (
    <div>
      <Title sx={{ color: theme.colors.teal[5] }}>Vote on Proposals</Title>
      <Card withBorder radius="md" className={classes.card}>
        <Modal opened={opened} onClose={close} centered>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              fontSize: "20px"
            }}
          >
            <div style={{ textAlign: "center" }}>
              <div style={{ marginBottom: "20px" }}>
                <b>Proposal Name:</b> <br />
                {proposal[position]?.proposalName}
                <br />
              </div>
              <div style={{ marginBottom: "20px" }}>
                <b>Proposal Category:</b> <br />
                {proposal[position]?.proposalCategory}
                <br />
              </div>
              <div style={{ marginBottom: "20px" }}>
                <b>Description:</b> <br />
                {proposal[position]?.proposalDescription}
                <br />
              </div>
              {/* <b>Date Created:</b> <br />
              {proposal[position]?.date}
              <br /> */}
            </div>
            <div>
              <Button
                size="md"
                color="red"
                onClick={() => handleNotInterested(proposal[position].title)}
              >
                Not Interested
              </Button>
              <Button
                size="md"
                sx={{ margin: "30px 15px 30px 15px" }}
                color="green"
                onClick={() => handleSupport(proposal[position].title)}
              >
                Support
              </Button>
              <Progress
                color={progColor}
                radius="md"
                size="xl"
                value={progress}
                sx={{ height: "30px" }}
              />
              <Text
                size="sm"
                style={{ marginTop: "5px", marginBottom: "17px" }}
              >
                {proposal[position]?.votes} of 10000 <b>Votes</b>
              </Text>
            </div>
          </div>
        </Modal>
        <SimpleGrid cols={3} mt="md">
          {items}
        </SimpleGrid>
      </Card>
    </div>
  )
}

export default Proposals
