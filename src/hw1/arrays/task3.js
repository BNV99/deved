
let num3 = [10,5,3,6,0,-5,-10];


function mini1(num)  {
let min1=num[0];
let na=0;
for (i=0; i<num.length; ++i ) {
 if (min1>num[i]){
    min1=num[i];
   na=i;
   
 }
   
}
return na;
}

console.log(mini1(num3));