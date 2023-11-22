function validateLogin() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    if (username === "student" && password === "I <3 IWT") {
        alert("Login successful!");
    } else {
        alert("Invalid username or password. Please try again.");
    }
}
