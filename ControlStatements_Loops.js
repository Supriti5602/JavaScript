/*Control Statement -
    1.If...Else
    2.Switch Statement
    3.While Loop
    4.Do-While Loop
    5.For Loop
    6.For in Loop
    7.For of Loop
    8.Conditional (ternary) operator
 */

// If...Else
// The if statement executes a statement if a specified condition is true. 
// If the condition is false, another statement can be executed.


//if raining = raincoat
//else no raincoat
var tomr = 'rain';

if(tomr == 'rain'){
 console.log('take a raincoat');
 }
 else{
 console.log('No need to take a raincoat');
}
console.log("---------------------------------------------------------------------");


var tomr1 = 'sunny';

if(tomr1 == 'rain'){
 console.log('take a raincoat');
 }
 else{
 console.log('No need to take a raincoat');
}

console.log("---------------------------------------------------------------------");

// Conditional (ternary) operator

/* The conditional (ternary) operator is the only JavaScript operator 
that takes three operands
variablename = (condition) ? value1:value2
*/

 var age = 17;
 if(age >= 18)
{
  console.log("you are eligible to vote");
}
 else
{
  console.log("you are not eligible to vote");
}
console.log("---------------------------------------------------------------------");

var age1 = 18;
console.log((age1 >= 18) ? "you can vote" : "you can't vote");
console.log("---------------------------------------------------------------------");




// switch Statement
/* Evaluates an expression, matching the expression's value to a case clause, and executes statements associated with that case.
*/
// Find the Area of circle, triangle and rectangle?


//If-Else
 var area = "circle" ;
 var PI = 3.142, l=5, b=4, r=3;

 if(area == "circle"){
  console.log("the area of the circle is : " + PI*r**2);
}
else if(area == "triangle"){
console.log("the area of the triangle is : " + (l*b)/2);
}
else if(area == "rectangle"){
  console.log("the area of the rectangle is : " + (l*b));
 }
 else{
   console.log("please enter valid data");
 }

console.log("---------------------------------------------------------------------");

//  without break statment 
var area2 = "circle" ;
 var PI = 3.142, l=5, b=4, r=3;

 switch(area2){
   case 'circle': 
     console.log("the area of the circle is : " + PI*r**2);


   case 'triangle':
     console.log("the area of the triangle is : " + (l*b)/2);

   case 'rectangle':
    console.log("the area of the rectangle is : " + (l*b));

   default:
     console.log("please enter valid data");
 }   


 console.log("---------------------------------------------------------------------");

// break
// Terminates the current loop, switch, or label 
// statement and transfers 
// program control to the statement following the terminated statement.


//Switch-Case
 var area2 = "triangle" ;
 var PI = 3.142, l=5, b=4, r=3;

 switch(area2){
   case 'circle': 
     console.log("the area of the circle is : " + PI*r**2);
        break;
   case 'triangle':
     console.log("the area of the triangle is : " + (l*b)/2);
        break;
   case 'rectangle':
    console.log("the area of the rectangle is : " + (l*b));
     break;

   default:
     console.log("please enter valid data");
 }   

 console.log("---------------------------------------------------------------------"); 


// continue
// Terminates execution of the statements in the current iteration of the 
// current or labeled loop, and continues execution of the loop with the 
// next iteration.



console.log("---------------------------------------------------------------------");


// While Loop Statement
// The while statement creates a loop that executes a specified statement  as long as the test condition evaluates to true. 

var num32 = 8;
// block scope -> {data}
while(num32 <= 10){
 console.log(num32); //infinte loop
   num32++;
 }
console.log("---------------------------------------------------------------------");
// Do-While Loop Statement

var num23 = 8;
do{
//   debugger;
 console.log(num23); //infinte loop
  num23++;
}while(num23 <= 10);
console.log("---------------------------------------------------------------------");


var num321 = 20;
// block scope -> {data}
while(num321 <= 10){
 console.log(num321); //infinte loop
   num321++;
 }//No Output
console.log("---------------------------------------------------------------------");
// Do-While Loop Statement

var num231 = 20;
do{
//   debugger;
 console.log(num231); //infinte loop
  num231++;
}while(num231 <= 10); //Output - 20
console.log("---------------------------------------------------------------------");


//  For Loop 

for(var num = 0; num <= 10; num++){
debugger;
    console.log(num);
}

console.log("---------------------------------------------------------------------");

