// promise in fs is used to get rid of callback hell
import fs from "fs/promises";
let a= await fs.readFile("jyoti.txt");
// we don't need async function for using await because it is inside a module
console.log(a.toString())
let b=await fs.writeFile("jyoti.txt","i am learning node js today");
let c=await fs.readFile("jyoti.txt");
console.log(c.toString())
let d=await fs.appendFile("jyoti.txt","\n\nand i will learn tommorow express js");
console.log(fs.readFile("jyoti.txt")); 