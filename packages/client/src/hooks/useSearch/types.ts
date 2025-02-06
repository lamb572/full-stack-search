import { City } from "../useCity/types"
import { Country } from "../useCountry/types"
import { Hotel } from "../useHotel"

export interface SearchResults {
  hotels: Hotel[]
  cities: City[]
  countries: Country[]
}

export interface GetSearchResultsParams {
  filter: string
}
