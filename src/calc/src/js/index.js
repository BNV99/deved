"use strict";

var clean = document.querySelectorAll(".clear"); //берем АС

var pointBtn = document.querySelector(".dot"); // берем значение точки

var num = document.querySelectorAll(".button");
var display = document.getElementById("display");
var operations = document.querySelectorAll(".operator");
var ravno = document.querySelectorAll(".ravno");
var helpDisplay = "";
var number1 = '';
var number2 = '';
var operator = '';
var clicked1 = false;
var clicked2 = true;
var clicked3 = false;
display.value = '0';
var newNumber = false;
var pedingOperation = ""; // ПРИНЯТИЕ ЗНАЧЕНИЙ //
// {
//Принимаем цифры и точку.

num.forEach(function (enter) {
  enter.addEventListener('click', numClick);
});
operations.forEach(function (enter) {
  enter.addEventListener('click', operation);
});
clean.forEach(function (enter) {
  enter.addEventListener('click', clearfunk);
}); // pointBtn.addEventListener('click', point);

ravno.forEach(function (enter) {
  enter.addEventListener('click', funcRavno);
}); // }

pointBtn.addEventListener('click', function () {
  if (display.value.indexOf('.') == -1 && display.value != '') {
    if (clicked3 == false && clicked1 == false) {
      number1 = display.value;
      number1 += '.';
      display.value = number1;
      number1 = display.value; // clicked3=true;

      debugger;
    } else if (clicked3 == false && clicked1 == true) {
      // display.value = '0';
      number2 = display.value;
      number2 += '.';
      display.value = number2; // number2=display.value;
    }
  }
});

function numClick(event) {
  if (clicked1 == false && number1.length < 10) {
    
    helpDisplay = display.value;
    helpDisplay += event.target.value;
    number1 = helpDisplay;
    display.value = +number1; // display.value+=helpDisplay;
    // number1=display.value;
  } else if (clicked1 == true && number2.length < 10) {
    

    if (number2 == 0 && display.value != '0.') {
      display.value = '0';
      number2 += display.value;
      number2 += event.target.value;
      ;
      display.value = +number2;
     
    } else {
      number2 = display.value;
      number2 += event.target.value;
      ;
      display.value = +number2;
     
    }
  }
}

;

function operation(event) {
  helpDisplay = '';

  if (number2 != "") {
    display.value = equal(event.target.value);
  }

  operator = event.target.value;
  clicked1 = true;
  
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

function Sum(number1, number2) {
  return number1 + number2;
}

;

function Substr(number1, number2) {
  return number1 - number2;
}

;

function Multiple(number1, number2) {
  return number1 * number2;
}

;

function Divide(number1, number2) {
  return number1 / number2;
}

;

function equal(operator) {
  var result;

  switch (operator) {
    case '+':
      result = Sum(number1, number2);
      break;

    case '-':
      result = Substr(number1, number2);
      break;

    case '*':
      result = Multiple(number1, number2);
      break;

    case '/':
      result = Divide(number1, number2);
      break;
  }

  ;

  if (result == Infinity) {
    result = 'Error';
  } else if (result == undefined) {
    result = 'Error';
  } else if (result == NaN) {
    result = 'Error';
  } else if (result == -Infinity) {
    result = 'Error';
  }

  clicked2 = false;
  number1 = result;
  number2 = '';
  return result;
}

function funcRavno(event) {
  if (number1 === '' || number2 === '') {
    number1 = '';
    number2 = '';
    operator = '';
    display.value = 0;
  } else if (number1 != '' || number2 != '') {
    number1 = +number1;
    number2 = +number2; 

    display.value = equal(operator);
  }
  "use strict";

  var clean = document.querySelectorAll(".clear"); //берем АС
  
  var pointBtn = document.querySelector(".dot"); // берем значение точки
  
  var num = document.querySelectorAll(".button");
  var display = document.getElementById("display");
  var operations = document.querySelectorAll(".operator");
  var ravno = document.querySelectorAll(".ravno");
  var helpDisplay = "";
  var number1 = '';
  var number2 = '';
  var operator = '';
  var clicked1 = false;
  var clicked2 = true;
  var clicked3 = false;
  display.value = '0';
  var newNumber = false;
  var pedingOperation = ""; // ПРИНЯТИЕ ЗНАЧЕНИЙ //
  // {
  //Принимаем цифры и точку.
  
  num.forEach(function (enter) {
    enter.addEventListener('click', numClick);
  });
  operations.forEach(function (enter) {
    enter.addEventListener('click', operation);
  });
  clean.forEach(function (enter) {
    enter.addEventListener('click', clearfunk);
  }); // pointBtn.addEventListener('click', point);
  
  ravno.forEach(function (enter) {
    enter.addEventListener('click', funcRavno);
  }); // }
  
  pointBtn.addEventListener('click', function () {
    if (display.value.indexOf('.') == -1 && display.value != '') {
      if (clicked3 == false && clicked1 == false) {
        number1 = display.value;
        number1 += '.';
        display.value = number1;
        number1 = display.value; // clicked3=true;
  
        debugger;
      } else if (clicked3 == false && clicked1 == true) {
        // display.value = '0';
        number2 = display.value;
        number2 += '.';
        display.value = number2; // number2=display.value;
      }
    }
  });
  
  function numClick(event) {
    if (clicked1 == false && number1.length < 10) {
      
      helpDisplay = display.value;
      helpDisplay += event.target.value;
      number1 = helpDisplay;
      display.value = +number1; // display.value+=helpDisplay;
      // number1=display.value;
    } else if (clicked1 == true && number2.length < 10) {
      
  
      if (number2 == 0 && display.value != '0.') {
        display.value = '0';
        number2 += display.value;
        number2 += event.target.value;
        ;
        display.value = +number2;
       
      } else {
        number2 = display.value;
        number2 += event.target.value;
        ;
        display.value = +number2;
       
      }
    }
  }
  
  ;
  
  function operation(event) {
    helpDisplay = '';
  
    if (number2 != "") {
      display.value = equal(event.target.value);
    }
  
    operator = event.target.value;
    clicked1 = true;
    
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
  
  function Sum(number1, number2) {
    return number1 + number2;
  }
  
  ;
  
  function Substr(number1, number2) {
    return number1 - number2;
  }
  
  ;
  
  function Multiple(number1, number2) {
    return number1 * number2;
  }
  
  ;
  
  function Divide(number1, number2) {
    return number1 / number2;
  }
  
  ;
  
  function equal(operator) {
    var result;
  
    switch (operator) {
      case '+':
        result = Sum(number1, number2);
        break;
  
      case '-':
        result = Substr(number1, number2);
        break;
  
      case '*':
        result = Multiple(number1, number2);
        break;
  
      case '/':
        result = Divide(number1, number2);
        break;
    }
  
    ;
  
    if (result == Infinity) {
      result = 'Error';
    } else if (result == undefined) {
      result = 'Error';
    } else if (result == NaN) {
      result = 'Error';
    } else if (result == -Infinity) {
      result = 'Error';
    }
  
    clicked2 = false;
    number1 = result;
    number2 = '';
    return result;
  }
  
  function funcRavno(event) {
    if (number1 === '' || number2 === '') {
      number1 = '';
      number2 = '';
      operator = '';
      display.value = 0;
    } else if (number1 != '' || number2 != '') {
      number1 = +number1;
      number2 = +number2; 
  
      display.value = equal(operator);
    }
  }