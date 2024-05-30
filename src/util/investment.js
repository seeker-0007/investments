export function calculateInvestmentResults({
  initialInvestment,
  annualInvestment,
  expectedReturn,
  duration,
}) {
  const annualData = [];
  let investmentValue = initialInvestment;
  let totalInterest = 0;
  let investedCapital = initialInvestment;

  for (let i = 0; i < duration; i++) {
    const interest = investmentValue * (expectedReturn / 100);
    totalInterest += interest;
    investmentValue += interest + annualInvestment;
    investedCapital += annualInvestment;

    annualData.push({
      year: i + 1,
      investmentValue: formatter.format(Math.round(investmentValue)),
      interest: formatter.format(Math.round(interest)),
      totalInterest: formatter.format(Math.round(totalInterest)),
      investedCapital: formatter.format(investedCapital),
    });
  }

  return annualData;
}

export const formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  minimumFractionDigits: 0,
  maximumFractionDigits: 0,
});
