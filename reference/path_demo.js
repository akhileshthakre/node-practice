const path = require('path')

///Basename
console.log(path.basename(__filename))

//Directory name
console.log(path.dirname(__filename))

//File extensions
console.log(path.extname(__filename))

//Create path object
console.log(path.parse(__filename))

//Concatenanet Path
console.log(path.join(__dirname, 'test','hello.html'))