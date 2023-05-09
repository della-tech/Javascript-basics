//Assignment 1:
// Create a array called arrMax and that array should accept an array of numbers.
// Return the largest number in the array.
// Hint: Use Arrow function and Array.forEach method
let arrMax=[2,11,8,9,1];
var largest=0;
arrMax.forEach(
    (element,index)=>{
        if(element>largest)
        largest=element;
    }
)
console.log(largest);

// Assignment 2:
// let list=[1,2,3,4,5,6,7,8,9,10];
// Use the map() function with arrow notation => to multiply each number by 10 and return the result.
let list=[1,2,3,4,5,6,7,8,9,10];
let newList=[];
newList=list.map(
    (element,index)=>{
        return element*10;
    }
)
console.log(list,newList);

// Assignment 3:
// Write an arrow function named sumEvens that accepts an array of numbers and returns the sum of the even numbers in the array.
// HINT: Use a for...of statement.
let sum=0;
const sumEvens=()=>{
    let number=[2,5,8,3,9];
    number.forEach(
        (element,index)=>{
        if(element%2==0)
        sum=sum+element;
        }
    )
}
sumEvens();
console.log(sum);

// Assignment 4:
// let numbers = [4, -4, 10, 203, 53, 11];
// Use reduce() method to find the minimum value in an array.
let numbers = [4, -4, 10, 203, 53, 11];
let small=numbers[0];
function reduce(){
    numbers.forEach(
        (element,index)=>{
            if(element<small)
            small=element;
        }
    )
}
reduce();
console.log(small);




