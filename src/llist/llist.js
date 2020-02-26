module.exports = function List(arr)  {


}

List.prototype.init = function() {

}

List.prototype.size = function() {
    let k=0;
    let i=0;
 for(i=0;  arr[i]!=undefined ; i++) {
 
 k=i;
 }
    
 return k;
 }
}

List.prototype.addStart = function(value) {

    let noarr=[];
    noarr[0]=value
    if (let i=1; i<this.size() ; i++) {

        noarr[i]=this.arr[i-1];

    }
    
}


List.prototype.addEnd = function(value) {

    let noarr=[];
    noarr[i]=value
    noarr[i]=this.size+1;
    if (let i=0; i<this.size()-1 ; i++) {

        noarr[i]=this.arr[i];

    }


    
}


List.prototype.addPos = function(index,value) {
    
}

List.prototype.delStart = function() {
    
}


List.prototype.delEnd = function() {
    
}

List.prototype.delPos = function(index) {
    
}



List.prototype.get = function(index) {
    
}


List.prototype.set = function(index,value) {
    
}


List.prototype.toString = function() {
    
}


List.prototype.clear = function() {
    
}


List.prototype.min = function() {
    
}


List.prototype.max = function() {
    
}


List.prototype.sort = function() {
    
}
List.prototype.maxIndex = function() {
    
}
List.prototype.minIndex = function() {
    
}


List.prototype.reserve = function() {
    
}

List.prototype.halfRevers = function() {
    
}
