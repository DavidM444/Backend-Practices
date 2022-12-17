let currentValue = "0";

let operator = null;

let operand1 = null;

let operand2 = null;

function addDigit(digit) {
    if (currentValue === "0" && operand1 === null) {
        currentValue = String(digit);
    }else {
        currentValue += String(digit);
    }
    if(operator !== null){
        operand2 = parseInt(currentValue)
    }else{
    operand1 = parseInt(currentValue)
    }
    updateDisplay();
};

function updateDisplay(){
    let displayElement = document.getElementById("display")
    displayElement.value = currentValue
};

function addOperator(newOperator) {
    currentValue += newOperator;
    operator = newOperator;
    updateDisplay()
    if (operator !== null && operand1 !== null) {
        currentValue = ""
        }else {
            compute()
        }
};
    
function compute() {
    if (operand2 !== null && operator !== null) {
        let result = 0;
        switch (operator) {  
            case "+":
                result = operand1 + operand2;
                break;
            case "-":
                result = operand1 - operand2;
                break;
            case "*":
                result = operand1 * operand2;
                break;
            case "/":
                result = operand1 / operand2;
                break;
            case "%":
                result = operand1 % operand2;
                break;
            case "x^":
                result = Math.pow(operand1,operand2)
                break;
            case "√":
                result = Math.sqrt(operand2);
                break;
            }
            currentValue = String(result);
            currentValue = operand1 +  operator + operand2 +"="+result
            if(operator === "√"){
                currentValue = operator + operand2 +"="+result
            }
            updateDisplay();
    }else {
        currentValue = "0"
    }  
}
function clean(){
    currentValue = "0"
    operator = null
    operand1 = null
    operand2 = null  
    updateDisplay()
      
    
};

