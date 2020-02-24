"use strict"
    let au=56;



    function SumChZ(au) {
    let sum5=0;
    let n;



    while (au>0) {
      n=au%10
      if (n==0) {
        au=au/10;
      }
      else {
        n=Math.floor(n);
        au=au/10;
        sum5=sum5+n;

      }

    }

    return  sum5;
  }

console.log(SumChZ(au));
