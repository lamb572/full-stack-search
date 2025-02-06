import { Router } from "express"
import { citiesService } from "services/cities"

export const citiesRouter: Router = Router()

citiesRouter.get("/:id", async (req, res) => {
  try {
    const params = req.params as { id: string }
    res.send(await citiesService.getCitiesById(params.id))
  } catch (err) {
    console.error(err)
    res.status(500).send("An error occurred getting cities")
  }
})
