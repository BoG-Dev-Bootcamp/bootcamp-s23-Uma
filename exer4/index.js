import figlet from "figlet";
import axios from "axios";

const { textSync } = figlet;

const num = Math.floor(Math.random() * 1008 + 1);
const link = "https://pokeapi.co/api/v2/pokemon/";
axios.get(link.concat(num.toString()))
    .then(function (response) {
        let name = response.data.name;
        console.log(figlet.textSync(name, {
            font: 'Ghost',
            horizontalLayout: 'default',
            verticalLayout: 'default',
            width: 80,
            whitespaceBreak: true
        }));
    })
    .catch(function (error) {
        console.log(error)
    })