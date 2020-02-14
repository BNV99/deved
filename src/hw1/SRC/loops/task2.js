"use strict"
   var a=7;
   var i;
   if (a==1){
    console.log("Нейтральный элемент");
  }
    if (a==2) {
    console.log("Простое");
  }
     if(a%2==0) {
       console.log("Составное")
     }
    else {
      for(i=2;i<a;i++) {
        if (a%i==0) {
          console.log("Составное");

        }
        else {
          console.log("Простое");
          break;
        }


      }
    }
