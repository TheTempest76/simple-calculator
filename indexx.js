const buttons = document.querySelectorAll(".inner")
const display = document.querySelector("#display")
let firstOperand = 0;
let operator = null
for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function () {


        const buttonText = buttons[i].innerText;
        if(buttonText === "AC"){
            display.value = ""
            firstOperand = 0
            operator = null
        }
        else if(buttonText === "c"){
            display.value = display.value.slice(0,-1)
        }
        else if(isoperator(buttonText)){
            operator = buttonText
            firstOperand= parseFloat(display.value);
            display.value = ""
        }
        else if(buttonText === "=") {
            if(operator){
            const result = operations(firstOperand , parseFloat(display.value) , operator)
            display.value = result
            firstOperand = result
            operator = null
        }
        }
        else {
            display.value += buttonText;
        }
        

    });
}
function isoperator(text){
    return (["+" , "-" , "x" , "/" , "%"]).includes(text)   

}
function operations(firstOperand , secondOperand ,operator){
    
    switch (operator) {
        case "+":
            return firstOperand + secondOperand;
        case "-":
            return firstOperand - secondOperand;
        case "x":
            return firstOperand * secondOperand;
        case "%":
            return firstOperand % secondOperand;
        case "/":
            if (secondOperand === 0) {
                return "Error: Division by zero";
            }
            return firstOperand / secondOperand;
        default:
            return "Error: Invalid operator";
    }
}
//to do : add 0 , clearonechar , and % also read through this code