import mongoose from "mongoose"

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    cost: {
        type: Number,
        required: true
    }
})

export default mongoose.models?.Product || mongoose.model("Product", productSchema)