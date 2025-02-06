import { Router } from "express"
import { hotelsRouter } from "./hotels"

export const rootRouter: Router = Router()

rootRouter.use("/hotels", hotelsRouter)
