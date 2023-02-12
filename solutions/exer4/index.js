import axios from 'axios'
import figlet from 'figlet'

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
}
let randNum = getRandomInt(1, 1009)

function getRandPokemon(num) {

    let url = 'https://pokeapi.co/api/v2/pokemon/' + num
    axios.get(url)
        .then(function (response) {
            let name = response.data.name
            figlet.text(name, {
                font: '3D-ASCII'
            }, function (err, data) {
                if (err) {
                    console.log('Something went wrong...');
                    console.dir(err);
                    return;
                }
                console.log(data);
            })
        })
        .catch(function (error) {
            console.log(error)
        })
}
getRandPokemon(randNum)