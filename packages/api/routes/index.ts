import { Router } from "express"
import { hotelsRouter } from "./hotels"
import { searchRouter } from "./search"

export const rootRouter: Router = Router()

rootRouter.use("/hotels", hotelsRouter)
rootRouter.use("/search", searchRouter)
