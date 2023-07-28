// 1: Add Dec at the end of an array?
// 2: What is the return value of splice method?
// 3: update march to March (update)?
// 4: Delete June from an array?

const months =['Jan','march','April','June','July'];
// sol1: 
 const newMonth = months.splice(months.length,0,"Dec");
 console.log(months);
console.log("---------------------------------------------------------------------");
// sol2:
 console.log(newMonth);

 console.log("---------------------------------------------------------------------");
// sol3: 
const months1 = ['Jan', 'march', 'April', 'June', 'July'];

const updateMonth =months1.splice(1,1,'March');
console.log(months1);

console.log("---------------------------------------------------------------------");
const months2 = ['Jan', 'march', 'April', 'June', 'July'];
const indexOfMonth =months2.indexOf('march');

if(indexOfMonth != -1)
{
    const updateMonth =months2.splice(1,1,'March');
    console.log(months2);
}
else{
      console.log('No such data found');
     }

     console.log("---------------------------------------------------------------------");
const indexOfMonth1 = months.indexOf('June');

if(indexOfMonth1 != -1){
   const updateMonth1 = months1.splice(indexOfMonth1,1,'june');
  console.log(months1);
 }else{
  console.log('No such data found');
}

console.log("---------------------------------------------------------------------");
// sol3: 
const months3 = ['Jan', 'march', 'April', 'June', 'July'];

const indexOfMonth3 = months3.indexOf('April');

if(indexOfMonth3 != -1){
  const updateMonth3 = months3.splice(indexOfMonth3,1);

//   const updateMonth3 = months3.splice(indexOfMonth3,2);

//   const updateMonth3 = months3.splice(indexOfMonth3,1,2);

// const updateMonth3 = months3.splice(indexOfMonth3,Infinity);

  console.log(months3);
  console.log(updateMonth3);
}else{
  console.log('No such data found');
}

console.log("---------------------------------------------------------------------");

