const availableBalance = 5000.00; // This should come from the backend
const userPassword = "userpassword123"; // This should be securely handled on the server

// Display the available balance
document.getElementById('available-balance').textContent = availableBalance.toFixed(2);

let selectedNetwork = ""; // Store the selected network

// Handle network selection
function selectNetwork(network) {
  selectedNetwork = network; // Update the selected network
  document.getElementById('selected-network').textContent = capitalizeFirstLetter(network); // Update the displayed selected network
  
  // Optionally, update the network image with a border or some other effect to show the selection
  const networks = ['mtn', 'glo', 'airtel', '9mobile'];
  networks.forEach(nw => {
    document.getElementById(`${nw}-img`).style.border = (nw === network) ? "2px solid #4CAF50" : "none";
  });
}

// Capitalize first letter of network name
function capitalizeFirstLetter(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

document.getElementById('airtime-form').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent form submission

  const amount = parseFloat(document.getElementById('amount').value);
  const phoneNumber = document.getElementById('phone-number').value.trim();
  const password = document.getElementById('password').value.trim();

  if (selectedNetwork && amount && phoneNumber && password) {
    // Check if the amount is less than or equal to the balance
    if (amount > availableBalance) {
      alert('Insufficient balance. Please enter a smaller amount.');
      return;
    }

    // Check if the password is correct
    if (password !== userPassword) {
      alert('Incorrect password. Please try again.');
      return;
    }

    // Display confirmation
    document.getElementById('confirm-network').textContent = capitalizeFirstLetter(selectedNetwork);
    document.getElementById('confirm-amount').textContent = amount.toFixed(2);
    document.getElementById('confirm-phone-number').textContent = phoneNumber;

    document.querySelector('.airtime-purchase').style.display = 'none';
    document.getElementById('confirmation').style.display = 'block';
  } else {
    alert('Please fill in all fields.');
  }
});

// Finalize the purchase
function finalizePurchase() {
  alert('Airtime purchase successful!');
  // You can add further integration to process the purchase here
}

// Reset the form to allow the user to edit
function resetForm() {
  document.getElementById('airtime-form').reset();
  document.getElementById('confirmation').style.display = 'none';
  document.querySelector('.airtime-purchase').style.display = 'block';
}

