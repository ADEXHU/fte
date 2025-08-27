// Dark Mode
function toggleDarkMode() {
  document.body.classList.toggle("dark");
}

// Open and Close Modals
function openFundingOptions() {
  document.getElementById("fundingModal").style.display = "flex";
}
function openManualFunding() {
  closeModal('fundingModal');
  document.getElementById("manualModal").style.display = "flex";
}
function openMonnifyFunding() {
  closeModal('fundingModal');
  document.getElementById("monnifyModal").style.display = "flex";
}
function closeModal(id) {
  document.getElementById(id).style.display = "none";
}

// Manual Funding Receipt
function submitReceipt() {
  let file = document.getElementById("receiptUpload").files[0];
  if (!file) {
    alert("Please upload your receipt before submitting.");
    return;
  }
  closeModal('manualModal');
  document.getElementById("successMessage").innerText = "Your receipt has been uploaded. Admin will confirm shortly.";
  document.getElementById("successModal").style.display = "flex";
}

// Monnify Simulation
function confirmMonnify(method) {
  closeModal('monnifyModal');
  document.getElementById("successMessage").innerText = `Payment via ${method} successful. Your wallet will be credited.`;
  document.getElementById("successModal").style.display = "flex";

  // Example: increase wallet balance
  let balance = document.getElementById("balance");
  let current = parseInt(balance.innerText.replace(/[₦,]/g, ""));
  let newBalance = current + 2000;
  balance.innerText = "₦" + newBalance.toLocaleString();
}
