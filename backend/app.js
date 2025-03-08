import express from "express"
import "dotenv/config"
import "./src/dbConnection/dbConnection.js"
import cors from "cors"
import portfolioRouter from "./src/router/PortfolioRouter.js"

const app = express()
const port = process.env.PORT || 5001
app.use(express.json())
app.use(cors())

app.use("/api/portfolio", portfolioRouter)

app.get("/",(req,res)=>{
    res.send("portfolio")
})
app.listen(port, ()=>{
    console.log(port);
    
})