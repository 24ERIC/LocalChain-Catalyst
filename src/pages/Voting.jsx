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
  Progress
} from "@mantine/core"
import React, { useState, useEffect } from "react"

const proposals = [
  {
    title: "Kayveo",
    desc: "Goldenrod",
    votes: 84929,
    date: "8/27/2022"
  },
  {
    title: "Twimbo",
    desc: "Fuscia",
    votes: 81661,
    date: "2/15/2023"
  },
  {
    title: "Dabfeed",
    desc: "Orange",
    votes: 79634,
    date: "3/12/2023"
  },
  {
    title: "Oba",
    desc: "Fuscia",
    votes: 94635,
    date: "8/16/2022"
  },
  {
    title: "Jatri",
    desc: "Teal",
    votes: 54323,
    date: "5/14/2023"
  },
  {
    title: "Livefish",
    desc: "Puce",
    votes: 30819,
    date: "8/9/2022"
  },
  {
    title: "Voonyx",
    desc: "Aquamarine",
    votes: 78217,
    date: "2/23/2023"
  },
  {
    title: "Vitz",
    desc: "Khaki",
    votes: 79345,
    date: "8/19/2022"
  },
  {
    title: "Jabberbean",
    desc: "Aquamarine",
    votes: 79184,
    date: "8/29/2022"
  },
  {
    title: "Kamba",
    desc: "Khaki",
    votes: 64055,
    date: "2/26/2023"
  }
]

proposals.sort(function (a, b) {
  return new Date(a.date) - new Date(b.date)
})

const useStyles = createStyles((theme) => ({
  card: {
    backgroundColor:
      theme.colorScheme === "dark" ? theme.colors.dark[6] : theme.colors.gray[0]
  },

  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontWeight: 700
  },

  item: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    borderRadius: theme.radius.md,
    height: rem(90),
    backgroundColor:
      theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.white,
    transition: "box-shadow 150ms ease, transform 100ms ease",

    "&:hover": {
      boxShadow: theme.shadows.md,
      transform: "scale(1.05)"
    }
  }
}))

function Voting() {
  const { classes } = useStyles()
  const [opened, { open, close }] = useDisclosure(false)
  const [position, setPosition] = useState(0)
  const [progress, setProgress] = useState(0)
  const [progColor, setProgColor] = useState("red")

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

  const items = proposals.map((item, index) => (
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
      <h1 style={{ position: "relative", left: "5%" }}>Vote on Proposals</h1>
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
            <b>Proposal Name:</b> {proposals[position].title}
            <br />
            <b>Description:</b> {proposals[position].desc}
            <br />
            <b>Amount of Votes:</b> {proposals[position].votes}
            <br />
            <b>Date Created:</b> {proposals[position].date}
            <br />
            <div>
              <Button size="md" color="red">
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
                sx={{ marginBottom: "20px" }}
              />
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

export default Voting
