import { connectDB, closeDB } from "./utils/db.js"
import { readDog, readDogs, createDog, updateDog, deleteDog } from "./operations.js"

await connectDB() // function that creates a connection to your db

// tests - feel free to change these or add more
const test1 = await createDog({ name: "Casey", age: 10, breed: "Pomeranian", dateEnter: Date.now() })
const test2 = await readDog({ name: "Casey" })
const test3 = await readDogs()
const test4 = await updateDog({ name: "Casey"}, {age: 11})
const test5 = await deleteDog({ name: "Casey" })


console.log(test1)
console.log(test2)
console.log(test3)
console.log(test4)
console.log(test5)

// await closeDB() // function that closes the connection to your db

