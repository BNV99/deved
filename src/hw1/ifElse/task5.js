
"use strict"
  let a6=20;
  let res5;



  function taski5(a5) {

  if (a5<=19) {
      res5='F'
          }
  if (a5<=39 && a5>19) {
      res5='E'
          }
  if (a5<=59 && a5>39) {
      res5='D'
          }
  if (a5<=74 && a5>59) {
      res5='C'
          }
  if (a5<=89 && a5>74) {
      res5='B'
          }

  if (a5>89) {
      res5='A'
          }
        
return res5;
        }

console.log(taski5(a6));
