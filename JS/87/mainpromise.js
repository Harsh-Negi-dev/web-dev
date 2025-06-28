import fs from "fs/promises"
let a = await fs.readFile("harsh.txt");
let b = await fs.writeFile("harsh.txt", "\n \n this is an amazing promise");
console.log(a.toString(), b);