import { db } from "index"
import { City } from "./types"
import { ObjectId } from "mongodb"

async function getCities(query: string) {
  try {
    const collection = db?.collection<City>("cities")

    const results = await collection
      .aggregate([
        {
          $search: {
            autocomplete: {
              query,
              path: "name",
              fuzzy: {
                maxEdits: 1,
                prefixLength: 1,
                maxExpansions: 256,
              },
            },
          },
        },
        {
          $addFields: {
            searchScore: {
              $meta: "searchScore",
            },
          },
        },
        {
          $sort: {
            searchScore: -1,
          },
        },
      ])
      .toArray()

    return results
  } catch (err) {
    console.error(err)
    if (err instanceof Error) {
      throw err
    }
    throw new Error("An error occurred getting cities")
  }
}

async function getCitiesById(id: string) {
  try {
    const collection = db?.collection<City>("cities")

    const result = await collection.findOne({ _id: new ObjectId(id) })
    return result
  } catch (err) {
    console.error(err)
    if (err instanceof Error) {
      throw err
    }
    throw new Error("An error occurred getting city")
  }
}

export const citiesService = { getCities, getCitiesById }
