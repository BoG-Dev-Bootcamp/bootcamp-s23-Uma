import mongoose from "mongoose"

const farmSchema = new mongoose.Schema({
    name: String,
    products: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Product' }]
})

export default mongoose.model("Farm", farmSchema)