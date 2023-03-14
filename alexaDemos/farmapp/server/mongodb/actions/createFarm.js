import connectDB from "../index.js"
import Farm from "../models/farm.js"

export default async function createFarm(farmData) {
    await connectDB()
    try {
        console.log("INSTIDE OF TRY")
        const farm = new Farm(farmData)
        await farm.save()
    } catch (e) {
        console.log("in catch")
        throw new Error("Unable to create farm. Invalid data")
    }
}