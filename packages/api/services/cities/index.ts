import { db } from "index"
import { City } from "./types"

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

export const citiesService = { getCities }
