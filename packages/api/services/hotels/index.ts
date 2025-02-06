import { db } from "index"

function getHotels() {
  const collection = db?.collection("hotels")

  return collection?.find().toArray()
}

export const hotelsService = {
  getHotels,
}
