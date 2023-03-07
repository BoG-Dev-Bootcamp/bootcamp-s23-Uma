import mongoose from "mongoose"

const productSchema = new mongoose.Schema({
    name: String,
    cost: Number
})

export default mongoose.model("Product", productSchema)