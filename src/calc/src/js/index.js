
let clean = document.querySelectorAll(".clear"); //берем АС
let pointBtn = document.querySelectorAll(".toc");  // берем значение точки
let num = document.querySelectorAll(".button");
let display = document.getElementById("display");
let operations = document.querySelectorAll(".operator");
let ravno= document.querySelectorAll(".ravno");

let helpDisplay = "";

let number1='';
let number2='';
let operator='';

let clicked1 = false;
let clicked2 = true;

display.value = '0';
let newNumber = false;
let pedingOperation = "";



// ПРИНЯТИЕ ЗНАЧЕНИЙ //
// {
//Принимаем цифры и точку.

num.forEach(enter => {
    enter.addEventListener('click', numClick);
});
operations.forEach(enter => {
    enter.addEventListener('click', operation);
});
clean.forEach(enter => {
    enter.addEventListener('click', clearfunk);
});
pointBtn.forEach(enter => {
    enter.addEventListener('click', numClick);
});
ravno.forEach(enter => {
    enter.addEventListener('click', funcRavno);
});


// }



function numClick(event) {
    if (clicked1==false && number1.length < 10) {

          helpDisplay += event.target.value;
          number1 = +helpDisplay;
          display.value = "" + (+helpDisplay);
          // operators = event.target.value;


      // console.log(number1);
    }

        else if (clicked1==true && number2.length < 10) {
            display.value = '0'
            helpDisplay += event.target.value;
            number2 = +helpDisplay;
            display.value= "" + (+helpDisplay);
            // console.log(number2);

        }

};


function operation(event) {
    helpDisplay = '';
    
    if (number2 != ""){
      display.value =  equal(event.target.value);
    }
    operator = event.target.value;
    clicked1 = true;

    console.log(operator);
}






function clearfunk(event) {
    number1 = '';
    number2 = '';
    display.value = '0';
    operator = '';
    clicked1 = false;
    clicked2 = true;
    helpDisplay = '';


}

function point(argument) {
    let localMemory = display.value;
    if(newNumber) {
        localMemory = "0.";
        newNumber = false;
    } else{
        if(localMemory.indexOf(".") === -1){
            localMemory += ".";
        }
    }
    display.value = localMemory;
};






function Sum(number1, number2) {
  return number1 + number2;
};

function Substr(number1, number2) {
  return number1 - number2;
};

function Multiple(number1, number2) {
  
  return number1 * number2;
};

function Divide(number1, number2) {
  return number1 / number2;
};



function equal(operator) {
  let resultOfOperation;
  
  switch (operator) {
    case '+':
      resultOfOperation = Sum(number1,number2);
      break;
    case '-':
      resultOfOperation = Substr(number1, number2);
      break;
    case '*':
      resultOfOperation = Multiple(number1, number2);
      break;
    case '/':
      resultOfOperation = Divide(number1, number2);
      break;
  };
  clicked2 = false;
  number1 = resultOfOperation;
  number2 = '';
  return  resultOfOperation;

}

function funcRavno(event)  {

  if (number1 === '' || number2 === '') {
    number1 = '';
    number2 = '';
    operator = '';
    display.value = 0;
  } 
  
  else if (number1!='' || number2!=''){
    number1 = +number1;
    number2 = +number2;
    // operators=operation();
    // console.log(operators);
    display.value = equal(operator);
  }
};