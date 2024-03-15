//map filter, arrow fns 

function sum(a,b){
    return a+b;
}
// this is an arrow function 
const sum1 = (a,b) => {
    return a +b;
}

const ans = sum(1,2)

console.log(ans);

//given an arrry , give me back an array in which every value is multiplied by 2
const input = [1,2,3,4,5]
// solution
const newArray = []

for(let i = 0; i< input.length ; i++){
    newArray.push(input[i]*2);
}
console.log(newArray);

//other solution 
//now map and filter 
function transform(i){
    return i*2
}
const ans2 = input.map(transform)
console.log(ans2);
//other way is to put the function itself into the map function 
const ans3 = input.map((a) =>{
    return a**3
})
console.log(ans3);

//filtering now
//Given an input array, give even values from array 

//filter is used to filter the values or the values we want according to our logic
const arr = [5,6,7,8,9,10];

const filterArr =  arr.filter((n) =>{
    return n%2 == 0 
}
)
console.log(filterArr);