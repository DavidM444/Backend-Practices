
// Variable que almacena el valor actual del display de la calculadora
let currentValue = "0";

// Variable que almacena el operador seleccionado
let operator = null;

// Variable que almacena el primer operando
let operand1 = null;

// Variable que almacena el segundo operando
let operand2 = null;

// Función que añade un dígito al valor actual del display
function addDigit(digit) {
    console.log(currentValue,operand1)
    if (currentValue === "0" && operand1 === null) {
        currentValue = String(digit);
        console.log("if 1",currentValue)
        
    } else {
        currentValue += String(digit);
        console.log(currentValue)

        if (operand1 === null) {
            operand1 = parseInt(currentValue)
            
    
        }else{
            operand2 = parseInt(currentValue)
        } 
        console.log("o1",operand1, "o2",operand2,"cy",currentValue, "oper",operator )
    }
    
    console.log(operand1,operand2,currentValue)

    
    updateDisplay();
    

  
};








function updateDisplay(){
    let displayElement = document.getElementById("display")
    displayElement.value = currentValue
};



// Función que añade un operador
function addOperator(newOperator) {
    console.log(currentValue,newOperator)
    
    currentValue += newOperator;
    operator = newOperator;
    
    // Si no se ha seleccionado un operador aún, establecer el operador seleccionado
    if (operator !== null && operand1 !== null && operand2 === null) {
        console.log(operand1)
        console.log(currentValue)
        
        currentValue = ""
        //updateDisplay()
     
        console.log(operator,newOperator,operand1)
        console.log(currentValue)
        }
        else {
            compute()
   
        }
    updateDisplay()
        
    }
    
    

// Función que realiza el cálculo
function compute() {
    
    if (operand1 !== null && operand2 !== null && operator !== null) {
        let result = 0;
        console.log(currentValue, operand1,operand2,operator) 
        switch (operator) {  
            case "+":
                result = operand1 + operand2;
                break;
            case "-":
                result = operand1 - operand2;
                break;
            case "x":
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
                result = Math.sqrt(operand1);
                break;
            
            }


             // Actualizar el valor del display con el resultado del cálculo
            console.log(result)
            currentValue = String(result);
            console.log(currentValue)
            
            updateDisplay();
    
      // Limpiar el estado de la calculadora
     
    }else {
        currentValue = "0"
        console.log("manda el iguyal ", currentValue)
    }  
}

// Función que limpia el estado de la calculadora

function clear() {
    currentValue = ""
    updateDisplay();
}
      // Limpiar los valores de las variables
    
  
    // Actualizar el display para reflejar el valor inicial de la calculadora
    

  
