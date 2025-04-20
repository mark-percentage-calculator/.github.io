document.addEventListener('DOMContentLoaded', function() {
    const calculateBtn = document.getElementById('calculate-btn');
    const obtainedInput = document.getElementById('obtained');
    const totalInput = document.getElementById('total');
    const resultDiv = document.getElementById('result');

    calculateBtn.addEventListener('click', function() {
        // Get values
        const obtained = parseFloat(obtainedInput.value);
        const total = parseFloat(totalInput.value);

        // Validate inputs
        if (isNaN(obtained) {
            showError("Please enter valid obtained marks");
            obtainedInput.focus();
            return;
        }

        if (isNaN(total) || total <= 0) {
            showError("Total marks must be a positive number");
            totalInput.focus();
            return;
        }

        if (obtained < 0) {
            showError("Obtained marks cannot be negative");
            obtainedInput.focus();
            return;
        }

        if (obtained > total) {
            showError("Obtained marks cannot exceed total marks");
            obtainedInput.focus();
            return;
        }

        // Calculate and display
        const percentage = (obtained / total) * 100;
        showResult(percentage);
    });

    function showResult(percentage) {
        resultDiv.innerHTML = `
            <div class="result-content">
                <p>Your Percentage:</p>
                <h3>${percentage.toFixed(2)}%</h3>
                <div class="progress-container">
                    <div class="progress-bar" style="width: ${percentage}%"></div>
                </div>
                <p class="grade">${getGrade(percentage)}</p>
            </div>
        `;
    }

    function showError(message) {
        resultDiv.innerHTML = `<p class="error">${message}</p>`;
    }

    function getGrade(percentage) {
        if (percentage >= 90) return "Grade: A+ (Excellent)";
        if (percentage >= 80) return "Grade: A (Very Good)";
        if (percentage >= 70) return "Grade: B (Good)";
        if (percentage >= 60) return "Grade: C (Average)";
        if (percentage >= 50) return "Grade: D (Below Average)";
        return "Grade: F (Fail)";
    }
});
