const fs = require('fs');

const path = require('path');

const dirPath = path.join(__dirname, 'files');

// for (let i = 0; i < 5 ;i++) {
//     fs.writeFileSync(dirPath + 'newfile' +i + '.txt',"simple text file")
// }

fs.readdir(dirPath, (err,file) => {
    console.log(file)
})