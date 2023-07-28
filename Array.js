// When we use var, we can store only one value at a time. 
// var v1 = 'xyz';
// var v2 = 'abc';
// var v3 = 'mno';

//var arr = ['Mango','Banana','Orange'];
// var v = ['xyz',22,male,'abc',20,male,'mno',true, 52];

// When we feel like storing multiple values in one variable then 
// instead of var, we will use an Array.

// In JavaScript, we have an Array class, and arrays are the prototype of this class. 

// example
// var myFriends = ['ramesh',22,male,'arjun',20,male,'vishal',true, 52];
// ramesh - lower index/ lower boundary
//52 - upper index / upper boundary

/*
1.Traversal of an Array
2.Searching and Filter in an array
3.How to sort and compare an array
4.How to Insert , Add, Replace and Delete Elements in Array(CRUD)
5.Map() , Reduce() , Filter()
*/

// var myFriends=new Array; //optional
// var myFriends = ['ramesh',22,male,'arjun',20,male,'vishal',true, 52];

// Traversal in array
// navigate through an array
// if we want to get the single data at a time  and also if we want to change the data 


var myFriends = ['vinod','xyz','Riddhi','ramesh','arjun','vishal','sekhar'];
console.log(myFriends[1]);
console.log(myFriends[2]);
console.log(myFriends[3]);
console.log(myFriends[0]);
console.log("OP1----------------------------------------------------------------");
console.log(myFriends[myFriends.length - 1]);

console.log("OP2----------------------------------------------------------------");

// if we want to check the length of elements of an array 
console.log(myFriends.length);

console.log("OP3----------------------------------------------------------------");
// we use for loop to navigate 
var myFriends1 = ['vinod','ramesh','arjun','vishal'];
 for(var i=0; i<myFriends1.length; i++){
   console.log(myFriends1[i]);
 }


 console.log("OP4----------------------------------------------------------------");

// After ES6 we have for..in and for..of loop too 

var myFriends2 = ['vinod1','ramesh1','arjun1','vishal1'];
for(let elements in myFriends2){
 console.log(elements);
}
for(let elements of myFriends2){
 console.log(elements);
}


console.log("OP5----------------------------------------------------------------");

// Array.prototype.forEach() 
// Calls a function for each element in the array.

var myFriends3 = ['vinod2','ramesh2','arjun2','vishal2'];

myFriends3.forEach(function(element, index, array) {
        console.log(element);
    console.log(element + " index : " + index);
 });

 console.log("OP6----------------------------------------------------------------");

 myFriends3.forEach((element, index, array) => {
    console.log(element);
    console.log(element + " index : " +index );
 });

 console.log("OP7----------------------------------------------------------------");
 console.log("----------------------------------------------------------------");

 
 // Searching and Filter in an Array 

// Array.prototype.indexOf() 

// Returns the first (least) index of an element within the array equal  to an element, or -1 if none is found. It search the element from the 0th index number 

var arr1 = ["xyz","abc","efg","mno","pqr","ijk","ghi","uvw"];

console.log(arr1.indexOf("smn"));
console.log(arr1.indexOf("mno"));
console.log(arr1.indexOf("mno",2));
console.log(arr1.indexOf("mno",4));

console.log("OP8----------------------------------------------------------------");


// Array.prototype.lastIndexOf() 
// Returns the last (greatest) index of an element within the array equal  to an element, or -1 if none is found. It search the element last to first

var arr2 = ["xyz","abc","efg","mno","pqr","ijk","ghi","uvw","abc","efg"];

console.log(arr2.lastIndexOf("ghi"));
console.log(arr2.lastIndexOf("ghi",3)); 
console.log(arr2.lastIndexOf("xyz")); 
console.log(arr2.lastIndexOf("efg")); 
console.log(arr2.lastIndexOf("xyz",3)); 

console.log("OP9----------------------------------------------------------------");


// Array.prototype.includes() 
// Determines whether the array contains a value,returning true or false as appropriate.

 var arr3 = ["xyz","abc","efg","mno","pqr","ijk","ghi","uvw"];

console.log(arr3.includes("mno"));
console.log(arr3.includes("mno",5));
console.log(arr3.includes("stp"));

console.log("OP10----------------------------------------------------------------");

// Array.prototype.find() 

// arr.find(callback(element[, index[, array]])[, thisArg])

// Returns the found element in the array, if some element in the  array satisfies the testing function, or undefined if not found.
// Only problem is that it return only one element

// var arr4 = ["xyz","abc","efg","mno","pqr","ijk","ghi","uvw","abc","efg"];

// console.log(arr4.find("ghi"));


 const prices = [200,300,350,400,450,500,600];

// price < 400

const findElem1 = prices.find(function(currVal) {
    if(currVal < 400)
    return currVal; 
});
console.log(findElem1);

 const findElem2 = prices.find((currVal) =>  currVal < 400 );
 console.log(findElem2);

 console.log(prices.find((currVal) => currVal > 1400 )  );  //undefined

 console.log("OP11----------------------------------------------------------------");


// Array.prototype.findIndex() 

// Returns the found index in the array, if an element in the 
// array satisfies the testing function, or -1 if not found.


console.log(prices.findIndex((currVal) => currVal > 1400 )  ); //-1
console.log(prices.findIndex((currVal) => currVal < 400 )  );
console.log(prices.findIndex((currVal) => currVal > 400 )  );


console.log("OP12----------------------------------------------------------------");

// Array.prototype.filter() 

// Returns a new array containing all elements of the calling 
// array for which the provided filtering function returns true.

const prices1 = [200,300,350,400,450,500,600];

