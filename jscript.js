//add
// subtract
// multiply
// divide

function roundResult(result){
    return (result.toString().length > 7)? parseFloat(result.toFixed(7)):result ;
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
    if (b === 0) {
        return "Error"; 
    }
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

            
            if(event.target.tagName === "BUTTON") {
                
                if(currentValue.includes("Error")) currentValue = "";
    
                currentValue += event.target.textContent;
                display.textContent = currentValue;
    
                let  arrNumbers = currentValue.split(/[+\-*/]/).filter((part) => part !== "" && part !== "=");
                     firstNumber = parseFloat(arrNumbers[0]);
                     secondNumber = parseFloat(arrNumbers[1]);
                     operator = currentValue.match(/[+\-*/]/g);
                   
                if(arrNumbers.length == 2 && /[+\-*/=]/.test(event.target.textContent)){
                    switch (event.target.textContent) {
                        case "+":
                        case "-":
                        case "*":
                        case "/": 
                          currentValue = 
                          `${operate(operator.at(-1),firstNumber,secondNumber)}${event.target.textContent}`;
                          display.textContent = currentValue;
                            break;
                    
                        case "=":
                          currentValue = operate(operator.at(-1),firstNumber,secondNumber);
                          display.textContent = currentValue;
                            break; 
                    }
                   
                } else if(arrNumbers.length < 2 &&  event.target.textContent == "=") {
                    currentValue = currentValue.replace(/[+\-*/=]/g,"");
                    display.textContent = currentValue;
                }
            }
    })
    
    
    

            
    