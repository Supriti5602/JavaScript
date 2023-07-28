console.log ('Hello World');
/*Values and Variables*/
var myName='Supriti Kole'
var x1=269;
var x2=8593.258;
var x3=true;
console.log(myName);
console.log(typeof(myName));
console.log(typeof(x1));
console.log(typeof(x2));
console.log(typeof(x3));
console.log(typeof(x4));
console.log("---------------------------------------------------------------------");

/*Practice Question*/
console.log(10+"20");
console.log(9-"5");//bug
console.log("Java"+"Script");
console.log("Supriti"-"Kole");//NAN - Not a Number
console.log(" "+" ");
console.log(" "+"0");
console.log(true+true);
console.log(true+false);
console.log(false+true);
console.log(false-true);
console.log("---------------------------------------------------------------------");

/*What is NAN ?*/
//-> we get NAN as a ouput when we try to find difference between two strings.eg- "Supriti"-"Kole". 
//NAN is the property of the global object.
//In other words it is a variable of a global scope.
//The initial value of NAN is Not-A-Number


/*The Browser Object Model (BOM)*/
//-> There are no official standards for the Browser Object Model (BOM).
//Since modern browsers have implemented (almost) the same methods and properties for JavaScript interactivity, it is often referred to, as methods and properties of the BOM.

var n= 8116876825;
var s="Supriti Kole" ;
console.log(isNaN(n));
console.log(isNaN(s));
if(isNaN(s)){
    console.log("Please enter a valid phone number"); // use for checking
}
console.log("---------------------------------------------------------------------");

console.log(NaN === NaN);//false
console.log(Number.NaN === NaN);//false
console.log(Number.NaN === Number.NaN);//false
console.log(isNaN(NaN));//true 
console.log(isNaN(Number.NaN));//true
console.log(Number.isNaN(NaN));//true
console.log("---------------------------------------------------------------------");
