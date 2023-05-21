import React, { useEffect, useState } from "react"
import {
  Button,
  Checkbox,
  Group,
  rem,
  Select,
  Text,
  TextInput,
  Textarea,
  Title,
  Image,
  useMantineTheme
} from "@mantine/core"
import { Dropzone, IMAGE_MIME_TYPE } from "@mantine/dropzone"
import { Upload, Photo, X } from "tabler-icons-react"

const categories = [
  {
    value: "wikispaces.com",
    label: "Recycling"
  },
  {
    value: "rakuten.co.jp",
    label: "OCTINOXATE, TITANIUM DIOXIDE, and ZINC OXIDE"
  },
  {
    value: "reverbnation.com",
    label: "diazepam"
  },
  {
    value: "skype.com",
    label: "citalopram hydrobromide"
  },
  {
    value: "clickbank.net",
    label: "Avobenzone, Homosalate, Octisalate, Octocrylene, Oxybenzone"
  }
]

function SubmitProposal() {
  const [droppedFile, setDroppedFiles] = useState()
  const [imageUrl, setImageUrl] = useState()

  const theme = useMantineTheme()

  useEffect(() => {
    if (droppedFile) {
      setImageUrl(
        URL.createObjectURL(new Blob(droppedFile, { type: IMAGE_MIME_TYPE }))
      )
    }
  }, [droppedFile])

  return (
    <div>
      <Title sx={{ color: theme.colors.teal[5] }}>Submit a Proposal</Title>
      <div style={{ margin: "40px 0" }}>
        <Group spacing="xl" grow sx={{ marginBottom: "40px" }}>
          <TextInput label="Name of Proposal" size="md" withAsterisk />
          <Select
            label="Proposal Category"
            size="md"
            data={categories}
            withAsterisk
          />
        </Group>
        <Textarea
          label="Description"
          size="md"
          minRows={3}
          autosize
          withAsterisk
          sx={{ marginBottom: "40px" }}
        />
        <Text sx={{ color: "#C1C2C5", fontWeight: 500 }}>Upload an image</Text>
        <Dropzone
          onDrop={(file) => {
            console.log("accepted files", file)
            setDroppedFiles(file)
          }}
          onReject={(files) => console.log("rejected files", files)}
          maxSize={3 * 1024 ** 2}
          accept={IMAGE_MIME_TYPE}
          sx={{ width: "600px", maxWidth: "100%", marginBottom: "40px" }}
        >
          <Group
            position="center"
            spacing="xl"
            style={{ minHeight: rem(220), pointerEvents: "none" }}
          >
            <Dropzone.Accept>
              <Upload size={40} strokeWidth={1.5} color={"grey"} />
            </Dropzone.Accept>
            <Dropzone.Reject>
              <X size={40} strokeWidth={1.5} color={"grey"} />
            </Dropzone.Reject>
            <Dropzone.Idle>
              <Photo size={40} strokeWidth={1.5} color={"grey"} />
            </Dropzone.Idle>

            <div>
              <Text size="xl" inline>
                Drag images here or click to select files
              </Text>
              <Text size="sm" color="dimmed" inline mt={7}>
                Attach as many files as you like, each file should not exceed
                5mb
              </Text>
            </div>
          </Group>
        </Dropzone>
        {droppedFile && (
          <>
            <Text sx={{ color: "#C1C2C5", fontWeight: 500 }}>
              Image preview:
            </Text>
            <Image
              src={imageUrl}
              imageProps={{ onLoad: () => URL.revokeObjectURL(imageUrl) }}
              sx={{ maxWidth: "60%" }}
            />
          </>
        )}
      </div>
      <Checkbox
        label="I understand that my proposal must reach X votes before the community will proceed with it"
        size="md"
        sx={{ marginBottom: "40px" }}
      />

      <Button size="md">Submit proposal</Button>
    </div>
  )
}

export default SubmitProposal
