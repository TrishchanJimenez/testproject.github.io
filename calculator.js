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
key_btn.forEach(element => {
    element.addEventListener('click', () => {
        if(element.value == "DEL") {
            currentValue = currentValue.slice(0, -1);
        }
        else if(element.value == "RESET") {
            currentValue = "";
        }
        else {
            currentValue += element.value;
        }
        screenText.value = currentValue;
    });
});