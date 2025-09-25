document.addEventListener('DOMContentLoaded', () => {
    const display = document.querySelector('.display');
    const buttons = document.querySelectorAll('.buttons button');
    let currentInput = '0';
    let firstOperand = null;
    let operator = null;
    let waitForSecondOperand = false;

    function updateDisplay() {
        display.textContent = currentInput;
    }

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const buttonId = button.id;
            const buttonText = button.textContent;

            if (buttonId === 'clear') {
                currentInput = '0';
                firstOperand = null;
                operator = null;
                waitForSecondOperand = false;
            } else if (buttonId === 'backspace') {
                currentInput = currentInput.slice(0, -1) || '0';
            } else if (buttonId === 'equals' || buttonId === 'equals-large') {
                if (operator && firstOperand !== null) {
                    const secondOperand = parseFloat(currentInput);
                    const result = calculate(firstOperand, secondOperand, operator);
                    currentInput = result.toString();
                    firstOperand = result;
                    operator = null;
                    waitForSecondOperand = true;
                }
            } else if (['add', 'subtract', 'multiply', 'divide'].includes(buttonId)) {
                if (firstOperand === null) {
                    firstOperand = parseFloat(currentInput);
                } else if (operator) {
                    const secondOperand = parseFloat(currentInput);
                    const result = calculate(firstOperand, secondOperand, operator);
                    firstOperand = result;
                    currentInput = result.toString();
                }
                operator = buttonText;
                waitForSecondOperand = true;
            } else if (buttonId === 'decimal') {
                if (!currentInput.includes('.')) {
                    currentInput += '.';
                }
            } else { // Numeros
                if (waitForSecondOperand) {
                    currentInput = buttonText;
                    waitForSecondOperand = false;
                } else {
                    currentInput = currentInput === '0' ? buttonText : currentInput + buttonText;
                }
            }
            updateDisplay();
        });
    });

    function calculate(first, second, op) {
        if (op === '+') return first + second;
        if (op === '-') return first - second;
        if (op === '*') return first * second;
        if (op === '/') return first / second;
        return second;
    }

    updateDisplay();
});