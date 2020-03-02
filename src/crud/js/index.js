let list = document.getElementById('list');
let list2 = document.getElementById('list').children;
let id = document.getElementById('id');
let firstname = document.getElementById('firstname');
let lastname = document.getElementById('lastname');
let age = document.getElementById('age');
let myzn = document.querySelectorAll('.text');
let button1 = document.querySelectorAll('.button');
let arr = [];
let Id1=true;
let newId;


button1.forEach(function (enter) {
enter.addEventListener('click', proverka)});











function proverka() {

  let  test1=event.target.value;
    
//  firstname.value="";
//   lastname.value="";
//   age.value="";
//   id.value="";
debugger
switch   (test1)  {
    case "Create" :
            create();
            console.log('creat');
            debugger
            break;
    
    case "Read" :
            read();
            break;
     case "Update":
             update();
              break;
      case "Delete":
              delete1() ;
              break;
       case "Reset":
              reset();
              break;
};
};


    
function create() {

    debugger
};

function read() {
};

function update() {
};


function delete1() {
};


function reset() {
};








