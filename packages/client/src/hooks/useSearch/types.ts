import { City } from "../useCities/types"
import { Country } from "../useCountries/types"
import { Hotel } from "../useHotels"

export interface SearchResults {
  hotels: Hotel[]
  cities: City[]
  countries: Country[]
}

export interface GetSearchResultsParams {
  filter: string
}
