//creating an http server 
// express
// node default library => no 

const express = require("express")

//creating an instance of express to use it further 
const app = express();

// function sum(n){
//     let ans = 0;
//     for (let i = 1; i<=n;  i++){
//         ans = ans + i;
//     }
//     return ans 
// }

//this is the route
//request and response 
app.get("/" , function(req, res){
    //any request that comes, send Hi there.
    // res.send("Hi there ")
    // const n = req.query.n
    // const ans = sum(n);
    // res.send("Hi your answer is " +ans)
    
})
//any requests made will be shown on the port : 3000
app.listen(3001)