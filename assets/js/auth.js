let usersDB = [
    { email: "test@gmail.com", phone: "08012345678" }
];
let pendingUser = null; // temporarily hold registration before OTP

// Password strength live check
document.getElementById("password").addEventListener("input", function() {
    let strengthText = document.getElementById("passwordStrength");
    let password = this.value;
    let strength = "Weak";

    let strongRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$");

    if (strongRegex.test(password)) {
        strength = "Strong ✅";
        strengthText.style.color = "green";
    } else if (password.length >= 6) {
        strength = "Medium ⚠️";
        strengthText.style.color = "orange";
    } else {
        strength = "Weak ❌";
        strengthText.style.color = "red";
    }
    strengthText.textContent = "Password Strength: " + strength;
});

// Register form
document.getElementById("registerForm").addEventListener("submit", function(e) {
    e.preventDefault();

    let fullname = document.getElementById("fullname").value.trim();
    let email = document.getElementById("email").value.trim();
    let phone = document.getElementById("phone").value.trim();
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirmPassword").value;
    let referralCode = document.getElementById("referralCode").value.trim(); // optional
    let otpMethod = document.getElementById("otpMethod").value;

    if (usersDB.some(user => user.email === email || user.phone === phone)) {
        alert("❌ This email or phone is already registered!");
        return;
    }

    if (password !== confirmPassword) {
        alert("Passwords do not match!");
        return;
    }

    if (!otpMethod) {
        alert("Please select an OTP method.");
        return;
    }

    // Store pending user with referralCode
    pendingUser = { fullname, email, phone, password, referralCode };

    // Show OTP popup
    document.getElementById("otpMessage").innerText =
        otpMethod === "email"
            ? "We sent an OTP to your email: " + email
            : "We sent an OTP to your phone: " + phone;

    document.getElementById("otpPopup").style.display = "flex";
});

// OTP Verification
function verifyOtp() {
    let otp = document.getElementById("otpInput").value.trim();

    if (otp === "123456") {
        usersDB.push(pendingUser);
        console.log("New User Registered:", pendingUser); // debug
        pendingUser = null;

        document.getElementById("otpPopup").style.display = "none";
        showSuccessPopup();
    } else {
        alert("❌ Invalid OTP. Try again.");
    }
}

// Success Popup
function showSuccessPopup() {
    document.getElementById("successPopup").style.display = "flex";
}

function closePopup() {
    document.getElementById("successPopup").style.display = "none";
    window.location.href = "login.html";
}
