let num = [10,5,3,0,8,6];



function mas(num){
let min=num[0];
for (i=1; i<num.length; ++i ) {
 if (min>num[i]){
   min=num[i];
   
 }
   
}
return min;
}
console.log(mas([8,32,6,10,2]));

// console.log(mas(num));