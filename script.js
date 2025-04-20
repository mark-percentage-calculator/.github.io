function calculatePercentage() {
    const obtained = parseFloat(document.getElementById('obtained').value);
    const total = parseFloat(document.getElementById('total').value);
    
    if (isNaN(obtained) || isNaN(total)) {
        document.getElementById('result').innerHTML = "Please enter valid numbers!";
        return;
    }
    
    if (total <= 0) {
        document.getElementById('result').innerHTML = "Total marks must be greater than 0!";
        return;
    }
    
    if (obtained > total) {
        document.getElementById('result').innerHTML = "Obtained marks cannot be greater than total marks!";
        return;
    }
    
    const percentage = (obtained / total) * 100;
    document.getElementById('result').innerHTML = `Your Percentage: <span style="color: #e74c3c;">${percentage.toFixed(2)}%</span>`;
}
