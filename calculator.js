const togglers = document.getElementsByClassName('button');
var arr_togglers = [...togglers];
const toggleableElements = document.querySelectorAll('[class^="t1"]');
const screenText = document.getElementById('output');

arr_togglers.forEach((element, index) => {
    element.addEventListener('click', () => {
        for(i = 0; i < arr_togglers.length;i++) {
            arr_togglers[i].style.opacity = "0";
        }
        element.style.opacity = "1";
        if (index == 0) {
            toggleTheme(toggleableElements, 1);
        }
        else if (index == 1) {
            toggleTheme(toggleableElements, 2);
        }
        else {
            toggleTheme(toggleableElements, 3);
        }
    });
});

function toggleTheme(elements, newDigit) {
    elements.forEach(element => {
        // Extract the digit from the current class name
        const currentDigit = element.className.match(/\bt(\d)\b/);

        if (currentDigit) {
            element.className = element.className.replace(/\bt\d\b/, `t${newDigit}`);
        }
    });
}

const key_btn = [...document.getElementsByClassName('key')];
var currentValue = "";
var pressedOperator = false;
var firstNumber;
var secondNumber;
var operator;
var result;
key_btn.forEach(element => {
    element.addEventListener('click', () => {
        const value = element.value;
        if(value == "DEL") {
            currentValue = currentValue.slice(0, -1);
        }
        else if(value == "RESET") {
            currentValue = "";
            pressedOperator = false;
            firstNumber = 0;
            secondNumber = 0;
        }
        else if (value == "+" || value == "-" || value == "x" || value == "/" && currentValue != "") {
            operator = value;
            firstNumber = Number(currentValue);
            pressedOperator = true;
            currentValue = "";
            console.log(firstNumber);
        }
        else if(value == "=" && pressedOperator) {
            secondNumber = Number(currentValue);
            switch(operator) {
                case "+":
                    result = firstNumber + secondNumber;
                    break;
                case "-":
                    result = firstNumber - secondNumber;
                    break;
                case "x":
                    result = firstNumber * secondNumber;
                    break;
                case "/":
                    result = firstNumber / secondNumber;
                    break;
            }
            currentValue = result;
            firstNumber = result;
        }
        else {
            currentValue += value;
        }
        screenText.value = currentValue;
    });
});