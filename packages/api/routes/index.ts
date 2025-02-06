import { Router } from "express"
import { hotelsRouter } from "./hotels"
import { searchRouter } from "./search"
import { countriesRouter } from "./countries"
import { citiesRouter } from "./cities"

export const rootRouter: Router = Router()

rootRouter.use("/hotels", hotelsRouter)
rootRouter.use("/search", searchRouter)
rootRouter.use("/countries", countriesRouter)
rootRouter.use("/cities", citiesRouter)
