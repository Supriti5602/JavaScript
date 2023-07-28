console.log(5+20);
console.log("---------------------------------------------------------------------");

//5 ,20 = operand
//+ = operator
//Expression is combination of operator and operand.
//-----------------------------------------------------------------------------------------//
/*There are different types of JavaScript operators:-
1)Arithmetic Operators.
2)Assignment Operators.
3)Comparison Operators.
4)String Operators.
5)Conditional (ternary) operators
6)Logical Operators.
7)Bitwise Operators.
8)Ternary Operators.
9)Type Operators.*/

//-----------------------------------------------------------------------------------------//

// Assignment operators
// An assignment operator assigns a value to its left operand 
// based on the value of its right operand. 
// The simple assignment operator is equal (=)

var x = 5; 
var y = 5;

console.log("x and y are equal or not ?" + x == y );
console.log(x == y);
console.log(`x and y are equal or not? : ${x == y}`);
console.log("---------------------------------------------------------------------");

// Arithmetic operators
// An arithmetic operator takes numerical values 
// (either literals or variables) as their operands and 
// returns a single numerical value.

console.log(3+3);
console.log(10-5);
console.log(20/5);
console.log(5*6);

 console.log("Remainder Operator " + 27%4);



 console.log("---------------------------------------------------------------------");



//Increment and Decrement operator
// Operator: x++ or ++x or x-- or --x
// If used postfix, with operator after operand (for example, x++), 
// the increment operator increments and returns the value before incrementing.

//Postfix
 var num1 = 15;
 var num2 = 10;
 var newNum1 = num1++;
 var newNum2 = num2++ + 5;
 console.log(num1);
 console.log(num2);
 console.log(newNum1);
 console.log(newNum2);
 console.log("---------------------------------------------------------------------");

//Prefix
 var num3 = 5;
 var num4 = 2;
 var newNum3 = ++num3;
 var newNum4 = ++num4 + 5;
 console.log(num3);
 console.log(num4);
 console.log(newNum3);
 console.log(newNum4);
 console.log("---------------------------------------------------------------------");


// Postfix increment operator means the expression is evaluated 
// first using the original value of the variable and then the 
// variable is incremented(increased).


// If used prefix, with operator before operand (for example, ++x), 
// the increment operator increments and returns the value after incrementing.

var num = 15;
var newNum = --num + 5; 
console.log(num);
console.log(newNum);
console.log("---------------------------------------------------------------------");


// Prefix increment operator means the variable is incremented first and then 
// the expression is evaluated using the new value of the variable.

//Comparison operators
// A comparison operator compares its operands and 
// returns a logical value based on whether the comparison is true or false.

var a = 30;
var b = 10;

// Equal (==)
console.log(a == b);

// Not equal (!=)
console.log(a != b);

// Greater than (>)
console.log(a > b);

// Greater than or equal (>=)
console.log(a >= b);

// Less than (<)
console.log(a < b);

// Less than or equal (<=)
console.log(a <= b);
console.log("---------------------------------------------------------------------");


// Logical operators
// Logical operators are typically used with Boolean (logical) values; 
// when they are, they return a Boolean value.

var a = 30;
var b = -20;

// Logical AND (&&)
// The logical AND (&&) operator (logical conjunction) for a set of 
// operands is true if and only if all of its operands are true.


console.log(a > b && b > -50 && b < 0);

console.log("---------------------------------------------------------------------");

// Logical OR (||)
// The logical OR (||) operator (logical disjunction) for a set of 
// operands is true if and only if one or more of its operands is true.

console.log((a < b) || (b > 0) || (b < 0));

// Logical NOT (!)
// The logical NOT (!) operator (logical complement, negation) 
// takes truth to falsity and vice versa.

console.log(!((a>0) || (b<0)));
console.log(!true);
console.log("---------------------------------------------------------------------");

//String Concatenation(operators)
// The concatenation operator (+) concatenates two string values together, 
// returning another string that is the union of the two operand strings.


console.log("Hello World");

console.log("hello " +  "world");

var myName = "Supriti";

 console.log(myName + " Kole");
console.log(myName + " is a girl");
console.log("---------------------------------------------------------------------");
