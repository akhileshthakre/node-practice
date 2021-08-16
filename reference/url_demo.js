const url  = require('url')
const { compileFunction } = require('vm')

const myUrl = new URL('http://mywebsite.com:8080/hello.html?id=100&status=active')

//Serialized URL
console.log(myUrl.href)
console.log(myUrl.href.toString())

//Getting host (root domain)
console.log(myUrl.host)

//Host name (does ot get port)
console.log(myUrl.hostname)

//Pathname 
console.log(myUrl.pathname)

//Serialized Query
console.log(myUrl.search)

//Params Object
console.log(myUrl.searchParams)

//Add paramns
myUrl.searchParams.append('abc','123')
console.log(myUrl.searchParams)

//Loop through params
myUrl.searchParams.forEach((value,name) => console.log(`${name}: ${value}`))