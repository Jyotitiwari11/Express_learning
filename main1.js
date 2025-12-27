// fs->stands for file system
// fs module contain a number of interfaces
// fs module is used in node js to perform standard file management operations 
// it will not work if type =module
// fs->read files,write files,delete file,create or delete files etc;
const fs=require('fs');
// const fs=require('fs/promises'); 
// in common js by require
// console.log(fs)
console.log("start");
// fs.writeFileSync("jyoti.txt","I am learning node js");
// first writefilesync run than do other work but js supports asyncronous behaviour but
//  fs .write is asyncrounous
fs.writeFile("jyoti2.txt","i am learning today",()=>{
    console.log("done");
    // read file is used for reading files
    fs.readFile("jyoti2.txt",(error,data)=>{
        console.log(error,data.toString());

    })
})
console.log("ending");   
fs.readFile("jyoti2.txt",(error,da)=>{
    console.log(da.toString());
});
fs.appendFile("jyoti.txt","hello there",(e,d)=>{
    console.log("appended");
})