const pastDisplay = document.querySelector('.past-display');
const currentDisplay = document.querySelector('.current-display');
const opsButtons = Array.from(document.querySelectorAll('.operations-container button'));
const buttonsList = document.querySelectorAll('.numbers-container button');
const clearButton = document.querySelector('.clear');
const calcContainer = document.querySelector('.calc-container');
const buttonsContainer = document.querySelector('.buttons-container');
const otherButtonsContainer = document.querySelector('.other-buttons-container');
const numbersContainer = document.querySelector('.numbers-container');
const clearContainer = document.querySelector('.clear-container');
const display = document.querySelector('.display');
var original = true;

function changeColors(newEquals) {
        buttonsList.forEach((button) => {
            button.style.backgroundColor = '#ffda8a';
            button.style.borderColor = '#5f99f5';
        });
        opsButtons.forEach((button) => {
            button.style.backgroundColor = '#fab85c';
            button.style.borderColor = '#5f99f5';
        });
        newEquals.style.backgroundColor = '#f7bb65';
        newEquals.style.borderColor = '#5f99f5';
        calcContainer.style.backgroundColor = '#e3e3e3';
        otherButtonsContainer.style.backgroundColor = '#e3e3e3';
        numbersContainer.style.backgroundColor = '#e3e3e3';
        clearContainer.style.backgroundColor = '#e3e3e3';
        buttonsContainer.style.backgroundColor = '#e3e3e3';
        display.style.backgroundColor = '#ededed';
        display.style.borderColor = '#858585';
        clearButton.style.backgroundColor = '#fab85c';
        clearButton.style.borderColor = '#5f99f5';   
}

function changeback(newEquals) {
    buttonsList.forEach((button) => {
        button.style.backgroundColor = 'rgb(240, 240, 240)';
        button.style.borderColor = 'buttonborder';
    });
    opsButtons.forEach((button) => {
        button.style.backgroundColor = 'rgb(218, 218, 218)';
        button.style.borderColor = 'buttonborder';
    });
    newEquals.style.backgroundColor = 'rgb(240, 240, 240)';
    newEquals.style.borderColor = 'buttonborder';
    calcContainer.style.backgroundColor = 'blanchedalmond';
    otherButtonsContainer.style.backgroundColor = 'blanchedalmond';
    numbersContainer.style.backgroundColor = 'blanchedalmond';
    clearContainer.style.backgroundColor = 'blanchedalmond';
    buttonsContainer.style.backgroundColor = 'blanchedalmond';
    display.style.backgroundColor = 'aquamarine';
    display.style.borderColor = '#858585';
    clearButton.style.backgroundColor = 'rgb(218, 218, 218)';
    clearButton.style.borderColor = 'buttonborder';
}

function doMath() {
    if (currentDisplay.innerText != '' && pastDisplay.innerText != '') {
        
        const operatorInUse = pastDisplay.innerText.split(' ')[1];

        if (operatorInUse === '+') {
            newText = parseInt(pastDisplay.innerText.split(' ')[0]) + parseInt(currentDisplay.innerText);
        } else if (operatorInUse === '-') {
            newText = parseInt(pastDisplay.innerText.split(' ')[0]) - parseInt(currentDisplay.innerText);
        } else if (operatorInUse === 'x') {
            newText = parseInt(pastDisplay.innerText.split(' ')[0]) * parseInt(currentDisplay.innerText) ;
        } else if (operatorInUse === '/') {
            newText = parseInt(pastDisplay.innerText.split(' ')[0] /  parseInt(currentDisplay.innerText) );
        }
        pastDisplay.innerText = '';
        currentDisplay.innerText = newText;
    }
}

Array.from(buttonsList)
    .forEach((button) => {
        button.addEventListener('click', function(e) {
            currentDisplay.innerText += e.target.innerText;
        });

    });

clearButton.addEventListener('click', function(e) {
    pastDisplay.innerText = '';
    currentDisplay.innerText = '';
})

    opsButtons.forEach((button) => {
        button.addEventListener('click', function(e) {
            if (currentDisplay.innerText != '') {
                doMath();
                pastDisplay.innerText = currentDisplay.innerText + ' ' + e.target.innerText;
                currentDisplay.innerText = '' 
            }
        });
    });

const equals = document.querySelector('.equals');
const newEquals = equals.cloneNode(true)
equals.replaceWith(newEquals);
newEquals.addEventListener('click', function(t) {
    doMath();
});

changeColorsButton = document.querySelector('.change-colors');
changeColorsButton.addEventListener('click', function () {
    if (original) {
        changeColors(newEquals);
        original = false;
    } else {
        changeback(newEquals);
        original = true;
    }
});