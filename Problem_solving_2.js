// write a program that works out whether if a given year is a leap year or not?
// A normal year has 365 days, leap years have 366, with an extra day in February.
/* How to know if it is a Leap Year:
..Leap Years are any year that can be exactly divided by 4 (such as 2016, 2020, 2024, etc)
..except if it can be exactly divided by 100, then it isn't (such as 2100, 2200, etc)
..except if it can be exactly divided by 400, then it is (such as 2000, 2400) */

/* Why?
Because the Earth rotates about 365.242375 times a year ...

... but a normal year is 365 days, ...

... so something has to be done to "catch up" the extra 0.242375 days a year.

 

So every 4th year we add an extra day (the 29th of February), which makes 365.25 days a year. This is fairly close, but is wrong by about 1 day every 100 years.

So every 100 years we don't have a leap year, and that gets us 365.24 days per year (1 day less in 100 year = -0.01 days per year). Closer, but still not accurate enough!

So another rule says that every 400 years is a leap year again. This gets us 365.2425 days per year (1 day regained every 400 years = 0.0025 days per year), which is close enough to 365.242375 not to matter much.
*/

var year = 2000;
// debugger;
if(year % 4 === 0)
{
   if(year % 100 === 0)
   {
     if(year % 400 === 0)
     {
       console.log("The year " + year + " is a leap year");
     }
     else
     {
       console.log("The year " + year + " is not a leap year");
     }
    }
   else
   {
     console.log("The year " + year + " is a leap year");
   }
}
else
{
   console.log("The year " + year + " is not a leap year");
}


console.log("---------------------------------------------------------------------");


// What is truthy and falsy values in Javascript?

// we have total 5 falsy values in javascript
//  0,"",undefined,null,NaN,false** is false anyway

if(score = 0){
   console.log("OMG, we loss the game");
 }
else{
  console.log("Yay, We won the game");
 }

 if(score = 10){
  console.log("OMG, we loss the game");
}
else{
 console.log("Yay, We won the game");
}

if(0){
  console.log("OMG, we loss the game");
}
else{
 console.log("Yay, We won the game");
}

if(undefined){
  console.log("OMG, we loss the game");
}
else{
 console.log("Yay, We won the game");
}

if(null){
  console.log("OMG, we loss the game");
}
else{
 console.log("Yay, We won the game");
}

if(false){
  console.log("OMG, we loss the game");
}
else{
 console.log("Yay, We won the game");
}

if(true){
  console.log("OMG, we loss the game");
}
else{
 console.log("Yay, We won the game");
}


// JavaScript program to print table for given number (8)?

// output :  8 * 1 = 8 
        //   8 * 2 = 16(8*2)
        //  => 8 * 10 = 80

 for(var num = 1; num<= 10; num++){
    var tableOf = 8;  
   console.log(tableOf + " * " + num + " = " + tableOf * num);
 }