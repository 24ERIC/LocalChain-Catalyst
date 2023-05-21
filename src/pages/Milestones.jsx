import { Progress, Title, useMantineTheme, Text } from "@mantine/core"

const Milestones = () => {
  const theme = useMantineTheme()
  return (
    <>
      <Title sx={{ color: theme.colors.teal[5], marginBottom: "40px" }}>
        Project Milestones Achieved
      </Title>
      <Progress
        radius="xl"
        size={30}
        sections={[
          {
            value: 25,
            color: "a",
            label: "Finish Suggestion"
          },
          {
            value: 25,
            color: "b",
            label: "Plan Budget"
          },
          {
            value: 25,
            color: "c",
            label: "Begin work"
          },
          {
            value: 25,
            color: "gray",
            label: "Complete work"
          }
        ]}
      />
      <Text fz="lg" sx={{ margin: "50px 0" }}>
        Project Detail xxx
      </Text>
      <Text fz="lg" sx={{ margin: "50px 0" }}>
        Some information about the project + updates...
      </Text>
    </>
  )
}

export default Milestones
