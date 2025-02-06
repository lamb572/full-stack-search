import { fetcher } from "../fetcher"
import useSWR from "swr"

export interface Hotel {
  _id: string
  chain_name: string
  hotel_name: string
  city: string
  country: string
}

export interface UseHotelsParams {}

export function useHotels() {
  const { data, error, isLoading } = useSWR(`/hotels`, fetcher)

  return {
    hotels: data,
    isLoading,
    isError: error,
  }
}
