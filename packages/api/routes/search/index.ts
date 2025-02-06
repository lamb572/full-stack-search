import { Router } from "express"
import { searchService } from "services/search"

export const searchRouter: Router = Router()

searchRouter.get("/", async (req, res) => {
  console.log("test", req.query)
  const query = req.query as { filter: string }

  try {
    res.send(await searchService.getResults(query.filter))
  } catch (e) {
    console.error(e)
    res.status(500).send("An error occurred searching")
  }
})
