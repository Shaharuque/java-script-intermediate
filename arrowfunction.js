//Arrow function, multiple parameter, function body
//ES6 arrow functions provide you with an alternative way to write a shorter syntax compared to the function expression.

//way-1
// function add(num1,num2){
//     return num1+num2
// }

// console.log(add(5,5))

//way-2(arrow function) -->anonymous function

/*let add=function(num1,num2){
    return num1+num2
}
console.log(add(5,5))*/

//way-3(call back function)
//here without return statement because of single line operation
let add=(num1,num2)=> num1+num2

//Use return for multi line
let add1=(num1,num2)=>{
    let sum=num1+num2
    return sum
}

//parameter only one holey bracket use korar kono dorkar nai
let multiply=num=>num*5  

//no parameter function
let returnName=()=>'Brandon King'

console.log(add(5,5))
console.log(add1(10,12))
console.log(multiply(5))
console.log(returnName())