let list = document.getElementById('.list');
let newArr= document.querySelectorAll('.dantext');
let button1 = document.querySelectorAll(".button");
// let del = document.getElementById('delete');
// let button=document.getElementsByClass(.buttons)
// let arr = [];
let Id1=true;
let newId;


button1.forEach(function (enter) {
        enter.addEventListener("click", sel); });



        
    function    sel(event) {
         let  operator=event.target.value;
           switch(operator)  {


    case "Create" :
            create();
            break;
    debugger
    case "Read" :
            read();
            break;
     case "Update":
             update();
              break;
      case "Delete":
              deleted();
              break;
       case "Reset":
              reset();
              break;

};

};


    
function create() {
        
 for(let i = 0; i < list.length; i++){
        newArr[i].value = list[i].innerText;
        console.log(newArr);  
        debugger
} 



};

        

function read() {
};

function update() {
};


function deleted() {
};


function reset() {
  
};