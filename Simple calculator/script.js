const display = document.getElementById('display');
const buttons = document.querySelectorAll('.btn');
let expression = '';

// Add event listeners to all buttons
buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.getAttribute('data-value');

        if (value) {
            // Append the clicked button value to the expression
            expression += value;
            updateDisplay(expression);
        } else if (button.id === 'equal') {
            // Calculate and display the result
            try {
                expression = eval(expression);
                updateDisplay(expression);
            } catch (error) {
                updateDisplay('Error');
            }
        } else if (button.id === 'clear') {
            // Clear the expression and display
            expression = '';
            updateDisplay(expression);
        } else if (button.id === 'delete') {
            // Remove the last character from the expression
            expression = expression.slice(0, -1);
            updateDisplay(expression || '0');
        }
    });
});

// Update the display with the current expression
function updateDisplay(value) {
    display.value = value;
}
