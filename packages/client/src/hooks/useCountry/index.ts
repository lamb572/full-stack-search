import { fetcher } from "../fetcher"
import useSWR from "swr"
import { Country } from "./types"

export * from "./types"

export interface UseCountryParams {
  countryId?: string
}

export function useCountry({ countryId }: UseCountryParams) {
  const key = countryId ? `/countries/${countryId}` : null

  const { data, error, isLoading } = useSWR<Country>(key, fetcher)

  return {
    country: data,
    isLoading,
    isError: error,
  }
}
