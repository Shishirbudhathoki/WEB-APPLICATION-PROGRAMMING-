function addRow() {
    const nameInput = document.getElementById("nameInput");
    const ageInput = document.getElementById("ageInput");
    const tableBody = document.getElementById("tableBody");

    const name = nameInput.value.trim();
    const age = ageInput.value.trim();

    if (!name || !age) {
        alert("Please enter both Name and Age");
        return;
    }

    const row = document.createElement("tr");
    row.innerHTML = `
        <td>${name}</td>
        <td>${age}</td>
        <td><button class="delete-btn" onclick="deleteRow(this)">Delete</button></td>
    `;

    tableBody.appendChild(row);

    nameInput.value = "";
    ageInput.value = "";
    nameInput.focus();
}

function deleteRow(button) {
    const row = button.parentNode.parentNode;
    row.remove();
}

