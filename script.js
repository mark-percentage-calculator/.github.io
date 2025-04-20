// Calculate Percentage Function
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
    document.getElementById('result').innerHTML = `
        <div class="result-box">
            <p>Your Percentage:</p>
            <h3>${percentage.toFixed(2)}%</h3>
            <div class="progress-bar">
                <div class="progress" style="width: ${percentage}%"></div>
            </div>
        </div>
    `;
}

// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenu = document.querySelector('.mobile-menu');
    const navbar = document.querySelector('.navbar');
    
    if(mobileMenu) {
        mobileMenu.addEventListener('click', function() {
            navbar.classList.toggle('active');
        });
    }
});
