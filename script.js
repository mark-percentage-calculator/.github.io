document.addEventListener('DOMContentLoaded', function() {
    const calculateBtn = document.getElementById('calculate-btn');
    const totalMarksInput = document.getElementById('total-marks');
    const obtainedMarksInput = document.getElementById('obtained-marks');
    const resultDiv = document.getElementById('result');
    const percentageSpan = document.getElementById('percentage');
    const gradeSpan = document.getElementById('grade');
    const statusSpan = document.getElementById('status');

    calculateBtn.addEventListener('click', calculatePercentage);

    function calculatePercentage() {
        // Get input values
        const totalMarks = parseFloat(totalMarksInput.value);
        const obtainedMarks = parseFloat(obtainedMarksInput.value);

        // Validate inputs
        if (isNaN(totalMarks) || isNaN(obtainedMarks)) {
            alert('Please enter valid numbers for both fields');
            return;
        }

        if (totalMarks <= 0) {
            alert('Total marks must be greater than 0');
            return;
        }

        if (obtainedMarks < 0) {
            alert('Obtained marks cannot be negative');
            return;
        }

        if (obtainedMarks > totalMarks) {
            alert('Obtained marks cannot be greater than total marks');
            return;
        }

        // Calculate percentage
        const percentage = (obtainedMarks / totalMarks) * 100;
        
        // Determine grade and status
        const { grade, status } = getGradeAndStatus(percentage);

        // Display results
        percentageSpan.textContent = percentage.toFixed(2);
        gradeSpan.textContent = grade;
        statusSpan.textContent = status;
        
        // Style based on status
        styleResult(status);
        
        // Show result
        resultDiv.style.display = 'block';
    }

    function getGradeAndStatus(percentage) {
        let grade, status;
        
        if (percentage >= 90) {
            grade = 'A+';
            status = 'Excellent';
        } else if (percentage >= 80) {
            grade = 'A';
            status = 'Very Good';
        } else if (percentage >= 70) {
            grade = 'B';
            status = 'Good';
        } else if (percentage >= 60) {
            grade = 'C';
            status = 'Average';
        } else if (percentage >= 50) {
            grade = 'D';
            status = 'Below Average';
        } else {
            grade = 'F';
            status = 'Fail';
        }
        
        return { grade, status };
    }

    function styleResult(status) {
        const resultBox = document.querySelector('.result-box');
        
        // Reset all possible classes
        resultBox.classList.remove('excellent', 'very-good', 'good', 'average', 'below-average', 'fail');
        
        // Add appropriate class based on status
        switch(status.toLowerCase()) {
            case 'excellent':
                resultBox.classList.add('excellent');
                break;
            case 'very good':
                resultBox.classList.add('very-good');
                break;
            case 'good':
                resultBox.classList.add('good');
                break;
            case 'average':
                resultBox.classList.add('average');
                break;
            case 'below average':
                resultBox.classList.add('below-average');
                break;
            case 'fail':
                resultBox.classList.add('fail');
                break;
        }
    }
});
