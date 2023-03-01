import { connectDB, closeDB } from "./utils/db.js"
import { readDog, readDogs, createDog, updateDog, deleteDog } from "./operations.js"

connectDB() // function that creates a connection to your db

// tests - feel free to change these or add more
const test1 = createDog({ name: "Casey", age: 10, breed: "Pomeranian", dateEnter: Date.now() })
const test2 = readDog({ name: "Casey" })
const test3 = readDogs()
const test4 = updateDog({ name: "Casey"}, {age: 11})
const test5 = deleteDog({ name: "Casey" })


console.log(test1)
console.log(test2)
console.log(test3)
console.log(test4)
console.log(test5)

closeDB() // function that closes the connection to your db

