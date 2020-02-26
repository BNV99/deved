function AList(array) {

this.defaultArray=array;

this.arr=[];   // копия defaultArray
this.init();

}



AList.prototype.init = function ()  {
    let index = 0;
    while(this.defaultArray[index]){
        this.arr[index] = this.defaultArray[index];
        index++;


}
}


AList.prototype.size = function() {
    

    let ind = 0;
    while(this.arr[ind]){
        ind++;
    }
    return ind;
}


AList.prototype.addStart = function(value) {

       
        let noarr=[];
        
        let i;
        for (i=1;  i<this.size()+1 ; i++ ) {
            
            
    
            noarr[i]=this.arr[i-1];
    
    
        }
       
        noarr[0]=value;
        return this.arr = noarr;
}

AList.prototype.addEnd = function(value) {
    let i=this.size();

    let noarr=[];
    this.arr[i]=value;

    return this.arr;
    
    
}




AList.prototype.delFirst = function() {
    let noarr = [];
    let posish=this.arr[0];
    let i;
    for (i=1;i<this.size()-1;i++) {

            noarr[i] = this.arr[i+1];

        

    }
    this.arr=noarr;
    return posish;
 

    
}


AList.prototype.delEnd = function() {
    let noarr1 = [];
    let posish1=this.arr[this.size()-1];
    let i;
    for (i=1;i<this.size()-1;i++) {

            noarr1[i] = this.arr[i];
    }
    this.arr=noarr1;
    return posish1;
}



AList.prototype.delPos = function(value) {
    let noarr = [];
    let posish=this.arr[value];
    let i;
    for (i=0;i<this.size()-1;i++) {

        if (i!=posish) {
            noarr[i] = this.arr[i+1];

        }

    }
    this.arr=noarr;
    return posish;


}


AList.prototype.get = function(index) {
    for (let i = 0; i < this.size(); i++) {
        if(i == index) {
             return this.arr[i];
        }
    }
    return undefined;
}






AList.prototype.set = function(index, value) {
    for (let i = 0; i < this.size() ; i++) {
        if(i == index){
            this.arr[i] = value;
            return this.arr;
        }
    }
    return 'NOT defined';
}

AList.prototype.toString = function() {
    let string = '';
    for (let i = 0; i < this.size(); i++) {
        string += this.arr[i];
    }
    return string;
}




AList.prototype.clear = function() {
    this.array = this.defaultArray;
    return this.array;

    
}


AList.prototype.min = function() {
    let min=this.arr[0];
for (i=1; i<this.size(); ++i ) {
 if (min>this.arr[i]){
   min=this.arr[i];
   
 }
   
}
return min;
}



AList.prototype.max = function() {
    let max=this.arr[0];
for (i=1; i<this.size(); ++i ) {
 if (max<this.arr[i]){
   max=this.arr[i];
   
 }
   
}
return max;
}






AList.prototype.sort = function() {

    for (let i = 1, l = this.size(); i < l; i++) {
        const cur = this.arr[i];
        let j = i;
        while (j > 0 && this.arr[j - 1] > cur) {
           this.arr[j] =this.arr[j - 1];
            j--;
        }
       this.arr[j] = cur;
    }
    return this.arr;

    
}



AList.prototype.maxIndex = function() {

    
let max1=this.arr[0];
let na=0;
for (i=0; i<this.size(); ++i ) {
 if (max1<this.arr[i]){
    max1=this.arr[i];
   na=i;
   
 }
   
}
return na;
}
    

AList.prototype.minIndex = function() {
    let min1=this.arr[0];
    let na=0;
    for (i=0; i<this.size(); ++i ) {
     if (min1>this.arr[i]){
        min1=this.arr[i];
       na=i;
       
     }
       
    }
    return na;
    }

    
   
    


AList.prototype.reserve = function() {
    let d1=this.size()-1;
    let ele=this.arr[0];
    for (i=0;i<=d1/2;i++)
    {
        ele=this.arr[i];
        this.arr[i]=this.arr[d1-i];
        this.arr[d1-i]=ele;
    }
    return this.arr;

    
}

AList.prototype.halfRevers = function() {
    let arrM = this.size();
    let i;
    const half1 = parseInt(arrM/2);
    let helpArr = [];
    if(this.size() % 2 == 0){
        for(i = 0, j = half1; i < half1 && j < arrM; i++, j++){
            helpArr[i] = this.arr[j];
            this.arr[j] = this.arr[i];
            this.arr[i] = helpArr[i];
        };
    }
    
    
    else{
        for(i = 0, j = half1+1; i < half1+1 && j < arrM; i++, j++){
            helpArr[i] = this.arr[j];
            this.arr[j] = this.arr[i];
            this.arr[i] = helpArr[i];
        };
    }
    return this.arr;
}



let newArr = new AList([1, 4, 53, 32,55]);
// // console.log(newArr.size());
// console.log(newArr.maxIndex());
// console.log(newArr.reserve());
// console.log(newArr.clear());

console.log(newArr.delEnd());
