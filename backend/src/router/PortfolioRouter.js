import express from "express"
import { addPortfolio, deletePortfolio, getPortfolio, updatePortfolio } from "../controller/Controller.js"

const portfolioRouter = express.Router()

portfolioRouter.get("/", getPortfolio)
portfolioRouter.post("/", addPortfolio)
portfolioRouter.delete("/:id", deletePortfolio)
portfolioRouter.put("/:id", updatePortfolio)

export default portfolioRouter
