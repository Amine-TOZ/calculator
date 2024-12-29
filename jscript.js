//add
// subtract
// multiply
// divide

function add(a,b){
    return parseFloat(a)+parseFloat(b);
}

function subtract(a,b){
    return parseFloat(a)-parseFloat(b);
}

function multiply(a,b){
    return parseFloat(a)*parseFloat(b);
}

function divide(a,b){
    return parseFloat(a)/parseFloat(b);
}



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


let firstNumber 
let secondNumber 
let operator 
let container = document.querySelector(".container");
let display = document.querySelector("#display");
let currentValue= "";

   

    container.addEventListener("click",(event)=>{ 
        
            currentValue += event.target.textContent;
            display.textContent = currentValue;

            let  arrNumbers = currentValue.split(/[+\-*/]/).filter((part) => part !== "");
                 firstNumber = arrNumbers[0];
                 secondNumber = arrNumbers[1];
                 operator = currentValue.match(/[+\-*/]/);

            if(arrNumbers.length == 2 && /[+\-*/=]/.test(event.target.textContent)){
                switch (event.target.textContent) {
                    case "+":
                    case "-":
                    case "*":
                    case "/": 
                      currentValue = `${operate(operator[0],firstNumber,secondNumber)}${event.target.textContent}`;
                      display.textContent = currentValue;
                      arrNumbers = [];
                      operator = [];
                        break;
                
                    case "=":
                      currentValue = operate(operator[0],firstNumber,secondNumber);
                      display.textContent = currentValue;
                      arrNumbers = [];
                      operator = [];
                        break; 
                }
               
            }
            
    })
    
    
    

            
    