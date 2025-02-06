import { MongoClient } from "mongodb"

export default async function initMongoConnection() {
  if (!process.env.DATABASE_URL) throw new Error("DATABASE_URL is not set")
  const DATABASE_URL = process.env.DATABASE_URL
  const client = new MongoClient(DATABASE_URL)
  try {
    const connection = await client.connect()
    return connection
  } catch (err) {
    console.error(err)
    if (err instanceof Error) {
      throw err
    }
    throw new Error("Failed to connect to MongoDB")
  }
}
