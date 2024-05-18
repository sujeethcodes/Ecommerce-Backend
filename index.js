const express = require("express")
const cors = require("cors")
const dotenv = require("dotenv")

const app = express()
const Routes = require("./routes/route.js")
const Connection = require("./config/db.js")

const PORT = process.env.PORT || 5000

dotenv.config();

app.use(express.json())
app.use(cors())

Connection()

app.use('/', Routes);

app.listen(PORT, () => {
    console.log(`Server started at port no. ${PORT}`)
})