function k(v) {
    let arr=[5,3,3,2];
    let noarr=[];
    noarr[0]=v;
    let i;
    for (i=1;  i<arr.length+1 ; i++ ) {


        noarr[i]=arr[i-1];


    }
    return noarr;
}

    console.log(k(6));
 