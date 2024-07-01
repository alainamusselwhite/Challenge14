// Calculate Loan Payment

export function calculateLoanPayment(principal,rate,time) {
    const r = rate/100
    return (principal * r * Math.pow(1 + r, time)) / (Math.pow(1 + r, time)- 1);
}