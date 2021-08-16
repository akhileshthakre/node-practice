const fs = require('fs')
const path = require('path')

//Create a folder
// fs.mkdir(path.join(__dirname, '/test'),{}, err => {
//     if(err) throw err
//     console.log('Folder Created...')
// })

//Create and write to file
// fs.writeFile(path.join(__dirname, '/test','hello.txt'),'Hello World', err => {
//     if(err) throw err
//     console.log('File written to...')

//     //Append to the file
//     fs.appendFile(path.join(__dirname, '/test','hello.txt'),' I appended the rtext to File', err => {
//         if(err) throw err
//         console.log('File append to...')
//     })
// })

//Read the File
// fs.readFile(path.join(__dirname, '/test','hello.txt'),'utf8', (err,data) => {
//     if(err) throw err
//     console.log(data)
// })

//Rename a file
fs.rename(path.join(__dirname, '/test','hello.txt'),path.join(__dirname, '/test','hello_renamed.txt'), (err,data) => {
    if(err) throw err
    console.log("File Renamed")
})