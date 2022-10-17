const calculator = {
    displayValue: '0',
    firstOperand: null,
    operator: null,
    waitingForSeconOperand: false, 
}


//learning how to upday display and use the butttons

function updateDisplay() {
    // seact the html element that will show the output
    const display = document.querySelector(".calculator-screen");
    display.value = calculator.displayValue;
}

const keys = document.querySelector(".calculator-keys");

keys.addEventListener('click', (e) => {
    const {target } = e;
});

//updateDisplay();