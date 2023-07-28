//Modern JavaScript

// 1996 - JavaScript was created.
//1997 - ECMA INTERNATIONAL (It was submitted to ECMA International for standarization,which resulted in ECMAScript)
//2015 - ES6 (Decided to switch to annual releases of ECMAScript) [6th Edition]
//2016 - ES7
//2017 - ES8
//2018 - ES9
//2019 - ES10
//2020 - ES11

//ES6
/* 
1.LET and CONST
2.TEMPLATE STRINGS
3.DEFAULT ARGUMENTS
4.DESTRUCTING
5.OBJECT PROPERTIES
6.ARROW FUNCTIONS
7.REST OPERATORS
8.SPREAD OPERATORS
*/

// LET vs CONST vs VAR

 var myName = "Kole Supriti";
 console.log(myName);

 myName = "Supriti Kole";
 console.log(myName);
console.log(".......................................................");
 let myName_let = "Kole Supriti";
 console.log(myName_let);

 myName_let = "Supriti Kole";
 console.log(myName_let);
 (".......................................................");

 /*const myName_const = "Kole Supriti";
 console.log(myName_const);

 myName_const = "Supriti Kole";
 console.log(myName_const); */   //ERROR

// var => function scope
// let and const => block scope 

function biodata() {
    var FirstName = "Supriti";
    console.log(FirstName);
    if(true){
        var LastName = "Kole";
        console.log('inner ' + LastName);
        console.log('inner ' + FirstName);
     }
        
     console.log('innerOuter ' + LastName);
}

biodata();
console.log(".......................................................");

// function biodata_let() {
//     let FirstName = "Supriti";
//     console.log(FirstName);
//     if(true){
//         let LastName = "Kole";
//         console.log('inner ' + LastName);
//         console.log('inner ' + FirstName);
//      }
        
//      console.log('innerOuter ' + LastName); //ERROR
// }

// biodata_let();

// console.log(".......................................................");

// function biodata_const() {    
//     const FirstName = "Supriti";
//     console.log(FirstName);
//     if(true){
//         const LastName = "Kole";
//         console.log('inner ' + LastName);
//         console.log('inner ' + FirstName);
//      }
        
//      console.log('innerOuter ' + LastName);  //ERROR
// }

// biodata_const();  


// Template literals (Template strings) 

// JavaScript program to print table for given number (8)?

// output :  8 * 1 = 8 
        //   8 * 2 = 16(8*2)
        //  => 8 * 10 = 80
for(let num1 = 1; num1<= 10; num1++){
    let tableOf1 = 5;  
    console.log(tableOf1 + " * " + num1 + " = " + tableOf1 * num1);
 }

 console.log(".......................................................");
 //Template
for(let num2 = 1; num2<= 10; num2++){
    let tableOf2 = 8;  
    console.log( ` ${tableOf2} * ${num2} = ${tableOf2 * num2}` );
 } // ` -> backtick
 console.log(".......................................................");
 // Default Parameters
// Default function parameters allow named parameters to be  initialized with default values if no value or undefined is passed.

 function mult1(a1,b1){
   return a1*b1;
 }

 console.log(mult1(3,2));//OP -> 6

 function mult2(a2,b2){
    return a2*b2;
  }
 
  console.log(mult2(3));//OP -> NaN

  function mult3(a3,b3=5){
    return a3*b3;
  }
 
  console.log(mult3(3));//OP -> 15

  function mult4(a4,b4=5){
    return a4*b4;
  }
 
  console.log(mult4(3,8));//OP -> 24
  console.log(".......................................................");

// 4️⃣ Destructuring in ES6
// The destructuring assignment syntax is a JavaScript expression 
// that makes it possible to unpack values from arrays, 
// or properties from objects, into distinct variables.

  //  ➡ Array Destructuring  🏁

  // const myBioData = ['vinod', 'thapa', 26];

  // let myFName = myBioData[0];
  // let myLName = myBioData[1];
  // let myAge = myBioData[2];
  
// let [myFName,myAge, myLName] = myBioData;
// console.log(myAge);

  // we can add values too 
  
  // let [myFName,myLName,myAge, myDegree="MCS"] = myBioData;
  // console.log(myDegree);



  // ➡ Object destructuring 🏁
  // const myBioData = {
  //   myFname : 'vinod',
  //   myLname : 'thapa',
  //   myAge : 26
  // }

  // let age = myBioData.age;
  // let myFname = myBioData.myFname;

  // let {myFname,myLname,myAge, myDegree="MCS"} = myBioData;
  // console.log(myLname);





// 5️⃣ Object Properties 

// ➡ we can now use Dynamic Properties 

      // let myName = "vinod";
      // const myBio = {
      //   [myName] : "hello how are you?",
      //   [20 + 6] : "is my age"
      // }

      // console.log(myBio);

  // ➡ no need to write key and value, if both are same 

  // let myName = "vinod thapa";
  // let myAge = 26;

  // const myBio = {myName,myAge}

  // console.log(myBio);




 
// Fat Arror Function 

// Normal Way of writing Function  

 console.log(sum()); 

 function sum() {
   let a = 5; b = 6;
   let sum = a+b;
  return `Sum of the two number is ${sum}`;
 }
 console.log(".......................................................");
// How to convert in into Fat Arrow Function 
// console.log(sum1()); 
// const sum1 = () => {
//     let a=5;b=10;
//     let sum1=a+b;
//     return `Sum of the two number is ${sum}`;
// }        // ERROR
console.log(".......................................................");
const sum2 = () => {
    let a=5;b=10;
    let sum2=a+b;
    return `Sum of the two number is ${sum2}`;
}
console.log(sum2());
console.log(".......................................................");
const sum3 = () => `Sum of the two number is ${(a=5)+(b=10)}`;
//=> Fat arrow symbol
 console.log(sum3()); 









// 7️⃣Spread Operator

// const colors = ['red', 'green', 'blue', 'white', 'pink'];

// const myColors = ['red', 'green', 'blue', 'white','pink', 'yellow', 'black'];
// // // 2nd time add one more color on top and tell we need to write it again 
// // // on myColor array too 

// const MyFavColors = [ ...colors, 'yellow', 'black'];

// console.log(MyFavColors);


// ES7 features 

// 1: array include 
// const colors = ['red', 'green', 'blue', 'white', 'pink'];
// const isPresent = colors.includes('purple');
// console.log(isPresent);

// 2: **
// console.log(2**3); 



// ES8 Features 

// String padding
// Object.values()
// Object.entries()

// const message = "my name is vinod";
// console.log(message);
// console.log(message.padStart(5));
// console.log(message.padEnd(10));


// const person = { name: 'Fred', age: 87 };

// // // console.log( Object.values(person) );
// const arrObj =  Object.entries(person);
// console.log(Object.fromEntries(arrObj));



// ES2018

// const person = { name: 'Fred', age: 87, degree : "mcs" };
// const sPerson = { ...person };

// console.log(person);
// console.log(sPerson);


// ES2019
// Array.prototype.{flat,flatMap}
// Object.fromEntries()

// ES2020
// #1: BigInt

// let oldNum = Number.MAX_SAFE_INTEGER;
// // console.log(oldNum);
// // console.log( 9007199254740991n + 12n );
// const newNum = 9007199254740991n + 12n;

// console.log(newNum);
// console.log(typeof newNum);


// const foo = null ?? 'default string';
// console.log(foo);

// ES2014

// "use strict";

// x = 3.14; 
// console.log(x);
