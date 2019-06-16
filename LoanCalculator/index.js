const loanForm = document.getElementById('loan-form');
loanForm.addEventListener('submit', function (e) {
	e.preventDefault();
	// Hide results
	document.getElementById('results').style.display = 'none';
	// Show loader
	document.getElementById('loading').style.display = 'block';
	setTimeout(calculateResults, 2000);

});

function calculateResults() {
	// UI Variables
	const loanAmount = document.getElementById('amount');
	const interest = document.getElementById('interest');
	const yearsToRepay = document.getElementById('years');
	const monthlyPayment = document.getElementById('monthly-payment');
	const totalPayment = document.getElementById('total-payment');
	const totalInterest = document.getElementById('total-interest');

	const principal = parseFloat(loanAmount.value);
	const calculatedInterest = parseFloat(interest.value) / 100 / 12;
	const calculatedPayments = parseFloat(yearsToRepay.value) * 12;

	// Compute monthly payment
	const x = Math.pow(1 + calculatedInterest, calculatedPayments);
	const monthly = principal * x * calculatedInterest / (x - 1);

	if (isFinite(monthly)) {
		monthlyPayment.value = monthly.toFixed(2);
		totalPayment.value = (monthly * calculatedPayments).toFixed(2);
		totalInterest.value = ((monthly * calculatedPayments) - principal).toFixed(2);
		// Show results 
		document.getElementById('results').style.display = 'block';
		// Hide loader
		document.getElementById('loading').style.display = 'none';
	} else {
		showError('Please check your numbers!');
	}
}

// Show Error
function showError(error) {
	// Hide laoder if there's an error
	document.getElementById('loading').style.display = 'none';
	// Hide results
	document.getElementById('results').style.display = 'none';
	const errorDiv = document.createElement('div');
	// Add class
	errorDiv.className = "alert alert-danger";
	// Create text node and append to div
	errorDiv.appendChild(document.createTextNode(error));
	// Get elements
	const card = document.querySelector('.card');
	const heading = document.querySelector('.heading');
	// Insert error above heading
	card.insertBefore(errorDiv, heading);
	// Clear error after 3 seconds
	setTimeout(clearError, 3000);
}

// Clear Error
function clearError() {
	document.querySelector('.alert').remove();
}
