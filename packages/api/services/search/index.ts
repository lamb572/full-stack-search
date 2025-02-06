import { citiesService } from "services/cities"
import { countriesService } from "services/countires"
import { hotelsService } from "services/hotels"

async function getResults(query: string) {
  try {
    const hotels = await hotelsService.getHotels(query)
    const cities = await citiesService.getCities(query)
    const countries = await countriesService.getCountries(query)

    return {
      hotels,
      cities,
      countries,
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
