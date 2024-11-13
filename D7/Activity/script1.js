const amount = document.getElementById("amount");
const rate = document.getElementById("rate");
const term = document.getElementById("term");

function calculateLoanPayment(principal, annualRate, months) {
  const monthlyRate = annualRate / 100 / 12;

  const monthlyPayment =
    (principal * monthlyRate * Math.pow(1 + monthlyRate, months)) /
    (Math.pow(1 + monthlyRate, months) - 1);

  return monthlyPayment;
}

document.getElementById("calculate").addEventListener("click", (event) => {
  event.preventDefault();

  const months = parseFloat(term.value) * 12;
  const loan = calculateLoanPayment(
    parseFloat(amount.value),
    parseFloat(rate.value),
    months
  );

  document.getElementById(
    "loan"
  ).textContent = `Monthly Payment: $${loan.toFixed(2)}`;
});
