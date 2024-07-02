// U67724813 
// Alaina Musselwhite

import { calculateInterest } from 'interestRate.js';
import { calculateLoanPayment } from 'loanPayment.js';
import { calculateInvestmentReturn } from 'investmentReturn.js';

// Interest Rate
document.getElementById('calculate-interest').addEventListener('click', () => {
    const principal = parseFloat(document.getElementById('interest-principal').value);
    const rate = parseFloat(document.getElementById('interest-rate').value);
    const time = parseFloat(document.getElementById('interest-time').value);
    if (isNaN(principal) || isNaN(rate) || isNaN(time)) {
        alert("Please enter valid numbers");
        return;
    }
    const interest = calculateInterest(principal, rate, time);
    document.getElementById('interest-result').textContent = `Interest: ${interest.toFixed(2)}`;
});

// Loan Payment
document.getElementById('calculate-loan').addEventListener('click', () => {
    const principal = parseFloat(document.getElementById('loan-principal').value);
    const rate = parseFloat(document.getElementById('loan-rate').value);
    const years = parseFloat(document.getElementById('loan-years').value);
    if (isNaN(principal) || isNaN(rate) || isNaN(years)) {
        alert("Please enter valid numbers");
        return;
    }
    const payment = calculateLoanPayment(principal, rate / 100, years);
    document.getElementById('loan-result').textContent = `Monthly Payment: ${payment.toFixed(2)}`;
});

// Investment Return
document.getElementById('calculate-investment').addEventListener('click', () => {
    const principal = parseFloat(document.getElementById('investment-principal').value);
    const rate = parseFloat(document.getElementById('investment-rate').value);
    const timesCompounded = parseFloat(document.getElementById('investment-times-compounded').value);
    const years = parseFloat(document.getElementById('investment-years').value);
    if (isNaN(principal) || isNaN(rate) || isNaN(timesCompounded) || isNaN(years)) {
        alert("Please enter valid numbers");
        return;
    }
    const futureValue = calculateInvestmentReturn(principal, rate / 100, timesCompounded, years);
    document.getElementById('investment-result').textContent = `Future Value: ${futureValue.toFixed(2)}`;
});