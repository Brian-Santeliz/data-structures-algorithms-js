/* Example NOT pointer: */

let numberOne = 20;
let numberTwo = numberOne

numberOne = 44; // -> Value 44
console.log(numberTwo) // -> Value 20

/* Example of Pointer */

let obj1 = {
    value:30
}
let obj2 = obj1 // -> obj1 and obj2 is equal to value 30
obj1.value = 200
console.log(obj2.value) // -> Value is 200

let obj3 = {
    value:400
}
obj1 = obj3
obj2 = obj3 
//-> both value is now 400
console.log(obj1.value) 
console.log(obj2.value) 
/* Value 30 is deleted by Garbage collection because not exist a pointer to the object */