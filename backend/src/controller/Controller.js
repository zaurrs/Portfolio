import Portfolio from "../model/Model.js"


export const addPortfolio = async (req, res)=>{
    try {
    const newPortfolio =new Portfolio(req.body)
    await newPortfolio.save()

    res.status(200).send(newPortfolio)
        
    } catch (error) {
        res.status(500).send(error)
    }
}




export const getPortfolio = async (req, res)=>{
    try {
    const newPortfolio =await Portfolio.find()
    if(!newPortfolio){
    res.status(400).send("client Error")

    }

    res.status(200).send(newPortfolio)
        
    } catch (error) {
        res.status(500).send(error)
    }
}


export const deletePortfolio = async (req, res)=>{
    const {id} = req.params
    try {
    const deleteedPrtfolio = await Portfolio.findByIdAndDelete(id)

    if (!deleteedPrtfolio) {
        res.status(400).send("client error")

    }
    res.status(200).send(deleteedPrtfolio)

        
    } catch (error) {
        res.status(500).send(error)
        
    }
}


export const updatePortfolio = async (req, res)=>{
    const {id} = req.params
    try {
        const updateedPortfolio = await Portfolio.findByIdAndUpdate(id, req.body)
        if (!updateedPortfolio) {
            return res.status(400).send("Client Error: Portfolio not found");
        }
        res.status(200).send(updateedPortfolio);
    } catch (error) {a
        res.status(500).send(error)
        
    }
}