
let num = [10,5,3,6];


function maxi(n)  {
let max=num[0];
for (i=1; i<num.length; ++i ) {
 if (max<num[i]){
   max=num[i];
   
 }
   
}
return max;
}

console.log(maxi(num));