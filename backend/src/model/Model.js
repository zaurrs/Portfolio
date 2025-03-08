import mongoose from "mongoose";

const portfolioSchema = new mongoose.Schema({
    section: {type:String, required:true},
    text: {type:String, required:true}
}, {collection:"Zaur", timestamps:true})

const Portfolio = mongoose.model("Zaur", portfolioSchema)
export default Portfolio