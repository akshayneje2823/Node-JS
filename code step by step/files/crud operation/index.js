const fs = require('fs');
const path = require('path');
const dirPath = path.join(__dirname)
const filePath = `${dirPath}/Apple.py`

// Create File
// fs.writeFileSync(filePath,"This is an apple")

// Read File
// fs.readFile(filePath,'utf8',(err,item)=>{
//     console.log(item)
// })


// Update File
// fs.appendFile(filePath,"file Created using Node JS",(err,)=>{
//     if(!err){
//         console.log('Updated....')
//     }
// })


// // Rename File Name
// fs.rename(filePath,`${dirPath}/dummy.txt`,(err)=>{
//     if(!err){
//         console.log('file updated')
//     }
// })


// Delete File
fs.unlinkSync(`${dirPath}/dummy.txt`)

console.log(' temp memory location nothing but buffer')