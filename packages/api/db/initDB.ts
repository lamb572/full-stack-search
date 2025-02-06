import { MongoClient } from "mongodb"
import { cities } from "./seeds/cities"
import { countries } from "./seeds/countries"
import { hotels } from "./seeds/hotels"
import "dotenv/config"

const main = async () => {
  if (!process.env.DATABASE_URL) {
    console.log("DATABASE_URL is not set")
    process.exit(1)
  }
  console.log(process.env.DATABASE_URL)
  const client = new MongoClient(process.env.DATABASE_URL)

  try {
    await client.connect()
    const db = client.db("test")
    await db.collection("cities").insertMany(cities)

    await db.collection("cities").createSearchIndex({
      definition: {
        mappings: {
          dynamic: true,
          fields: {
            name: [
              {
                type: "autocomplete",
              },
              {
                type: "token",
              },
              {
                type: "string",
              },
            ],
          },
        },
      },
    })
    await db.collection("countries").insertMany(countries)
    await db.collection("countries").createSearchIndex({
      definition: {
        mappings: {
          dynamic: true,
          fields: {
            country: [
              {
                type: "autocomplete",
              },
              {
                type: "token",
              },
              {
                type: "string",
              },
            ],
            countryisocode: [
              {
                type: "autocomplete",
              },
              {
                type: "token",
              },
              {
                type: "string",
              },
            ],
          },
        },
      },
    })

    await db.collection("hotels").insertMany(hotels)
    await db.collection("hotels").createSearchIndex({
      definition: {
        mappings: {
          dynamic: true,
          fields: {
            chain_name: [
              {
                type: "autocomplete",
              },
              {
                type: "token",
              },
              {
                type: "string",
              },
            ],
            hotel_name: [
              {
                type: "autocomplete",
              },
              {
                type: "token",
              },
              {
                type: "string",
              },
            ],
            addressline1: [
              {
                type: "autocomplete",
              },
              {
                type: "token",
              },
              {
                type: "string",
              },
            ],
            addressline2: [
              {
                type: "autocomplete",
              },
              {
                type: "token",
              },
              {
                type: "string",
              },
            ],
            zipcode: [
              {
                type: "autocomplete",
              },
              {
                type: "token",
              },
              {
                type: "string",
              },
            ],
            city: [
              {
                type: "autocomplete",
              },
              {
                type: "token",
              },
              {
                type: "string",
              },
            ],
            state: [
              {
                type: "autocomplete",
              },
              {
                type: "token",
              },
              {
                type: "string",
              },
            ],
            country: [
              {
                type: "autocomplete",
              },
              {
                type: "token",
              },
              {
                type: "string",
              },
            ],
            countryisocode: [
              {
                type: "autocomplete",
              },
              {
                type: "token",
              },
              {
                type: "string",
              },
            ],
          },
        },
      },
    })
  } catch (err) {
    console.log(err)
    process.exit(1)
  } finally {
    await client.close()
  }
  process.exit(0)
}

main()
