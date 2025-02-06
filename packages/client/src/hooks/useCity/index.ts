import { fetcher } from "../fetcher"
import useSWR from "swr"
import { City } from "./types"

export * from "./types"

export interface UseCityParams {
  cityId?: string
}

export function useCity({ cityId }: UseCityParams) {
  const key = cityId ? `/cities/${cityId}` : null

  const { data, error, isLoading } = useSWR<City>(key, fetcher)

  return {
    city: data,
    isLoading,
    isError: error,
  }
}
