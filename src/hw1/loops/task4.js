"use strict"

  let n=5;

  function factorian(n) {
  let sum4=n;
  let k=n;
  for (let i = 1; i < k; i++) {
    n=n-1;
    sum4=sum4*n;
  }
 return sum4;
}
  console.log(factorian(n));
