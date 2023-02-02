# Exercise 4 - Package Party

## Description
Practice using npm packages, writing async functions, and fetching data from APIs. 

## Submission
Collect points for this exercise by uploading your functioning node project to GitHub.
- Due Date: **2-7-23**

## Instructions
This exercise involves using the figlet and axios packages to fetch a random Pokemon from the PokeAPI and print its name in ASCII characters. 

1. Make sure to **Sync Fork** on GitHub, so your repo is up-to-date and has a `exer4` folder
2. Pull the new changes onto your local repo (`git pull origin main`)
3. Open the `exer4/` folder inside VS Code
4. You will see an `index.js` file. This is where you will write your code.
5. Start by initializing an npm project using `npm init`
6. Fill in the prompts and make sure your entry point is `index.js`
7. Install figlet from npm
8. Install axios from npm
9. Start coding!
10. You can run your code with the command `node index.js`

## Hints
- Use the `axios.get()` method to fetch an api endpoint
- The url you are going to fetch will be `https://pokeapi.co/api/v2/pokemon/:number`
	- `:number` should be replaced with a random number between 1 and 1008 inclusive (this is the number of Pokemon there are) each time you run your code
	- You may find this [link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random) useful for generating random numbers in JS
- Remember `axios.get()` is **asynchronous**. Make sure to use promises!
- To get the name of the Pokemon from the `response` object do this `let name = response.data.name` after you fetch the data.
