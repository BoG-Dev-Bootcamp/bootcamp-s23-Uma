import axios from "axios"

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
}

export default async function handler(req, res) {
    if (req.query) {
        const { name } = req.query
        if (name) {
            let url = 'https://pokeapi.co/api/v2/pokemon/' + name
            let pokemonData = await axios.get(url)
            return res.json(pokemonData.data)
        }
        return res.json({ "error": true })
    } else {
        let randNum = getRandomInt(1, 1009)
        let url = 'https://pokeapi.co/api/v2/pokemon/' + num
        try {
            let pokemonData = await axios.get(url)
            return res.json(pokemonData.data)
        } catch (error) {
            console.log("No Pokemon found")
        }
    }


}