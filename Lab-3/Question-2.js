function validateForm() {
    let isValid = true;

    const role = document.getElementById("role");
    const email = document.getElementById("email");
    const password = document.getElementById("password");
    const confirmPass = document.getElementById("Confirmpass");

    const emailError = document.getElementById("emailError");
    const passError = document.getElementById("passError");

    email.classList.remove("invalid");
    confirmPass.classList.remove("invalid");
    emailError.textContent = "";
    passError.textContent = "";

    if (role.value === "Student") {
        if (!email.value.endsWith("@student.edu.np")) {
            email.classList.add("invalid");
            emailError.textContent = "Student email must end with @student.edu.np";
            isValid = false;
        }
    }

    if (role.value === "Teacher") {
        if (!email.value.endsWith("@tutor.edu.np")) {
            email.classList.add("invalid");
            emailError.textContent = "Teacher email must end with @tutor.edu.np";
            isValid = false;
        }
    }

    if (password.value !== confirmPass.value) {
        confirmPass.classList.add("invalid");
        passError.textContent = "Passwords do not match";
        isValid = false;
    }

    return isValid;
}
