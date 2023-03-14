import mongoose from "mongoose"

const farmSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    products: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Product' }]
})

export default mongoose.models?.Farm || mongoose.model("Farm", farmSchema)