//add
// subtract
// multiply
// divide

function add(a,b){
    return a+b;
}

function subtract(a,b){
    return a-b;
}

function multiply(a,b){
    return a*b;
}

function divide(a,b){
    return a/b;
}

let firstNumber
let secondNumber
let operator

function operate(operator,firstNumber,secondNumber){
    switch (operator) {
        case "+":
            return add(firstNumber,secondNumber)
        case "-":
           return subtract(firstNumber,secondNumber)    
        case "*":
           return multiply(firstNumber,secondNumber)    
        case "/":
           return divide(firstNumber,secondNumber)    
    }
}

let container = document.querySelector(".container");
let display = document.querySelector("#display");
let displayValue;
let i = 0
    container.addEventListener("click",(event)=>{ 
        display.textContent = event.target.textContent;
        displayValue = event.target.textContent;
        console.log(event)

        if(i === 0 && (parseFloat(displayValue)!== NaN)){
            firstNumber = parseFloat(displayValue);
        }

        if(i === 1 && (parseFloat(displayValue)!== NaN)){
            secondNumber = parseFloat(displayValue);
        }

        if(displayValue === "+"||
           displayValue === "-"||
           displayValue === "*"||
           displayValue === "/"){
             operator = displayValue;
             i++
           }
        

        if(displayValue === "="){ 
             console.log(operate(operator,firstNumber,secondNumber));
            
        }
        
    })
    
    
