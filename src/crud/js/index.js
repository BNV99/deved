let list = document.getElementById('list');
let list2 = document.getElementById('list').children;
let id = document.getElementById('id');
let firstname = document.getElementById('firstname');
let lastname = document.getElementById('lastname');
let age = document.getElementById('age');
let myzn = document.querySelectorAll('.text');
let button = document.querySelectorAll('.button');
let arr = [];
let Id1=true;
let newId;



button.addEventListener('click', function () {
 firstname.value="";
  lastname.value="";
  age.value="";
  id.value="";
switch   (event)  {
    case "Create" :
            create();
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
});
    
function create() {
};

function read() {
};

function update() {
};


function delete1() {
};


function reset() {
};








