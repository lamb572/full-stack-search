import { Router } from "express"
import { hotelsService } from "services/hotels"

export const hotelsRouter: Router = Router()

hotelsRouter.get("/:id", async (req, res) => {
  try {
    const params = req.params as { id: string }
    res.send(await hotelsService.getHotelById(params.id))
  } catch (err) {
    console.error(err)
    res.status(500).send("An error occurred getting hotels")
  }
})
