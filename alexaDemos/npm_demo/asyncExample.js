import axios from "axios";

// axios.get("https://pokeapi.co/api/v2/pokemon/ditto")
//     .then(function (response) {
//         console.log(response)
//     })
//     .catch(function (error) {
//         console.log(error)
//     })

// try {
//     const response = await axios.get("https://pokeapi.co/api/v2/pokemon/ditt11o")
//     // console.log(response.data.name)
//     console.log("SUCCESS")
// } catch (error) {
//     // console.log(error)
//     console.log("ERROR WAS PRINTED")
// }

// async function getDitto() {
//     try {
//         const response = await axios.get("https://pokeapi.co/api/v2/pokemon/dittjfdkso")
//         console.log(response.data.name)
//     } catch (error) {
//         console.log(error)
//     }
// }
// getDitto()

async function getDitto() {
    const response = await axios.get("https://pokeapi.co/api/v2/pokemon/dittfdsfo")
    console.log(response.data.name)
}

try {
    await getDitto()
} catch (error) {
    console.log(error)
}


