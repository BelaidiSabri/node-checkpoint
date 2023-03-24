const http =require('http')
const fs =require('fs')
const PW_Generator = require('./password-generator')
const PORT =3000
//task 2 create server on port 3000 with a html h1
http.createServer((req,res)=>{
    res.end('<h1>Hello Node!!!!</h1>\n')
}).listen(PORT)
//task 3 create welcome.txt file
fs.writeFile('welcome.txt','hello node',(err)=>{if (err) throw err
console.log('welcome.txt created') })
//task 3 read the welcome.txt file
fs.readFile('./welcome.txt', 'utf8',(err,data)=>{
    if (err) {console.log(err)};
    console.log(data)
})
//task 4 generate 3 passwords 
console.log(PW_Generator); 
