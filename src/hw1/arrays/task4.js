
let num4 = [2,10,5,3,6,0,-5,-10];


function max1(num)  {
let max1=num[0];
let na=0;
for (i=0; i<num.length; ++i ) {
 if (max1<num[i]){
    max1=num[i];
   na=i;
   
 }
   
}
return na;
}

console.log(max1(num4));