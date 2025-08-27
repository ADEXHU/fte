let quantity = 0;
let selectedPlan = 0;
let selectedCard = '';
let cardName = '';
let amount = 0;
const userBalance = 5000; // Example balance

// Step 1: Confirm recharge card details
function confirmRechargeDetails() {
  quantity = document.getElementById('quantity').value;
  selectedPlan = document.getElementById('plan').value;
  cardName = document.getElementById('card-name').value;

  // Check if at least one checkbox is selected
  if (document.getElementById('mtn').checked) selectedCard = 'MTN';
  else if (document.getElementById('glo').checked) selectedCard = 'GLO';
  else if (document.getElementById('airtel').checked) selectedCard = 'Airtel';
  else if (document.getElementById('nine-mobile').checked) selectedCard = '9Mobile';

  if (!quantity || !cardName || !selectedCard) {
    alert('Please fill in all fields and select a card type.');
    return;
  }

  // Calculate total amount based on plan and quantity
  amount = selectedPlan * quantity;

  // Check if entered amount exceeds balance
  if (amount > userBalance) {
    showInsufficientFundsPopup();
  } else {
    const confirmationText = `
      <strong>Card Type:</strong> ${selectedCard}<br>
      <strong>Card Name:</strong> ${cardName}<br>
      <strong>Quantity:</strong> ${quantity}<br>
      <strong>Total Amount:</strong> ₦${amount}
    `;
    document.getElementById('confirmation-text').innerHTML = confirmationText;
    document.getElementById('confirmation-popup').style.display = 'block';
    document.getElementById('recharge-details-section').style.display = 'none';
  }
}

// Step 2: Show PIN confirmation section
function showPinSection() {
  document.getElementById('pin-section').style.display = 'block';
  document.getElementById('confirmation-popup').style.display = 'none';
}

// Step 3: Process payment
function processPayment() {
  const pin = document.getElementById('pin').value;
  if (pin === '1234') {  // Sample PIN for demo
    showSuccessPopup();
    sendCardToEmail(); // Send PDF to email
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

// Simulate sending PDF with printed card details to email
function sendCardToEmail() {
  alert('Your recharge card(s) have been sent to your registered email as a PDF.');
}
