const expenseName = document.querySelector('#expenseName');
const expenseDate = document.querySelector('#expenseDate');
const expenseAmount = document.querySelector('#expenseAmount');
const tableBody = document.querySelector('#tableBody');
const addExpenseBtn = document.querySelector('#addExpenseBtn');
const exampleRow = document.querySelector('#exampleRow');

addExpenseBtn.addEventListener('click', myFunction);

function myFunction() {
    const row = tableBody.insertRow(1);
    const cell1 = row.insertCell(0);
    const cell2 = row.insertCell(1);
    const cell3 = row.insertCell(2);
    const cell4 = row.insertCell(3);
    
    const deleteBtn = document.createElement('button');
    deleteBtn.setAttribute('id', 'deleteBtn');
    deleteBtn.innerText = 'x';
    deleteBtn.addEventListener('click', function() {
        row.remove();
    })

    cell1.innerHTML = `${expenseName.value}`;
    cell2.innerHTML = `${expenseDate.value}`;
    cell3.innerHTML = `$${expenseAmount.value}`;
    cell4.append(deleteBtn);

    expenseName.value = '';
    expenseDate.value = '';
    expenseAmount.value = '';

    exampleRow.remove();
}


 


