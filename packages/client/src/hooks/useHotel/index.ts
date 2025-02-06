import { fetcher } from "../fetcher"
import useSWR from "swr"
import { Hotel } from "./types"

export * from "./types"

export interface UseHotelParams {
  hotelId?: string
}

export function useHotel({ hotelId }: UseHotelParams) {
  const key = hotelId ? `/hotels/${hotelId}` : null

  const { data, error, isLoading } = useSWR<Hotel>(key, fetcher)

  return {
    hotel: data,
    isLoading,
    isError: error,
  }
}
