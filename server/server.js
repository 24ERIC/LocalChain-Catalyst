const express = require("express")
const cors = require("cors")
const sqlite3 = require("sqlite3").verbose()
const db = new sqlite3.Database("database.db", (error) => {
  if (error) console.log("error")
  else console.log("database running")
})
db.run(`
    CREATE TABLE IF NOT EXISTS proposals (
                                             userAddress TEXT,
                                             proposalName TEXT,
                                             proposalCategory TEXT,
                                             proposalDescription TEXT,
                                             imageUrl TEXT,
                                             votes INTEGER,
                                             PRIMARY KEY (userAddress, proposalName)
        )
`)
const fs = require("fs")
const path = require("path")
const axios = require("axios")

async function downloadImage(url) {
  try {
    const directoryPath = path.join(__dirname, "../Proposals/Images")
    const filename = path.basename(url)
    const filepath = path.join(directoryPath, filename)

    // Ensure the Images directory exists
    if (!fs.existsSync(directoryPath)) {
      fs.mkdirSync(directoryPath, { recursive: true })
    }

    const writer = fs.createWriteStream(filepath)
    const response = await axios({
      url,
      method: "GET",
      responseType: "stream"
    })

    response.data.pipe(writer)

    return new Promise((resolve, reject) => {
      writer.on("finish", () => resolve({ filename }))
      writer.on("error", reject)
    })
  } catch (error) {
    console.error("Error downloading image:", error)
    throw error
  }
}
const Accounts = require("web3-eth-accounts")
const accounts = new Accounts()
const web3 = require("web3")
const session = require("express-session")
const app = express()
const corsOptions = {
  origin: "http://localhost:3000",
  credentials: true // enable passing cookies across different domains
}

app.use(
  session({
    secret: "your-secret-key",
    resave: false,
    saveUninitialized: true,
    secure: true,
    httpOnly: true,
    sameSite: "strict",
    rolling: true,
    cookie: {
      // Session expires after 1 hour of inactivity
      maxAge: 60 * 60 * 1000
      // ...
    }
  })
)
app.use(cors(corsOptions))
app.use(express.json())

// Serve static files from the build folder
app.use(express.static(path.join(__dirname, "../build")))

app.get("/", (req, res) => {
  /*    const indexPath = path.join(__dirname, '../public/index.html');
        res.sendFile(indexPath);*/
  res.sendFile(path.join(__dirname, "../build", "index.html"))
})

const ethUtil = require("ethereumjs-util")

app.post("/api/auth", async (req, res) => {
  // Extract user data from the request body
  const { provider, userAddress, signature } = req.body

  if (provider === "metamask") {
    // Verify the signature
    const message = "Authentication message"
    try {
      // Recover the address from the signature
      const recoveredAddress = accounts.recover(message, signature)

      // Compare the recovered address with the user's provided address
      if (recoveredAddress.toLowerCase() === userAddress.toLowerCase()) {
        // Authentication successful
        // Store the wallet address in the user's session
        req.session.walletAddress = userAddress

        res.send({ message: "Metamask Authentication successful" })
      } else {
        res.status(401).send({
          message: "Metamask Authentication failed: Invalid signature"
        })
      }
    } catch (error) {
      console.log(error)
      res.status(400).send({ message: "Metamask Authentication failed" })
    }
  } else {
    // Authentication failed
    res.status(401).send({ error: "Authentication failed. Invalid provider" })
  }
})

app.get("/api/user", (req, res) => {
  // Retrieve the wallet address from the user's session
  const walletAddress = req.session.walletAddress

  if (!walletAddress) {
    // No wallet address found in the session
    res.status(401).send({ error: "User not authenticated" })
    return
  }

  // Respond with user information
  res.send({ user: walletAddress })
})

app.get("/proposals", async (req, res) => {
  console.log(req.body)

  db.all(`SELECT * FROM "proposals";`, function (error, rows) {
    if (error) {
      console.error("Error getting proposals:", error)
    } else {
      return res.status(200).json({ proposals: rows })
    }
  })
})

app.post("/submitProposal", async (req, res) => {
  // Check if required fields are empty
  const { userAddress, proposalName, proposalCategory, proposalDescription } =
    req.body
  if (
    !userAddress ||
    !proposalName ||
    !proposalCategory ||
    !proposalDescription
  ) {
    return res
      .status(400)
      .json({ status: "Failed", error: "Missing required fields" })
  }

  let imageUrl = req.imageUrl || null

  if (imageUrl !== null) {
    try {
      const filepath = path.join(__dirname, "../Proposals/Images/")
      await downloadImage(imageUrl, filepath)
        .then(({ filename }) => {
          imageUrl = filename
          console.log(filepath)
          console.log(filename)
          // Further processing or response handling with the updated imageUrl
          // ...
        })
        .catch((error) => {
          // Handle any errors that occur during image download
          console.error("Error downloading image:", error)
        })
    } catch (error) {
      console.error("Error downloading image:", error)
      return res
        .status(500)
        .json({ status: "Failed", error: "Image download failed" })
    }
  }

  // Create a new proposal object
  const proposal = {
    userAddress,
    proposalName,
    proposalCategory,
    proposalDescription,
    imageUrl
  }

  db.run(
    `
      INSERT INTO proposals (
          userAddress,
          proposalName,
          proposalCategory,
          proposalDescription,
          imageUrl,
          votes
      )
      VALUES (?, ?, ?, ?, ?, ?)
  `,
    [
      proposal.userAddress,
      proposal.proposalName,
      proposal.proposalCategory,
      proposal.proposalDescription,
      proposal.imageUrl,
      0
    ],
    function (error) {
      if (error) {
        console.error("Error inserting proposal:", error)
      } else {
        console.log("Proposal inserted successfully")
      }
    }
  )

  console.log(proposal)
  console.log("Proposal saved successfully")
  return res.status(200).json({ status: "Proposal received" })
})

app.listen(8000, () => {
  console.log("Server listening on port 8000")
})
