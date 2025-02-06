import { hotelsService } from "services/hotels"

async function getResults(query: string) {
  try {
    const hotels = await hotelsService.getHotels(query)

    console.log("hotels", hotels)
    return {
      hotels,
    }
  } catch (err) {
    console.error(err)
    if (err instanceof Error) {
      throw err
    }
    throw new Error("An error occurred searching")
  }
}

export const searchService = { getResults }
