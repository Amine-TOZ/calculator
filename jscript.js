//add
// subtract
// multiply
// divide
function roundResult(result){
    return (result.toString().length > 7)? result.toFixed(7):result ;
}

function add(a,b){
     return roundResult(a+b);
}

function subtract(a,b){
     return roundResult(a-b);
    }

function multiply(a,b){
    return roundResult(a*b);
}

function divide(a,b){
    return roundResult(a/b);
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
                      currentValue = 
                      `${operate(operator[0],parseFloat(firstNumber),parseFloat(secondNumber))}${event.target.textContent}`;
                      display.textContent = currentValue;
                      arrNumbers = [];
                      operator = [];
                        break;
                
                    case "=":
                      currentValue = operate(operator[0],parseFloat(firstNumber),parseFloat(secondNumber));
                      display.textContent = currentValue;
                      arrNumbers = [];
                      operator = [];
                        break; 
                }
               
            }
            
    })
    
    
    

            
    