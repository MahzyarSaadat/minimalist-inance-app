const buttonsArray = document.querySelectorAll(".btn");
const backBtn = document.getElementById("back-operation");
const expensesElement = document.querySelector(".show-expenses");
const incomeShow = document.querySelector(".show-income");
const incomeBtn = document.getElementById("income");
const expenseBtn = document.querySelector("#expences");
const showAmount = document.getElementById("show-numbers");

let sum = 0;
let moneyList = [];

backBtn.onclick = backOperation;
incomeBtn.onclick = addIncome;
expenseBtn.onclick = decreaseIncome;

buttonsArray.forEach((e) =>
  e.addEventListener("click", (e) => {
    let htmlTextContent = e.target.textContent;
    if (e.target.classList.contains("one-thousand")) {
      sum += 1000;
    } else if (e.target.classList.contains("two-thousand")) {
      sum += 2000;
    } else if (e.target.classList.contains("three-thousand")) {
      sum += 3000;
    } else if (e.target.classList.contains("four-thousand")) {
      sum += 4000;
    } else if (e.target.classList.contains("five-thousand")) {
      sum += 5000;
    } else if (e.target.classList.contains("ten-thousand")) {
      sum += 10000;
    }
    moneyList.push(htmlTextContent);
    console.log(sum);
    console.log(moneyList);
    console.log(htmlTextContent);
    showAmount.textContent = "Amount: " + sum;
  })
);

function backOperation() {
  if (moneyList.length > 0) {
    sum -= moneyList.pop();
  } else {
    sum = 0;
  }

  showAmount.textContent = "Amount: " + sum;
  if (sum == NaN) {
    showAmount.textContent = "Amount: " + 0;
  }
}

function addIncome() {
  incomeShow.textContent = "income: " + sum;
}

function decreaseIncome() {
  expensesElement.textContent = "expenses: " + sum;
}
