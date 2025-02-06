import cors from "cors"
import initMongoConnection from "db/initConnection"
import dotenv from "dotenv"
import express from "express"
import { Db } from "mongodb"
import { rootRouter } from "routes"

dotenv.config()

if (process.env.NODE_ENV !== "production" && !process.env.DATABASE_URL) {
  await import("./db/startAndSeedMemoryDB")
}

const PORT = process.env.PORT || 3001

const app = express()

const mongoClient = await initMongoConnection()

const db: Db = mongoClient.db("test")

app.use(cors())
app.use(express.json())

app.use(rootRouter)

app.listen(PORT, () => {
  console.log(`API Server Started at ${PORT}`)
})

app.on("close", (err) => {
  mongoClient.close()
})

export { app, db }
