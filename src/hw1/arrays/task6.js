let masiv1=[7,3,3,6,3,4,5,3]


 let i=0;


 // Возвращает длину массива

function dlinaMas(n) {
   let k=0;
for(i=0;  n[i]!=undefined ; i++) {

k=i;
}
   
return k;
}

// console.log(dlinaMas(masiv));

function revers(m){
let d1=dlinaMas(m);
let ele=m[0];
for (i=0;i<=d1/2;i++)
{
    ele=m[i];
    m[i]=m[d1-i];
    m[d1-i]=ele;
}
return m;
}

console.log(revers(masiv1));