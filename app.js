const expenseName = document.querySelector('#expenseName');
const expenseDate = document.querySelector('#expenseDate');
const expenseAmount = document.querySelector('#expenseAmount');
const tableBody = document.querySelector('#tableBody');
const addExpenseBtn = document.querySelector('#addExpenseBtn');
const exampleRow = document.querySelector('#exampleRow');


addExpenseBtn.addEventListener('click', myFunction);

let expenseTotal = 0;
let expenseTotalDisplay = document.querySelector("#expenseTotal");

function myFunction() {
    
    const row = tableBody.insertRow(1);

    const deleteBtn = document.createElement("button");
    deleteBtn.setAttribute("id", "deleteBtn");
    deleteBtn.setAttribute("class", "button is-danger");
    deleteBtn.innerText = "x";

    if (expenseName.value === '') {
        alert('Please fill out the name of the expense');
    } else if (expenseDate.value === '') {
        alert('Please enter the date of the expense');
    } else if (expenseAmount.value === '') {
        alert('Please enter the dollar amount of the expense');
    } else {
        const cell1 = row.insertCell(0);
        const cell2 = row.insertCell(1);
        const cell3 = row.insertCell(2);
        const cell4 = row.insertCell(3);
        cell1.innerHTML = `${expenseName.value}`;
        cell2.innerHTML = `${expenseDate.value}`;
        cell3.innerHTML = `$${expenseAmount.value}`;
        cell4.append(deleteBtn);
    };

    deleteBtn.addEventListener("click", function () {
        row.remove();
        expenseTotal -= parseInt(expenseAmount.value);
    });

    expenseTotal += parseInt(expenseAmount.value);
    expenseTotalDisplay.innerText = expenseTotal;

    expenseName.value = '';
    expenseDate.value = '';
    expenseAmount.value = '';
};

 


