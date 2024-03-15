//importing express
const express = require('express')
const app = express()
const port = 3000

//fs.readFile("path", "utf-8, , ()")
//fs -> filesystem - read files on system, write to files on system 
app.get("/route-handler", function(res, res){
  //headers, body, query parameters
  //do machine learning model 
  res.json({
    name: "ajay", 
    age: 21
  })
})



app.get('/', function(req, res){
  res.send('Hello World!')
})

app.listen(port, function(){
  console.log(`Example app listening on port ${port}`)
})