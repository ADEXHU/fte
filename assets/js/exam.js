let selectedBiller = '';
let quantity = 0;
let amount = 0;
const userBalance = 5000; // Example balance

// Step 1: Select exam biller (WAEC/NECO/NABTEB)
function selectBiller(biller) {
  selectedBiller = biller;
  document.getElementById('payment-details-section').style.display = 'block';
  document.getElementById('biller-selection-section').style.display = 'none';
}

// Step 2: Confirm payment details
function confirmPaymentDetails() {
  quantity = document.getElementById('quantity').value;

  if (quantity < 1) {
    alert('Please enter a valid quantity.');
  } else {
    // Define exam price for each biller
    if (selectedBiller === 'waec') {
      amount = 1000 * quantity; // Example: ₦1000 per form
    } else if (selectedBiller === 'neco') {
      amount = 1200 * quantity; // Example: ₦1200 per form
    } else if (selectedBiller === 'nabteb') {
      amount = 1500 * quantity; // Example: ₦1500 per form
    }

    // Check if entered amount is greater than balance
    if (amount > userBalance) {
      // Show insufficient funds popup
      showInsufficientFundsPopup();
    } else {
      const confirmationText = `
        <strong>Biller:</strong> ${selectedBiller.toUpperCase()}<br>
        <strong>Quantity:</strong> ${quantity} forms<br>
        <strong>Total Amount:</strong> ₦${amount}
      `;
      document.getElementById('confirmation-text').innerHTML = confirmationText;
      document.getElementById('confirmation-popup').style.display = 'block';
      document.getElementById('payment-details-section').style.display = 'none';
    }
  }
}

// Step 3: Show PIN confirmation section
function showPinSection() {
  document.getElementById('pin-section').style.display = 'block';
  document.getElementById('confirmation-popup').style.display = 'none';
}

// Step 4: Process payment
function processPayment() {
  const pin = document.getElementById('pin').value;
  if (pin === '1234') {  // Sample PIN for demo
    showSuccessPopup();
  } else {
    alert('Incorrect PIN!');
  }
}

// Show success popup
function showSuccessPopup() {
  document.getElementById('success-popup').style.display = 'flex';
}

// Close success popup
function closeSuccessPopup() {
  document.getElementById('success-popup').style.display = 'none';
  // Optionally reset the page here for a new payment
  location.reload();
}

// Show insufficient funds popup
function showInsufficientFundsPopup() {
  document.getElementById('insufficient-funds-popup').style.display = 'flex';
}

// Close insufficient funds popup
function closeInsufficientFundsPopup() {
  document.getElementById('insufficient-funds-popup').style.display = 'none';
}
