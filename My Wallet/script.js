document.addEventListener('DOMContentLoaded', init);

function init() {
    loadBudget();
    loadTransactions();
}

function loadBudget() {
    let totalBudget = parseFloat(localStorage.getItem('totalBudget')) || 0.00;
    document.getElementById('budget-amount').textContent = totalBudget.toFixed(2);
}

function loadTransactions() {
    let transactions = JSON.parse(localStorage.getItem('transactions')) || [];

    const transactionList = document.getElementById('transaction-items');
    transactionList.innerHTML = '';

    transactions.forEach(transaction => {
        const listItem = document.createElement('li');
        listItem.className = 'transaction-item';
        listItem.innerHTML = `
            <span>${transaction.type === 'income' ? 'Income' : 'Expense'}: $${transaction.amount.toFixed(2)}</span>
            <button onclick="removeTransaction(${transaction.id})">Delete</button>
        `;
        transactionList.appendChild(listItem);
    });
}

function addTransaction() {
    const incomeInput = document.getElementById('income');
    const expenseInput = document.getElementById('expense');

    const income = parseFloat(incomeInput.value) || 0.00;
    const expense = parseFloat(expenseInput.value) || 0.00;

    if (income === 0 && expense === 0) {
        alert('Please enter a valid income or expense amount.');
        return;
    }

    const transaction = {
        id: new Date().getTime(),
        type: income > 0 ? 'income' : 'expense',
        amount: income > 0 ? income : -expense
    };

    let transactions = JSON.parse(localStorage.getItem('transactions')) || [];
    transactions.push(transaction);

    localStorage.setItem('transactions', JSON.stringify(transactions));

    let totalBudget = parseFloat(localStorage.getItem('totalBudget')) || 0.00;
    totalBudget += transaction.amount;
    localStorage.setItem('totalBudget', totalBudget.toFixed(2));

    loadBudget();
    loadTransactions();

    incomeInput.value = '';
    expenseInput.value = '';
}

function removeTransaction(id) {
    let transactions = JSON.parse(localStorage.getItem('transactions')) || [];
    const transactionIndex = transactions.findIndex(transaction => transaction.id === id);

    if (transactionIndex !== -1) {
        let totalBudget = parseFloat(localStorage.getItem('totalBudget')) || 0.00;
        totalBudget -= transactions[transactionIndex].amount;
        localStorage.setItem('totalBudget', totalBudget.toFixed(2));

        transactions.splice(transactionIndex, 1);
        localStorage.setItem('transactions', JSON.stringify(transactions));

        loadBudget();
        loadTransactions();
    }
}
