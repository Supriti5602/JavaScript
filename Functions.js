// A JavaScript function is a block of code designed to perform a particular task.


// Function Definition 

/* A function definition (also called a function declaration, or function statement)  consists of the function keyword, followed by:

1.The name of the function.
2.A list of parameters to the function, enclosed in parentheses and separated by commas.
3.The JavaScript statements that define the function, enclosed in curly brackets, {...}.

function function_name ()
{
    //Statement
}
*/

//without function
 var a = 10;
 var b = 20;
 var sum1 = a+b;
 console.log(sum1);
console.log("--------------------------------------------------------------------");
//using function
 function sum(){
  var a1 = 10, b1 = 40;
   var total = a1+b1;
   console.log(total);
 }

 console.log("-------------------------------------------------------------------");
// Calling functions
// Defining a function does not execute it.
// A JavaScript function is executed when "something" invokes it (calls it).
sum();
console.log("-------------------------------------------------------------------");
//Total code 

function sum20(){
   var a2 = 50, b2 = 40;
   var totalx = a2+b2;
   console.log(totalx);
 }

 sum20();

 console.log("-------------------------------------------------------------------");

// Function Parameter vs Function Arguments 
// Function parameters are the names listed in the function's definition. 
// Function arguments are the real values passed to the function.


 function sum(a,b){ //a,b -> Parameter
   var total = a+b;
  console.log(total);
}

 sum();
 sum(20,30); // 20,30 -> Arguments
 sum(50,50);
 sum(5,6)

 console.log("-------------------------------------------------------------------");


// Function expressions
// Function expressions means create a function and put it into the variable.

function sum98(a,b){
   var total = a+b;
   console.log(total);
 }

 var funExp = sum98(9,8);
 funExp ;

 console.log("-------------------------------------------------------------------");
// Return Keyword
// When JavaScript reaches a return statement, the function will stop executing.
// Functions often compute a return value.
// The return value is "returned" back to the "caller"


function sum1715(a,b){
   return  a+b;
 }

 var funExp1 = sum1715(17,15);
 console.log('the sum of two no is ' + funExp1 );
 console.log("-------------------------------------------------------------------");

// Anonymous Function

// A function expression is similar to and has the same syntax  as a function declaration One can define "named" function expressions (where the name of the expression might be used in the call stack for example)  or "anonymous" function expressions.


 function funExp2(_a2, _b2) {
    return total = _a2 + _b2;
}
console.log('the sum of two no is ' + funExp2(58,42) );
 var sum1515 = funExp2(15,15);
 var sum2015 = funExp2(20,15);

 console.log(sum1515 > sum2015 );
 console.log(sum1515 < sum2015 );
