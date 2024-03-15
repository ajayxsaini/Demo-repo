//promises are just syntactical sugar, under the hood promises usually run callbacks 
//more readable way to write async call 
//can be written using only callback without using java 


//wrapping another async function

//this could lead to callback hell 
// function myOwnSetTimeout(fn , dur){
//     setTimeout(fn, dur)
// }

// myOwnSetTimeout(function(){
//     console.log("this is lit");
// }, 2000)

//this is callback hell
// setTimeout(function(){
//     console.log("why");
//     setTimeout(function(){
//         console.log("Why again");
//     }, 3000)
// }, 1001)
function myOwnSetTimeout(dur){
    let p = new Promise(function(resolve){
        //after 1 second, call resolve 
        setTimeout(resolve, 1000);
    })
    return p 
}

//async await syntax, promise chaining both of which get rid of callback hell 
const a = myOwnSetTimeout(1000)
a.then(function(){
    console.log("This is how its done");
})


//you will always use sync until these things arises
//do a network call 
//sleep/ wait for some time 
//read file 
// database call
let n = new Promise(function(resolve){
    resolve();
})
console.log(n);