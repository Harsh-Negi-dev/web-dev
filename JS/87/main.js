const fs = require("fs");
// console.log(fs);
console.log("starting");
fs.writeFile("harsh2.txt", "harsh is a good boy2", ()=>{
    console.log("done");
    fs.readFile("harsh2.txt", (error, data)=>{
        console.log(error, data.toString());
    })
});
fs.appendFile("harsh2.txt", ". he is nice", (error, data)=>{
    console.log(data);
})
console.log("ending");