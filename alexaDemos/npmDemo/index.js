import figlet from "figlet"
const { textSync } = figlet

console.log(figlet.textSync('Halloween!', {
    font: 'Bear',
    horizontalLayout: 'default',
    verticalLayout: 'default',
    width: 150,
    whitespaceBreak: true
}));
// figlet.fonts(function (err, fonts) {
//     if (err) {
//         console.log('something went wrong...');
//         console.dir(err);
//         return;
//     }
//     console.dir(fonts);
// });