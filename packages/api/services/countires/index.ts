import { db } from "index"
import { Country } from "./types"

async function getCountries(query: string) {
  try {
    const collection = db?.collection<Country>("countries")

    const results = await collection
      .aggregate([
        {
          $search: {
            compound: {
              should: [
                {
                  autocomplete: {
                    query,
                    path: "country",
                    fuzzy: {
                      maxEdits: 1,
                      prefixLength: 1,
                      maxExpansions: 256,
                    },
                  },
                },
                {
                  autocomplete: {
                    query,
                    path: "countryisocode",
                    fuzzy: {
                      maxEdits: 1,
                      prefixLength: 1,
                      maxExpansions: 256,
                    },
                  },
                },
              ],
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
    throw new Error("An error occurred getting countries")
  }
}

export const countriesService = { getCountries }
