const passwordInput = document.getElementById("password");
const toggleButton = document.getElementById("toggleBtn");
const statusText = document.getElementById("statusText");

toggleButton.addEventListener("click", function () {
    if (passwordInput.type === "password") {
        passwordInput.type = "text";
        toggleButton.textContent = "Hide";
        statusText.textContent = "Password is shown";
    } else {
        passwordInput.type = "password";
        toggleButton.textContent = "Show";
        statusText.textContent = "Password is hidden";
    }
});
