const {List } = require ('../list/list');
const{Node}=require('../list/Node');



function lList(arr)  {
    List.apply(this,arguments);
    this.defArr=arr;
    this.root = new Node (arr[0]);
    this.init();


}


lList.prototype= Object.create(List.prototype);
lList.prototype.constructor=lList;


lList.prototype.init = function() {


}

lList.prototype.size = function() {
  
}

lList.prototype.addStart = function(value) {

  
    
}


lList.prototype.addEnd = function(value) {

   

    
}


lList.prototype.addPos = function(index,value) {
    
}

lList.prototype.delStart = function() {
    
}


lList.prototype.delEnd = function() {
    
}

lList.prototype.delPos = function(index) {
    
}



lList.prototype.get = function(index) {
    
}


lList.prototype.set = function(index,value) {
    
}


lList.prototype.toString = function() {
    
}


lList.prototype.clear = function() {
    
}


lList.prototype.min = function() {
    
}


lList.prototype.max = function() {
    
}


lList.prototype.sort = function() {
    
}
lList.prototype.maxIndex = function() {
    
}
lList.prototype.minIndex = function() {
    
}


lList.prototype.reserve = function() {
    
}

lList.prototype.halfRevers = function() {
    
}
