
// Why Functions? 

// You can reuse code: Define the code once, and use it many times.
// You can use the same code many times with different arguments, 
// to produce different results.

  // OR

  // A function is a group of reusable code which can be called anywhere in your program. This eliminates the need of writing the same code again and again.

// DRY => do not repeat yourself



function EvenOdd(a){ 
    if(a%2==0)
    {
        console.log("Even");
    }
    else
    {
        console.log("Odd");
    }
 }
 
 EvenOdd (14);
 EvenOdd (258);
 EvenOdd (111);
 EvenOdd (51);
 