// What will be the output of 3**3? 
// What will be the output, when we add a number and a string?
// Write a program to swap two numbers?
// Write a program to swap two numbers without using third variable?



// sol 1: ✔
 console.log(3**3); //27
 console.log(9**2); //81
 console.log(9**5); //59049
console.log(10 ** -1); //0.1

console.log("---------------------------------------------------------------------");

// sol 2:  ✔
console.log(5 + " eggs");//5 eggs
console.log("---------------------------------------------------------------------");

// sol 3: ✔ 

var a = 5;
var b = 10;

// output b=5; a=10

var c = b; //c = 10
b = a; // b = 5;
a = c;

console.log("The value of a is " + a);
console.log("The value of b is " + b);

console.log("---------------------------------------------------------------------");

// sol 4: ✔

var x = 15;
var y = 10;

// output b=5; a=10
console.log("The value of x is " + x);
console.log("The value of y is " + y);
x = x + y; // a = 25
y = x - y; // b = 15; 
x = x - y; // a = 10;

console.log("The value of x after swap " + x);
console.log("The value of y after swap  " + y);


console.log("---------------------------------------------------------------------");


// Interview Question 
// What is the Difference between == vs === ?


// sol 
 var num1 = 5;
 var num2 = '5';

console.log(typeof(num1));
console.log(typeof(num2));

console.log(num1 == num2 );

var num3 = 10;
var num4 = '10';

console.log(typeof(num3));
console.log(typeof(num4));
console.log(num4);

console.log(num3 === num4 );
console.log("---------------------------------------------------------------------");

// == checks only value
// === checks value as well as data type also.
