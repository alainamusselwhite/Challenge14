// Calculate Investment Return

export function calculateInvestmentReturn(principal, rate, time, compounds) {
    const r = rate / 100;
    return principal * Math.pow((1 + r / compounds), compounds * time);
}