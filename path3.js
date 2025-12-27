// its another module in node.js
// its helps us to work with file and directory paths
import path from "path"
let mypath="C:\\Users\\tiwar\\Desktop\\fs\\jyoti.txt>";
// console.log(path)
console.log(path.extname(mypath))
// extname returns file extension like txt etc
console.log(path.dirname(mypath))
// returns directory name of the path
console.log(path.basename(mypath))
// return last portion of path or file name of path
console.log(path.join("c:/","coding\\jyoti.txt"));
// used to join path