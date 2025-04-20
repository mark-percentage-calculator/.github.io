document.addEventListener('DOMContentLoaded', function() {
    const totalMarksInput = document.getElementById('totalMarks');
    const obtainedMarksInput = document.getElementById('obtainedMarks');
    const calculateBtn = document.getElementById('calculateBtn');
    const percentageSpan = document.getElementById('percentage');

    calculateBtn.addEventListener('click', function() {
        const totalMarks = parseFloat(totalMarksInput.value);
        const obtainedMarks = parseFloat(obtainedMarksInput.value);

        if (isNaN(totalMarks) || isNaN(obtainedMarks)) {
            alert('Please enter valid numbers for both Total Marks and Obtained Marks.');
            return;
        }

        if (totalMarks <= 0) {
            alert('Total Marks must be greater than zero.');
            return;
        }

        if (obtainedMarks > totalMarks) {
            alert('Obtained Marks cannot be greater than Total Marks.');
            return;
        }

        const percentage = (obtainedMarks / totalMarks) * 100;
        percentageSpan.textContent = percentage.toFixed(2);
    });
});
