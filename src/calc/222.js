let clear = document.getElementById("clear");
let pointBtn = document.getElementById("toc");

let num = document.querySelectorAll(".button");
let display = document.getElementById("display");
let operations = document.querySelectorAll(".operator");

let currentNumber = "0";
let newNumber = false;
let pedingOperation = "";

num.forEach(enter => {
    enter.addEventListener('click', numClick);
});

function numClick(event) {
    display.value += event.target.value;
    console.log("click on number");
}

//  num.forEach(enter => {
//    enter.addEventListener('click', numberPress);
//  })

for(let i = 0; i < operations.length; i++){
    let operationBtn = operations[i];
    operationBtn.addEventListener("click", function(e) {
        operation(e.target.textContent);
    });
}

// clearBtn.addEventListener("click", clear);
// pointBtn.addEventListener("click", point);

// function numberPress(num) {
//     // if(newNumber){
//     //     display.value = num;
//     //     display.value = event.target.value;
//     //     // newNumber = false;
//     // } else {
//     //     if(display.value === "0"){
//     //         display.value = num;
//     //     }else {
//     //         display.value += num;
//     //     }
//     // }
// }

function operation(operator) {
    let localOper = display.value;
    if(newNumber && pedingOperation !== "="){
        display.value = currentNumber;
    } else{
        newNumber = true;
        if(pedingOperation === "+"){
            currentNumber = sum(currentNumber, localOper);
        } else if(pedingOperation === "-"){
            currentNumber = minus(currentNumber, localOper);
        } else if(pedingOperation === "*"){
            currentNumber = multiplication(currentNumber, localOper);
        } else if(pedingOperation === "/"){
            currentNumber = division(currentNumber, localOper);
        } else{
            currentNumber = parseFloat(localOper);
        }
        display.value = currentNumber;
        pedingOperation = operator;
    }
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
}

// function clear() {
//     display.value = "0";
//     newNumber = true;
//     currentNumber = "0";
//     pedingOperation = "";
// }

function sum(num1, num2) {
    return (parseFloat(num1) + parseFloat(num2));
}

function minus(num1, num2) {
    return (parseFloat(num1) - parseFloat(num2));
}

function multiplication(num1, num2) {
    return (parseFloat(num1) * parseFloat(num2));
}

function division(num1, num2) {
    return (parseFloat(num1) / parseFloat(num2));
};







// if (a=undefind) {
//  delenie.addEventListener("click", delit);
// displayValue.value += event.target.value;
// }
// function delit() {
//   return a/b;
// }

// function sum() {
//   return a+b;
// }


// function umn() {
//   return a*b;
// }

// function otnim() {
//   return a-b;
// }

// delenie.onclick = function() {
//   retunm a/b
  
// 