import { db } from "index"
import { Hotel } from "./types"
import { ObjectId } from "mongodb"

async function getHotels(query: string) {
  try {
    const collection = db?.collection<Hotel>("hotels")

    const results = await collection
      .aggregate([
        {
          $search: {
            compound: {
              should: [
                {
                  autocomplete: {
                    query,
                    path: "chain_name",
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
                    path: "hotel_name",
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
                    path: "addressline1",
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
                    path: "addressline2",
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
                    path: "zipcode",
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
                    path: "city",
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
                    path: "state",
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
    throw new Error("An error occurred getting hotels")
  }
}

async function getHotelById(id: string) {
  try {
    const collection = db?.collection<Hotel>("hotels")

    const result = await collection.findOne({ _id: new ObjectId(id) })
    return result
  } catch (err) {
    console.error(err)
    if (err instanceof Error) {
      throw err
    }
    throw new Error("An error occurred getting hotels")
  }
}

export const hotelsService = {
  getHotels,
  getHotelById,
}
