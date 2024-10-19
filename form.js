document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting normally

    // Get the values from the form
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const travelType = document.getElementById('travelType').value;

    // Basic validation checks
    const outputDiv = document.getElementById('output');
    outputDiv.innerHTML = ''; // Clear previous output

    if (password !== confirmPassword) {
        outputDiv.innerHTML = <p id="errorMessage">Passwords do not match!</p>;
        return;
    }

    if (!validateEmail(email)) {
        outputDiv.innerHTML = <p id="errorMessage">Invalid email format!</p>;
        return;
    }

    // Simulate storing user data (this should be done securely in a backend)
    const userData = {
        name: name,
        email: email,
        phone: phone,
        password: password, // WARNING: Never store plain passwords in production
        travelType: travelType
    };

    // Display confirmation message
    outputDiv.innerHTML = `<h2>Signup Successful!</h2>
                           <p>Name: ${userData.name}</p>
                           <p>Email: ${userData.email}</p>
                           <p>Phone: ${userData.phone}</p>
                           <p>Travel Type: ${userData.travelType}</p>`;
    
    // Optionally, you can clear the form after submission
    this.reset();
});

// Email validation function
function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}