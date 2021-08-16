const http = require('http')
const path = require('path')
const fs = require('fs')

const server = http.createServer((req,res) => {
    console.log(req.url)
    //Long way
    // if(req.url === '/') {
    //     fs.readFile(path.join(__dirname,'public','index.html'), (err,content) => {
    //         if(err) throw err
    //         res.writeHead(200, {'Content-Type': 'text/html'})
    //         res.end(content)
    //     })
    // }

    // if(req.url === '/api/users') {
    //     const users = [
    //         {name: 'Akhilesh Thakre', age:25, status:"In Love with Manideepa"},
    //         {name:'Manideepa Bhattacharjee',age:25, status:"Occupied by Akhilesh :)"}
    //     ]
    //     res.writeHead(200, {'Content-Type': 'application/json'})
    //     res.end(JSON.stringify(users))
    // }

    //Effiecint way
    //Build filepath
    let filePath = path.join(__dirname,'public', req.url === '/' ? 'index.html': req.url)

    //Exension of the file
    let extname = path.extname(filePath)

    //Initial content type
    let contentType = 'text/html'

    //Check ext and set content type
    switch (extname) {
        case ".js":
          contentType = "text/javascript";
          break;
        case ".css":
          contentType = "text/css";
          break;
        case ".json":
          contentType = "application/json";
          break;
        case ".png":
          contentType = "image/png";
          break;
        case ".jpg":
          contentType = "image/jpg";
          break;
    }

    //Read File
    fs.readFile(filePath,(err,content) => {
        if(err){
            if(err.code == 'ENOENT'){
                //Page not found
                fs.readFile(path.join(__dirname,'public','404.html'), (err,content) =>{
                    res.writeHead(200, {'Content-Type': 'text/html'})
                    res.end(content,'utf8')
                })
            }
            else {
                //Some Server Error
                res.writeHead(500)
                res.end(`Server Error: ${err.code}`)
            }
        }else {
            //Sucess
            res.writeHead(200, {'Content-Type': contentType})
            res.end(content,'utf8')
        }
    })

})

const PORT = process.env.PORT || 5000
server.listen(PORT, () => {
    console.log(`Server Running on Port ${PORT}`)
})