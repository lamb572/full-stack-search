import { Router } from "express"
import { countriesService } from "services/countries"

export const countriesRouter: Router = Router()

countriesRouter.get("/:id", async (req, res) => {
  try {
    const params = req.params as { id: string }
    res.send(await countriesService.getCountriesById(params.id))
  } catch (err) {
    console.error(err)
    res.status(500).send("An error occurred getting countries")
  }
})
