import React, { useEffect, useState } from "react"
import {
  Button,
  Checkbox,
  Group,
  Select,
  Text,
  TextInput,
  Textarea,
  Title,
  Image,
  useMantineTheme
} from "@mantine/core"
import { IMAGE_MIME_TYPE } from "@mantine/dropzone"

const categories = [
  {
    value: "Community Events and Celebrations",
    label: "Community Events and Celebrations"
  },
  {
    value: "Education and Skills Development",
    label: "Education and Skills Development"
  },
  {
    value: "Health and Well-being",
    label: "Health and Well-being"
  },
  {
    value: "Environmental Sustainability",
    label: "Environmental Sustainability"
  },
  {
    value: "Community Infrastructure and Development",
    label: "Community Infrastructure and Development"
  },
  {
    value: "Social Services and Welfare",
    label: "Social Services and Welfare"
  }
]

const getUserData = async () => {
  try {
    const response = await fetch("/api/user")
    if (response.ok) {
      const userData = await response.json()
      return userData.user
    } else {
      console.log("Failed to retrieve user data")
      return null
    }
  } catch (error) {
    console.error("Error:", error)
    return null
  }
}

function SubmitProposal() {
  const [droppedFile] = useState()
  const [imageUrl, setImageUrl] = useState()
  const [isCheckboxChecked, setIsCheckboxChecked] = useState(false)
  const [isFormValid, setIsFormValid] = useState(false)
  const [proposalName, setProposalName] = useState("")
  const [proposalCategory, setProposalCategory] = useState("")
  const [proposalDescription, setProposalDescription] = useState("")

  const theme = useMantineTheme()

  useEffect(() => {
    if (droppedFile) {
      setImageUrl(
        URL.createObjectURL(new Blob(droppedFile, { type: IMAGE_MIME_TYPE }))
      )
    }
  }, [droppedFile])

  useEffect(() => {
    // Validate the form
    const isNameValid = !!proposalName.trim()
    const isCategoryValid = !!proposalCategory
    const isDescriptionValid = !!proposalDescription.trim()
    const isFormFilled =
      isNameValid && isCategoryValid && isDescriptionValid && isCheckboxChecked
    setIsFormValid(isFormFilled)
  }, [
    proposalName,
    proposalCategory,
    proposalDescription,
    droppedFile,
    isCheckboxChecked
  ])

  const handleCheckboxChange = () => {
    setIsCheckboxChecked(!isCheckboxChecked)
  }

  const handleUrlChange = (event) => {
    const url = event.target.value
    setImageUrl(url)
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    try {
      const userAddress = await getUserData() // Await the getUserData function call
      const formData = {
        userAddress,
        proposalName,
        proposalCategory,
        proposalDescription,
        imageUrl
      }
      console.log(formData)

      // Send the form data to the server
      const response = await fetch("/submitProposal", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      })

      if (response.ok) {
        console.log("200 Post successful")
      } else {
        console.log("500 server error")
      }
    } catch (error) {
      console.error("Error:", error)
    }
  }

  return (
    <div>
      <Title sx={{ color: theme.colors.teal[5] }}>Submit a Proposal</Title>
      <div style={{ margin: "40px 0" }}>
        <Group spacing="xl" grow sx={{ marginBottom: "40px" }}>
          <TextInput
            label="Name of Proposal"
            size="md"
            withAsterisk
            value={proposalName}
            onChange={(event) => setProposalName(event.target.value)}
          />
          <Select
            label="Proposal Category"
            size="md"
            data={categories}
            withAsterisk
            value={proposalCategory}
            onChange={(value) => setProposalCategory(value)}
          />
        </Group>
        <Textarea
          label="Description"
          size="md"
          minRows={3}
          autosize
          withAsterisk
          value={proposalDescription}
          onChange={(event) => setProposalDescription(event.target.value)}
          sx={{ marginBottom: "40px" }}
        />
        <div>
          <TextInput
            label="Image URL"
            size="md"
            value={imageUrl}
            onChange={handleUrlChange}
            sx={{ marginBottom: "40px" }}
          />

          {imageUrl && (
            <>
              <Text sx={{ color: "#C1C2C5", fontWeight: 500 }}>
                Image preview:
              </Text>
              <Image
                src={imageUrl}
                imageProps={{ onLoad: () => URL.revokeObjectURL(imageUrl) }}
                sx={{ maxWidth: "60%", marginBottom: "40px" }}
              />
            </>
          )}
        </div>
        <Checkbox
          label="I understand that my proposal must reach a certain threshold of votes before the community will proceed with it"
          size="md"
          sx={{ marginBottom: "40px" }}
          checked={isCheckboxChecked}
          onChange={handleCheckboxChange}
        />

        <Button size="md" disabled={!isFormValid} onClick={handleSubmit}>
          Submit proposal
        </Button>
      </div>
    </div>
  )
}

export default SubmitProposal
