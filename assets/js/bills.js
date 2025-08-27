let selectedBillType = '';
let selectedBiller = '';
let meterNumber = '';
let amount = 0;
const userBalance = 5000; // Example balance

// Step 1: Select bill type (Postpaid/Prepaid)
function selectBillType(billType) {
  selectedBillType = billType;
  document.getElementById('biller-selection-section').style.display = 'block';
  document.getElementById('bill-type-section').style.display = 'none';
}

// Step 2: Select biller (electricity provider)
function selectBiller(biller) {
  selectedBiller = biller;
  document.getElementById('payment-details-section').style.display = 'block';
  document.getElementById('biller-selection-section').style.display = 'none';
}

// Step 3: Enter meter number and amount
function confirmPaymentDetails() {
  meterNumber = document.getElementById('meter-number').value;
  amount = document.getElementById('amount').value;

  // Check if entered amount is greater than balance
  if (!meterNumber || amount < 1000) {
    alert('Please enter a valid meter number and ensure the amount is at least ₦1000.');
  } else if (amount > userBalance) {
    // Show popup if amount exceeds balance
    showInsufficientFundsPopup();
  } else {
    const confirmationText = `
      <strong>Biller:</strong> ${selectedBiller}<br>
      <strong>Meter Number:</strong> ${meterNumber}<br>
      <strong>Amount:</strong> ₦${amount}
    `;
    document.getElementById('confirmation-text').innerHTML = confirmationText;
    document.getElementById('confirmation-popup').style.display = 'block';
    document.getElementById('payment-details-section').style.display = 'none';
  }
}

// Step 4: Show PIN confirmation section
function showPinSection() {
  document.getElementById('pin-section').style.display = 'block';
  document.getElementById('confirmation-popup').style.display = 'none';
}

// Step 5: Process payment
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

// Close confirmation popup
function closeConfirmationPopup() {
  document.getElementById('confirmation-popup').style.display = 'none';
  document.getElementById('payment-details-section').style.display = 'block';
}

// Show insufficient funds popup
function showInsufficientFundsPopup() {
  document.getElementById('insufficient-funds-popup').style.display = 'flex';
}

// Close insufficient funds popup
function closeInsufficientFundsPopup() {
  document.getElementById('insufficient-funds-popup').style.display = 'none';
}
