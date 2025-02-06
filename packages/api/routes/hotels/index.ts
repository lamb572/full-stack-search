import { Router } from "express"
import { db } from "index"
import { hotelsService } from "services/hotels"

export const hotelsRouter: Router = Router()

hotelsRouter.get("/", async (req, res) => {
  try {
    res.send(await hotelsService.getHotels())
  } catch (e) {}
})