// // price < 400
 const newPriceTag = prices1.filter((elem, index) => {
  return elem > 400;
 })
console.log(newPriceTag);

const newPriceTag1 = prices1.filter((elem, index) => {
    return elem < 400;
   })
  console.log(newPriceTag1);

  const newPriceTag3 = prices1.filter((elem, index) => {
    return elem > 1400;
   })
  console.log(newPriceTag3);

  console.log("OP13----------------------------------------------------------------");

  // Sort an Array

// Array.prototype.sort() 

// The sort() method sorts the elements of an array in place and returns the sorted array. The default sort order is ascending, built upon converting the elements into strings, then comparing their sequences of UTF-16 code units values.

const months = ['March', 'Jan', 'Feb', 'April' , 'Dec', 'Nov'];

console.log(months.sort());

console.log("OP14----------------------------------------------------------------"); 

const array1 = [1, 30, 4, 21, 100000, 99];
 console.log(array1.sort());

 //sort works with string

 console.log("OP15----------------------------------------------------------------");

// However, if numbers are sorted as strings, 
// "25" is bigger than "100", because "2" is bigger than "1".

// Because of this, the sort() method will produce an incorrect 
// result when sorting numbers.


// Perform CRUD

// Array.prototype.push() 
// The push() method adds one or more elements to the end of an array and returns the new length of the array.

 const animals = ['pigs', 'goats', 'sheep'];

const x = animals.push('chicken');
console.log(x);

console.log("OP16----------------------------------------------------------------"); 

 animals.push('chicken', 'cats','cow');
console.log(animals);

console.log("OP17----------------------------------------------------------------"); 
// Array.prototype.unshift() 
// The unshift() method adds one or more elements to the beginning of an array and returns the new length of the array.



 const animals1 = ['pigs', 'goats', 'sheep'];

 const count1 = animals1.unshift('chicken');
console.log(count1);
 console.log(animals1);

 animals1.unshift('chicken', 'cats','cow');
 console.log(animals1);

 console.log("OP18----------------------------------------------------------------");
// 2nd example 

 const myNumbers = [1,2,3,5];

 const x1=myNumbers.unshift(4,6);
 myNumbers.push(4,6);
 console.log(myNumbers);
 console.log(x1);
 console.log("OP19----------------------------------------------------------------");

// Array.prototype.pop() 
// The pop() method removes the last element from an array and returns  that element. This method changes the length of the array.

 const plants = ['broccoli', 'cauliflower',  'kale', 'tomato', 'cabbage'];

console.log(plants);
console.log(plants.pop());
console.log(plants);
console.log("OP20----------------------------------------------------------------");

// Array.prototype.shift() 🙋‍♂️
// The shift() method removes the first element from an array and returns 
// that removed element. This method changes the length of the array.

 const plants1 = ['broccoli', 'cauliflower',  'kale', 'tomato', 'cabbage'];
 console.log(plants1);
 console.log(plants1.shift());
console.log(plants1);

console.log("OP21----------------------------------------------------------------");

// Array.prototype.splice()
// Adds and/or removes elements from an array.



// Map and Reduce Method 

// Array.prototype.map()

// let newArray = arr.map(callback(currentValue[, index[, array]]) {
//     // return element for newArray, after executing something
//   }[, thisArg]);

// Returns a new array containing the results of calling a function on every element in this array. 

 const array11 = [1, 4, 9, 16, 25];
// num > 9
 let newArr = array11.map((curElem,index,arr) => {
    return curElem > 9;
 })
console.log(array11);
 console.log(newArr);
 console.log("OP22----------------------------------------------------------------");
 const array12 = [1, 4, 9, 16, 25];
let newArr1 = array12.map((curElm, index, arr) => {
     return `Index no = ${index} and the value is ${curElm} belong to ${arr} `
})
 console.log(newArr1);
 console.log("OP23----------------------------------------------------------------");
 let newArrfor = array12.forEach((curElm, index, arr) => {
   return `Index no = ${index} and the value is ${curElm} belong to ${arr} `
 })
 console.log(newArrfor);

// It return new array without mutating the orignal array 

 console.log("----------------------------------------------------------------");
// let newArrfor = array1.forEach((curElm, index, arr) => {
//   return `Index no = ${index} and the value is ${curElm} belong to ${arr} `
// })
// console.log(newArrfor);

// It return new array without mutating the orignal array 

console.log("----------------------------------------------------------------");
// 👉 Reduce Method 

// flatten an array means to convert the 3d or 2d array into a 
// single dimensional array 

// The reduce() method executes a reducer function (that you provide) 
// on each element of the array, resulting in single output value.

// The reducer function takes four arguments:

// Accumulator
// Current Value
// Current Index
// Source Array

// 4 subj = 1sub= 7
// 3dubj = [5,6,2]

// let arr = [5,6,2];

// let sum = arr.reduce((accumulator, curElem) => {
//         debugger;
//       return accumulator += curElem;
// },7)
// console.log(sum);




// How to fatten an array 
// converting 2d and 3d array into one dimensional array 

// const arr = [
//         ['zone_1', 'zone_2'],
//         ['zone_3', 'zone_4'],
//         ['zone_5', 'zone_6'],
//         ['zone_7', ['zone_7', ['zone_7', 'zone_8']]]
//     ];

// // let flatArr = arr.reduce((accum, currVal)  => { 
// //           return accum.concat(currVal);
// // })

// console.log(arr.flat(Infinity));







// console.log(flatArr);


// const arr = [ ['zone_1', 'zone_2'], ['zone_3', ['zone_1', 'zone_2', ['zone_1', 'zone_2']]] ];
// console.log(arr.flat(3));
// console.log(arr);

