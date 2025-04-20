document.addEventListener('DOMContentLoaded', function() {
    // Get the calculate button
    const calculateBtn = document.getElementById('calculate-btn');
    
    // Add click event listener
    calculateBtn.addEventListener('click', calculatePercentage);
});

function calculatePercentage() {
    // Get input values
    const obtainedInput = document.getElementById('obtained');
    const totalInput = document.getElementById('total');
    const resultDiv = document.getElementById('result');
    
    const obtained = parseFloat(obtainedInput.value);
    const total = parseFloat(totalInput.value);
    
    // Validate inputs
    if (isNaN(obtained) {
        resultDiv.innerHTML = "Please enter valid obtained marks!";
        obtainedInput.focus();
        return;
    }
    
    if (isNaN(total)) {
        resultDiv.innerHTML = "Please enter valid total marks!";
        totalInput.focus();
        return;
    }
    
    if (total <= 0) {
        resultDiv.innerHTML = "Total marks must be greater than 0!";
        totalInput.focus();
        return;
    }
    
    if (obtained < 0) {
        resultDiv.innerHTML = "Obtained marks cannot be negative!";
        obtainedInput.focus();
        return;
    }
    
    if (obtained > total) {
        resultDiv.innerHTML = "Obtained marks cannot be greater than total marks!";
        obtainedInput.focus();
        return;
    }
    
    // Calculate percentage
    const percentage = (obtained / total) * 100;
    
    // Display result
    resultDiv.innerHTML = `Your Percentage: <span style="color: #e74c3c;">${percentage.toFixed(2)}%</span>`;
}
