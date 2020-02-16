"use strict"
  var a1=6;
  var b1=54;
  var c1=2;
  var res;


  function tas4 (a,b,c){

  var m=Number(a)*Number(b)*Number(c);
  var n=Number(a)+Number(b)+Number(c);
  if (m>n) {
      res=m+3;
  }
  else {
    res=n+3;
  }

  return res;
}
console.log (tas4());



window.tas4=tas4;


