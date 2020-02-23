"use strict"
 let b7=5;

 let c;

   function taskSost(a9) {
     let i;
   if (a9==1){
    c="Нейтральный элемент";
  }
    if (a9==2) {
    c="Prostoe";
  }
     if(a9%2==0 & a9!=2) {
       c="Sostavnoe";
     }
    else {
      for(i=2;i<a9;i++) {

        if (a9%i==0) {
         c= "Sostavnoe";

        }
        else {
          c= "Prostoe";
          
          
        }

      }
    }
    return c;
   }
   console.log (taskSost(5));

