let num = [10,5,3,6];



function mas(n){
let min=num[0];
for (i=1; i<num.length; ++i ) {
 if (min>num[i]){
   min=num[i];
   
 }
   
}
return min;
}
console.log(mas(num));