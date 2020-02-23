let masiv=[7,3,3,6,3,4,3]


 let i=0;


 // Возвращает длину массива

function dlinaMas(n) {
   let k=0;
for(i=0;  n[i]!=undefined ; i++) {

k=i;
}
   
return k;
}
// колличество нечетных елементов массива


function niche(m){
let d1=dlinaMas(m);
let sum=0;



for (i=0;i<=d1;i++)
{
    if (m[i]%2!=0){
        sum=sum+m[i];

    }
    
}
return sum;
}

console.log(niche(masiv));