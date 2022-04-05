//***ES6 provides a new operator called spread operator that consists of three dots (...). The spread operator allows you to spread out elements of an iterable object such as an array, map, or set.
//// spread operators can be used for arrays or objects

let arr=[1,2,3,4]
console.log(arr)


// let arr2=[arr] //evabey niley basically ekta [[arr]] return kobey
let arr2=[10,...arr,5,6,7,8,9] //so thats why we use spread operator to spread elements of arr->array
console.log(arr2)

//another example of spread operator

let numbers=[1,2,3,4,5]

let max=Math.max(1,2,3,4,5)
console.log(max)//Ok

let max1=Math.max(numbers)
console.log(max1) //will give NaN as result so to solve this problem we can use spread operator

//solution using spread operator
let newMax=Math.max(...numbers) //will provide right answer
console.log(newMax)
