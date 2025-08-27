// Data bundles for each network and category
const dataBundles = {
  mtn: {
    smeData: [
      { name: '500MB', price: 200 },
      { name: '1GB', price: 400 },
      { name: '2GB', price: 700 }
    ],
    corporateData: [
      { name: '5GB', price: 1500 },
      { name: '10GB', price: 3000 },
      { name: '20GB', price: 5000 }
    ],
    giftData: [
      { name: '100MB', price: 100 },
      { name: '500MB', price: 200 }
    ]
  },
  glo: {
    smeData: [
      { name: '500MB', price: 180 },
      { name: '1GB', price: 350 }
    ],
    corporateData: [
      { name: '5GB', price: 1400 },
      { name: '10GB', price: 2800 }
    ],
    giftData: [
      { name: '200MB', price: 120 },
      { name: '500MB', price: 300 }
    ]
  },
  airtel: {
    smeData: [
      { name: '500MB', price: 150 },
      { name: '1GB', price: 300 }
    ],
    corporateData: [
      { name: '5GB', price: 1400 },
      { name: '10GB', price: 2800 }
    ],
    giftData: [
      { name: '200MB', price: 100 },
      { name: '500MB', price: 250 }
    ]
  },
  "9mobile": {
    smeData: [
      { name: '500MB', price: 180 },
      { name: '1GB', price: 350 }
    ],
    corporateData: [
      { name: '5GB', price: 1500 },
      { name: '10GB', price: 3000 }
    ],
    giftData: [
      { name: '200MB', price: 120 },
      { name: '500MB', price: 250 }
    ]
  }
};

let selectedNetwork = '';
let selectedCategory = '';
let selectedBundle = {};

// Step 1: select network
function selectNetwork(network) {
  selectedNetwork = network;
  document.getElementById('category-section').style.display = 'block';
  document.getElementById('network-section').style.display = 'none';
}

// Step 2: select category
function selectCategory(category) {
  selectedCategory = category;
  const bundlesContainer = document.getElementById('bundles');
  bundlesContainer.innerHTML = ''; // clear previous bundles

  const bundles = dataBundles[selectedNetwork][selectedCategory];
  bundles.forEach(bundle => {
    const div = document.createElement('div');
    div.classList.add('bundle-card');
    div.innerHTML = `<p>${bundle.name}</p><p class="price">₦${bundle.price}</p>`;
    div.onclick = () => selectBundle(bundle);
    bundlesContainer.appendChild(div);
  });

  document.getElementById('bundle-section').style.display = 'block';
  document.getElementById('confirm-section').style.display = 'none';
}

// Step 3: select bundle
function selectBundle(bundle) {
  selectedBundle = bundle;
  document.getElementById('confirm-text').innerText = `You selected ${selectedNetwork.toUpperCase()} - ${selectedCategory} - ${bundle.name} for ₦${bundle.price}`;
  document.getElementById('confirm-section').style.display = 'block';
}

// Step 4: confirm purchase
function confirmPurchase() {
  const pin = document.getElementById('pin').value;
  if(pin === '1234') { // demo PIN check
    showSuccessPopup();
  } else {
    alert('Incorrect PIN!');
  }
}

// Show the success popup after purchase
function showSuccessPopup() {
  document.getElementById('success-popup').style.display = 'flex';
}

// Close the success popup
function closeSuccessPopup() {
  document.getElementById('success-popup').style.display = 'none';
}

// Go to the next step after entering phone number
function nextStep() {
  const phoneNumber = document.getElementById('phone-number').value;
  if (phoneNumber) {
    document.getElementById('network-section').style.display = 'block';
    document.getElementById('phone-number-section').style.display = 'none';
  } else {
    alert('Please enter a valid phone number.');
  }
}
