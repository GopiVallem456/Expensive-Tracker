let expenses = [];
let totalAmount = 0;

const categorySelect = document.getElementById("catagery");
const amountInput = document.getElementById("amout-input");
const dateInput = document.getElementById("date");
const addButton = document.getElementById("add");
const extbody = document.getElementById("ex-tbody");
const total = document.getElementById("Tatal");

addButton.addEventListener('click', function() {
    const category = categorySelect.value;
    const amount = Number(amountInput.value);
    const date = dateInput.value;

    if (category === '') {
        alert("Please select a category");
        return;
    }

    if (isNaN(amount) || amount <= 0) {
        alert("Please enter a valid amount");
        return;
    }

    if (date === '') {
        alert("Please select a date");
        return;
    }

    const expense = { category, amount, date };
    expenses.push(expense);
    totalAmount += amount;
    total.textContent = totalAmount;

    const newRow = extbody.insertRow();
    const categoryCell = newRow.insertCell();
    const amountCell = newRow.insertCell();
    const dateCell = newRow.insertCell();
    const deleteCell = newRow.insertCell();
    const deleteBtn = document.createElement('button');

    categoryCell.textContent = expense.category;
    amountCell.textContent = expense.amount;
    dateCell.textContent = expense.date;
    deleteBtn.textContent = 'Delete';
    deleteBtn.classList.add('delete-btn');
    deleteCell.appendChild(deleteBtn);

    deleteBtn.addEventListener('click', function() {
        const rowIndex = newRow.rowIndex - 1; // Adjust for header row
        const removedExpense = expenses.splice(rowIndex, 1)[0];
        totalAmount -= removedExpense.amount;
        total.textContent = totalAmount;
        extbody.deleteRow(newRow.rowIndex - 1);
    });

    // Clear input fields
    categorySelect.value = '';
    amountInput.value = '';
    dateInput.value = '';
});

// Function to render existing expenses (if needed)
function renderExpenses() {
    for (const expense of expenses) {
        const newRow = extbody.insertRow();
        const categoryCell = newRow.insertCell();
        const amountCell = newRow.insertCell();
        const dateCell = newRow.insertCell();
        const deleteCell = newRow.insertCell();
        const deleteBtn = document.createElement('button');

        categoryCell.textContent = expense.category;
        amountCell.textContent = expense.amount;
        dateCell.textContent = expense.date;
        deleteBtn.textContent = 'Delete';
        deleteBtn.classList.add('delete-btn');
        deleteCell.appendChild(deleteBtn);

        deleteBtn.addEventListener('click', function() {
            const rowIndex = newRow.rowIndex - 1; 
            const removedExpense = expenses.splice(rowIndex, 1)[0];
            totalAmount -= removedExpense.amount;
            total.textContent = totalAmount;
            extbody.deleteRow(newRow.rowIndex - 1);
        });
    }
}

// Call renderExpenses if you have pre-existing data
renderExpenses();
