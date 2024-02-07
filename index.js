document.getElementById("display").innerHTML = "ENTER";

let displayValue = "";
let operator = "";
let number = "";
let num1 = "";
let num2 = "";
let sumCompleted = false;

function displayNumber(clickedButton) {
    if (sumCompleted) {
        clearDisplay();
        sumCompleted = false;
    }
    displayValue += clickedButton;
    number += clickedButton;
    document.getElementById("display").innerHTML = displayValue;
}

function remove() {
    displayValue = displayValue.substring(0, displayValue.length - 1);
    document.getElementById("display").innerHTML = displayValue;
}

function storeNumbers(operatorSelected) {
    displayValue += operatorSelected;
    document.getElementById("display").innerHTML = displayValue;
    num1 = parseFloat(number);
    number = ""
    operator = operatorSelected;
}

function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function divide(num1, num2) {
    return num1 / num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function clearDisplay() {
    displayValue = "";
    operator = "";
    number = "";
    num1 = "";
    num2 = "";
    document.getElementById("display").innerHTML = displayValue;
}

function operate() {
    num2 = parseFloat(number);
    if (operator == "+") {
        displayValue = add(num1, num2);
    }
    if (operator == "-") {
        displayValue = subtract(num1, num2);
    }
    if (operator == "/") {
        displayValue = divide(num1, num2);
    }
    if (operator == "x") {
        displayValue = multiply(num1, num2);
    }
    document.getElementById("display").innerHTML = displayValue;
    sumCompleted = true;
}