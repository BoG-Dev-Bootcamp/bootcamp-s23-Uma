import mongoose from "mongoose"

// name, age, breed, date they entered the shelter, and date adopted. 

const dogSchema = new mongoose.Schema({
    _id: {
        type: mongoose.Schema.Types.ObjectId
    },
    name: {
        type: String,
        required: true
    },
    breed: {
        type: String,
        required: true
    },
    dateEntered: {
        type: Date,
        default: Date.now()
    },
    dateAdopted: {
        type: Date,
        default: null
    }
})

export default mongoose.model("Dog", dogSchema)