document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();

    let name = document.getElementById('name').value.trim();
    let email = document.getElementById('email').value.trim();
    let password = document.getElementById('password').value;

    document.getElementById('nameError').textContent = "";
    document.getElementById('emailError').textContent = "";
    document.getElementById('passwordError').textContent = "";

    let valid = true;

    if (name === "") {
      document.getElementById('nameError').textContent = "Name is required.";
      valid = false;
    }

    let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (email === "") {
      document.getElementById('emailError').textContent = "Email is required.";
      valid = false;
    } else if (!emailPattern.test(email)) {
      document.getElementById('emailError').textContent = "Enter a valid email.";
      valid = false;
    }

    if (password.length < 8) {
      document.getElementById('passwordError').textContent = "Password must be at least 8 characters.";
      valid = false;
    }

    if (valid) {
      alert("Login successful!");
      document.getElementById('loginForm').reset();
    }
  });