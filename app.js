const expenseName = document.querySelector('#expenseName');
const expenseDate = document.querySelector('#expenseDate');
const expenseAmount = document.querySelector('#expenseAmount');
const tableBody = document.querySelector('#tableBody');
const addExpenseBtn = document.querySelector('#addExpenseBtn');
const exampleRow = document.querySelector('#exampleRow');

let expenseTotal = 0;

let expenseTotalDisplay = document.querySelector("#expenseTotal");
const row = document.createElement('row');

addExpenseBtn.addEventListener('click', myFunction);


function createTable() {
    const deleteBtn = document.createElement("button");
    deleteBtn.setAttribute("id", "deleteBtn");
    deleteBtn.setAttribute("class", "button is-danger");
    deleteBtn.innerText = "x";
    const row = tableBody.insertRow(1);
    let cell1 = row.insertCell(0);
    let cell2 = row.insertCell(1);
    let cell3 = row.insertCell(2);
    let cell4 = row.insertCell(3);
    cell1.innerHTML = `${expenseName.value}`;
    cell2.innerHTML = `${expenseDate.value}`;
    cell3.innerHTML = `${expenseAmount.value}`;
    cell4.append(deleteBtn);
    deleteBtn.addEventListener('click', () => {
        row.remove();
        let addedAmount = parseInt(cell3.innerHTML);
        expenseTotal -= addedAmount;
        expenseTotalDisplay.innerText = expenseTotal;
    })

    let addedAmount = parseInt(expenseAmount.value);
    expenseTotal += addedAmount;
    expenseTotalDisplay.innerText = expenseTotal;
}

function myFunction() {
    if (expenseName.value === '') {
        const nameErrModal = document.querySelector("#nameErrorModal");
        nameErrModal.classList.add('is-active');
        const nameModalDelete = document.querySelector('#nameModalDelete');
        nameModalDelete.addEventListener('click', () => {
        nameErrModal.classList.remove('is-active');
        })
    } else if (expenseDate.value === '') {
        const dateErrModal = document.querySelector('#dateErrorModal')
        dateErrModal.classList.add("is-active");
        const dateModalDelete = document.querySelector("#dateModalDelete");
        dateModalDelete.addEventListener("click", () => {
          dateErrModal.classList.remove("is-active");
        });
    } else if (expenseAmount.value === '') {
        const amountErrModal = document.querySelector("#amountErrorModal");
        amountErrModal.classList.add("is-active");
        const amountModalDelete = document.querySelector("#amountModalDelete");
        amountModalDelete.addEventListener("click", () => {
        amountErrModal.classList.remove("is-active");
        });
    } else {
        createTable();
    }

    expenseName.value = '';
    expenseDate.value = '';
    expenseAmount.value = '';
};
 


