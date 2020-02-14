"use strict"
    var a=56;
    var sum=0;
    var n;

    while (a>0) {
      n=a%10
      if (n==0) {
        a=a/10;
      }
      else {
        n=Math.floor(n);
        a=a/10;
        sum=sum+n;

      }

    }

console.log(sum);
