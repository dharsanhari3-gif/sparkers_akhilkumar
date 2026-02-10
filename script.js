let balance = document.querySelector(".balance-total");
let expense = document.querySelector(".expense-enter");
let income = document.querySelector(".income-enter");
let expensecal = document.querySelector(".expense-total");
let incomecal = document.querySelector(".income-total");
let incomenote = document.querySelector(".income-note");
let expensenote = document.querySelector(".expense-note");
let bact = 0;  // To keep track of the current balance
const incomelist = [];
const expenselist = [];

function incomefun() {
    let incomeNoteText = incomenote.value; // Get the income note
    let inc = parseFloat(income.value); // Convert input value to a number

    if (isNaN(inc) || inc <= 0) {
        alert("Please enter a valid positive number for income");
        return;
    }

    // Add income and note to incomelist
    incomelist.push({ amount: inc, note: incomeNoteText });

    // Update income history
    let incomeHistory = document.querySelector(".incomehis");
    incomeHistory.innerHTML = ""; // Clear previous content
    incomelist.forEach(entry => {
        incomeHistory.innerHTML += `<p>${entry.note}: ${entry.amount.toFixed(2)}</p>`;
    });

    // Update balance and display
    bact += inc;
    incomecal.textContent = `${inc.toFixed(2)}`;
    balance.textContent = `${bact.toFixed(2)}`;

    // Clear input fields
    income.value = "";
    incomenote.value = "";
}

function expensefun() {
    let expenseNoteText = expensenote.value; // Get the expense note
    let exp = parseFloat(expense.value); // Convert input value to a number

    if (isNaN(exp) || exp <= 0) {
        alert("Please enter a valid positive number for expense");
        return;
    }

    // Add expense and note to expenselist
    expenselist.push({ amount: exp, note: expenseNoteText });

    // Update expense history
    let expenseHistory = document.querySelector(".expensehis");
    expenseHistory.innerHTML = ""; // Clear previous content
    expenselist.forEach(entry => {
        expenseHistory.innerHTML += `<p>${entry.note}: ${entry.amount.toFixed(2)}</p>`;
    });

    // Update balance and display
    bact -= exp;
    expensecal.textContent = `${exp.toFixed(2)}`;
    balance.textContent = `${bact.toFixed(2)}`;

    // Clear input fields
    expense.value = "";
    expensenote.value = "";
}


