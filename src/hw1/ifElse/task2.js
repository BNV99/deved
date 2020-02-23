"use strict"
  let x=14;
  let y=8;
  let chetv='';
  function taski2(x,y) {
   if (x>0 && y>0) {
    chetv="1";
   }
   if (x<0 && y>0) {
    chetv="2";
   }
    if (x<0 && y<0) {
      chetv="3";
    }
     if (x>0 && y<0) {
       chetv="4";
     }

     return chetv
    }

    console.log(taski2(x,y));