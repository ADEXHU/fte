let selectedService = '';
let selectedPlan = '';
let decoderNumber = '';
let amount = 0;
const userBalance = 5000; // Example balance

// Step 1: Select cable service (DSTV/GOtv/Startimes)
function selectService(service) {
  selectedService = service;
  document.getElementById('decoder-and-plan-section').style.display = 'block';
  document.getElementById('service-selection-section').style.display = 'none';

  populatePlans(selectedService);
}

// Step 2: Populate plans based on the selected service
function populatePlans(service) {
  const plansSection = document.getElementById('plans-section');
  plansSection.innerHTML = ''; // Clear previous plans

  let plans = [];
  if (service === 'dstv') {
    plans = [
      { name: 'DSTV Family', price: 5000 },
      { name: 'DSTV Compact', price: 7500 },
      { name: 'DSTV Premium', price: 12500 }
    ];
  } else if (service === 'gotv') {
    plans = [
      { name: 'GOtv Max', price: 4000 },
      { name: 'GOtv Plus', price: 2500 },
      { name: 'GOtv Value', price: 1500 }
    ];
  } else if (service === 'startimes') {
    plans = [
      { name: 'Startimes Basic', price: 2000 },
      { name: 'Startimes Classic', price: 3500 },
      { name: 'Startimes Super', price: 5000 }
    ];
  }

  plans.forEach(plan => {
    const planCard = document.createElement('div');
    planCard.classList.add('plan-card');
    planCard.innerHTML = `
      <p>${plan.name}</p>
      <p class="price">₦${plan.price}</p>
    `;
    planCard.onclick = () => selectPlan(plan);
    plansSection.appendChild(planCard);
  });
}

// Step 3: Select plan
function selectPlan(plan) {
  selectedPlan = plan;
  amount = plan.price;
  document.getElementById('confirmation-text').innerHTML = `
    <strong>Service:</strong> ${selectedService.toUpperCase()}<br>
    <strong>Plan:</strong> ${selectedPlan.name}<br>
    <strong>Amount:</strong> ₦${amount}
  `;
  document.getElementById('confirmation-popup').style.display = 'block';
  document.getElementById('decoder-and-plan-section').style.display = 'none';
}

// Step 4: Confirm payment
function confirmSubscriptionDetails() {
  decoderNumber = document.getElementById('decoder-number').value;

  if (!decoderNumber || amount < 1000) {
    alert('Please enter a valid decoder number and ensure the amount is at least ₦1000.');
  } else if (amount > userBalance) {
    // Show insufficient funds popup
    showInsufficientFundsPopup();
  } else {
    document.getElementById('confirmation-popup').style.display = 'block';
  }
}

// Step 5: Show PIN confirmation section
function showPinSection() {
  document.getElementById('pin-section').style.display = 'block';
  document.getElementById('confirmation-popup').style.display = 'none';
}

// Step 6: Process payment
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
