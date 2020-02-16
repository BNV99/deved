"use strict"
   var b=2;
   var i;
   var c;

   function  tas(a){
   if (a==1){
    c=console.log("Нейтральный элемент");
  }
    if (a==2) {
    c="P";
  }
     if(a%2==0 & a!=2) {
       c=console.log("Составное")
     }
    else {
      for(i=2;i<a;i++) {
        if (a%i==0) {
         c= console.log("Составное");

        }
        else {
          c= console.log("Простое");
          break;
        }


      }
    }
    return c;
   }
   console.log (tas(b));

