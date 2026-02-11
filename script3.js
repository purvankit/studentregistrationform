document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from submitting normally

    const username = document.getElementById('username').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const pass = document.getElementById('password').value;
    const confirmPass = document.getElementById('confirmPassword').value;
    const errorDisplay = document.getElementById('errorMessage');

    let errors = [];

    // 1. Empty field check (trim() handles spaces)
    if (!username || !email || !phone || !pass || !confirmPass) {
        errors.push("All fields are required and cannot be empty.");
    }

    // 2. Phone validation (Numeric and 10 digits)
    const phoneRegex = /^[0-9]{10}$/;
    if (!phoneRegex.test(phone)) {
        errors.push("Phone must be exactly 10 numeric digits.");
    }

    // 3. Email validation
    // Regex breakdown: ^[a-zA-Z]+ (letters before @) @ [a-zA-Z]{3} (3 letters) \. [a-zA-Z]{2,3}$ (2 or 3 letters)
    const emailRegex = /^[a-zA-Z]+@[a-zA-Z]{3}\.[a-zA-Z]{2,3}$/;
    if (!emailRegex.test(email)) {
        errors.push("Email format: letters@3letters.2or3letters (e.g., abc@xyz.com)");
    }

    // 4. Password Complexity
    const passRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[&@$#])[A-Za-z\d&@$#]{7,}$/;
    if (!passRegex.test(pass)) {
        errors.push("Password: Min 7 chars, 1 uppercase, 1 digit, 1 special (&,$,#,@).");
    }

    // 5. Password Match
    if (pass !== confirmPass) {
        errors.push("Passwords do not match.");
    }

    // Final check
    if (errors.length > 0) {
        errorDisplay.innerText = errors.join("\n");
    } else {
        errorDisplay.style.color = "green";
        errorDisplay.innerText = "Registration Successful!";
        // You can now proceed with form submission logic here
    }
});