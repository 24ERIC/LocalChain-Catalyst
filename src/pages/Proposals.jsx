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
  Title
} from "@mantine/core"
import React, { useState, useEffect } from "react"

const proposals = [
  {
    title: "Flashpoint",
    cat: "Termite Control",
    desc: "Puce",
    votes: 60372,
    date: "11/20/2022"
  },
  {
    title: "Mynte",
    cat: "Marlite Panels (FED)",
    desc: "Aquamarine",
    votes: 7522,
    date: "8/17/2022"
  },
  {
    title: "Fanoodle",
    cat: "Drilled Shafts",
    desc: "Green",
    votes: 77164,
    date: "8/11/2022"
  },
  {
    title: "Avavee",
    cat: "RF Shielding",
    desc: "Crimson",
    votes: 82060,
    date: "3/1/2023"
  },
  {
    title: "Buzzster",
    cat: "Fire Protection",
    desc: "Violet",
    votes: 14057,
    date: "2/7/2023"
  },
  {
    title: "Skipfire",
    cat: "Structural & Misc Steel Erection",
    desc: "Pink",
    votes: 7064,
    date: "3/28/2023"
  },
  {
    title: "Lajo",
    cat: "EIFS",
    desc: "Indigo",
    votes: 95743,
    date: "4/16/2023"
  },
  {
    title: "Eayo",
    cat: "Wall Protection",
    desc: "Green",
    votes: 19354,
    date: "1/14/2023"
  },
  {
    title: "Topicware",
    cat: "Structural and Misc Steel (Fabrication)",
    desc: "Goldenrod",
    votes: 91735,
    date: "8/2/2022"
  },
  {
    title: "Youopia",
    cat: "Roofing (Asphalt)",
    desc: "Purple",
    votes: 23574,
    date: "12/22/2022"
  },
  {
    title: "Kazio",
    cat: "Electrical",
    desc: "Turquoise",
    votes: 44579,
    date: "12/19/2022"
  },
  {
    title: "Quaxo",
    cat: "Framing (Steel)",
    desc: "Crimson",
    votes: 7209,
    date: "9/16/2022"
  }
]

// proposals.sort(function (a, b) {
//   return new Date(a.date) - new Date(b.date)
// })

const useStyles = createStyles((theme) => ({
  card: {
    backgroundColor: theme.colors.dark[6]
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

function Proposals() {
  const { classes } = useStyles()
  const [opened, { open, close }] = useDisclosure(false)
  const [position, setPosition] = useState(0)
  const [progress, setProgress] = useState(0)
  const [progColor, setProgColor] = useState("red")
  const [proposal, setProposal] = useState(proposals)

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
    setProposal(proposal.filter((x) => x.title != title))
    close()
  }

  const items = proposal.map((item, index) => (
    <UnstyledButton
      key={item.title}
      className={classes.item}
      onClick={() => {
        setPosition(index)
        setProgress(100 * (item.votes / 100000))
        open()
      }}
    >
      <Text size="lg" mt={7}>
        {item.title}
      </Text>
    </UnstyledButton>
  ))

  return (
    <div>
      <Title>Vote on Proposals</Title>
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
                {proposal[position]?.title}
                <br />
              </div>
              <div style={{ marginBottom: "20px" }}>
                <b>Proposal Category:</b> <br />
                {proposal[position]?.cat}
                <br />
              </div>
              <div style={{ marginBottom: "20px" }}>
                <b>Description:</b> <br />
                {proposal[position]?.desc}
                <br />
              </div>
              <b>Date Created:</b> <br />
              {proposal[position]?.date}
              <br />
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
                {proposal[position]?.votes} of 100000 <b>Votes</b>
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
