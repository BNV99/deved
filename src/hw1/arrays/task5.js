
let num5 = [10,5,3,6,9];

function sumnechet(n){
  
    let suma=0;
    i=0;
  

    for (i=1;i<n.length; i=i+2) {
        suma=suma+n[i]

    }
    return suma;

}
console.log(sumnechet(num5)); 
