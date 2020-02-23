"use strict"
  let a1=6;
  let b1=54;
  let c1=2;
  


  function taski4(a1,b1,c1) {
  let res;
  var m=Number(a1)*Number(b1)*Number(c1);
  var n=Number(a1)+Number(b1)+Number(c1);
  if (m>n) {
      res=m+3;
  }
  else {
    res=n+3;
  }

  return res;
}



console.log(taski4(a1,b1,c1));