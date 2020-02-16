
"use strict"
  var b=94;
  var res;



  function rate(a) {
  if (a<=19) {
      res='F'
          }
  if (a<=39 && a>19) {
      res='E'
          }
  if (a<=59 && a>39) {
      res='D'
          }
  if (a<=74 && a>59) {
      res='C'
          }
  if (a<=89 && a>74) {
      res='B'
          }

  if (a>89) {
      res='A'
          }
        
return res;
        }

console.log (rate(b));




window.rate=rate;

