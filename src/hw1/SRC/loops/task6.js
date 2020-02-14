"use strict"
    var a=console.log("Введите число");
    var sum="Число:";
    var n;

    while (a>1) {
        n=a%10
        n=Math.floor(n);
        a=a/10;
        sum=sum+n;

      }



console.log(sum);
