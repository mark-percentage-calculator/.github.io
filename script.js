function calculatePercentage() {
    // Get input values
    const obtained = parseFloat(document.getElementById('obtained').value);
    const total = parseFloat(document.getElementById('total').value);
    
    // Validate inputs
    if (isNaN(obtained) {
        showError("Please enter valid obtained marks");
        return;
    }
    
    if (isNaN(total) {
        showError("Please enter valid total marks");
        return;
    }
    
    if (total <= 0) {
        showError("Total marks must be greater than 0");
        return;
    }
    
    if (obtained < 0) {
        showError("Obtained marks cannot be negative");
        return;
    }
    
    if (obtained > total) {
        showError("Obtained marks cannot exceed total marks");
        return;
    }
    
    // Calculate and display result
    const percentage = (obtained / total) * 100;
    showResult(percentage);
}

function showResult(percentage) {
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `
        <div class="result-content">
            <p>Your Percentage Score:</p>
            <h3>${percentage.toFixed(2)}%</h3>
            <div class="progress-container">
                <div class="progress-bar" style="width: ${Math.min(percentage, 100)}%"></div>
            </div>
            <p class="result-message">${getResultMessage(percentage)}</p>
        </div>
    `;
}

function showError(message) {
    document.getElementById('result').innerHTML = `
        <div class="error-message">
            <p>${message}</p>
        </div>
    `;
}

function getResultMessage(percentage) {
    if (percentage >= 90) return "Excellent performance!";
    if (percentage >= 75) return "Very good score!";
    if (percentage >= 60) return "Good result!";
    if (percentage >= 40) return "Passing score";
    return "Needs improvement";
}
