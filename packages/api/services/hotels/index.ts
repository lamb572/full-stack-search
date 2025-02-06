import { db } from "index"
import { Hotel } from "./types"

function getHotels(query: string) {
  const collection = db?.collection<Hotel>("hotels")

  return collection
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
}

export const hotelsService = {
  getHotels,
}
