import mongoose from "mongoose"
import Farm from "./models/farm.js"
import Product from "./models/product.js"

const connectDB = async () => {
    try {
        await mongoose.connect(`mongodb://127.0.0.1:27017/farmDemo`)
        console.log("Sucessfully connected to the database!")
    } catch (e) {
        console.log("Failed to connect to the database :(")
    }
}

await connectDB()

const apple = new Product({name: "apple", cost: 50})
const peach = new Product({ name: "peach", cost: 100 })

await apple.save()
await peach.save()

let farm = new Farm({name: "Fazio Farms", products: []})

farm.products.push(apple, peach)
farm.save()

await farm.populate('products')
console.log(farm)