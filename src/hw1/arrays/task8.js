let masiv = [1, 2, 3, 4]


let i = 0;


// // Возвращает длину массива

// function dlinaMas(n) {
//     let k = 0;
//     for (i = 0; n[i] != undefined; i++) {

//         k = i;
//     }

//     return k+1;
// }

// console.log(dlinaMas(masiv));
// console.log(masiv.length);


function ress(arr){
    if(typeof arr != 'object' || arr == null) 
    return undefined;
    let arrLn = arr.length;
    let helpArr = [];
    if(arr.length % 2 == 0){
        for(let i = 0, j = arrLn/2; i < arrLn/2 && j < arrLn; i++, j++){
            helpArr[i] = arr[j];
            arr[j] = arr[i];
            arr[i] = helpArr[i];
        };
    };
    return arr;
}


console.log(ress(masiv));
