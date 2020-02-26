let clear = document.getElementById("clear");
let pointBtn = document.getElementById("toc");

let num = document.querySelectorAll(".button");
let display = document.getElementById("display");
let operations = document.querySelectorAll(".operator");
let ravno= document.getElementById("ravno");


let number1=0;
let number2=0;



let display.value = "0";
let newNumber = false;
let pedingOperation = "";


//Принимаем цифры и точку.

num.forEach(enter => {
    enter.addEventListener('click', numClick);
});

function numClick(event) {
    
    display.value += event.target.value;


   
}
    

//Принимаем значение равно
   

// ravno.forEach(enter => {
//     enter.addEventListener('click', numClickRavno);
// });

// function numClickRavno(event) {
//     b= display.value;
    
    


   
// }
    




//принимаем значения операторов


operations.forEach(enter => {
    enter.addEventListener('click', operation);
});


// function numClick1(event) {
//         if (display!=0) {
          
//             number1=display.value;
//             display.value='';
//             znak+=display.value;
//             console.lod (znak);
//         }
        
    







//  num.forEach(enter => {
//    enter.addEventListener('click', numberPress);
//  })

// for(let i = 0; i < operations.length; i++){
//     let operationBtn = operations[i];
//     operationBtn.addEventListener("click", function(e) {
//         operation(e.target.textContent);
//     });
// }

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






function OperSum(num1, num2) {
    return (parseFloat(num1) + parseFloat(num2));
}

function OperMin(num1, num2) {
    return (parseFloat(num1) - parseFloat(num2));
}

function OperUmn(num1, num2) {
    return (parseFloat(num1) * parseFloat(num2));
}

function OperDel(num1, num2) {
    return (parseFloat(num1) / parseFloat(num2));
};





