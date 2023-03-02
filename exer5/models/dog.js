import mongoose from "mongoose"
//name, age, breed, date entered, date adopted
const dogSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
    },
    breed: {
        type: String,
        required: true
    },
    dateEnter: {
        type: Date,
        required: true
    },
    dateAdopt: {
        type: Date,
    }
})

export default mongoose.model("Dog", dogSchema)