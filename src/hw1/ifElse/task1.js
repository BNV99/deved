 "use strict"

 let a=6;
  let b=8;
 function taski1(a,b) {
  let res=0;

  if (a%2==0) {
      res=a*b;
     
  }
  else {
    res=a+b;
  
  }
return res;
}

console.log (taski1(a,b));