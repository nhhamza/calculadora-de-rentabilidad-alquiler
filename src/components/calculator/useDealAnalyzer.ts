import { useState } from "react";

export interface DealInputs {
  purchasePrice: number;
  downPaymentPercent: number;
  interestRate: number;
  loanTerm: number;
  closingCosts: number;
  renovationCosts: number;
  monthlyRent: number;
  propertyTax: number;
  insurance: number;
  hoa: number;
  maintenance: number;
  propertyManagement: number;
  utilities: number;
}

export interface DealResults {
  totalInvestment: number;
  downPayment: number;
  loanAmount: number;
  monthlyMortgage: number;
  grossMonthlyIncome: number;
  effectiveMonthlyIncome: number;
  totalMonthlyExpenses: number;
  monthlyCashFlow: number;
  annualCashFlow: number;
  capRate: number;
  cashOnCash: number;
  dscr: number;
  breakEven: number;
  isProfitable: boolean;
}

const defaultInputs: DealInputs = {
  purchasePrice: 200000,
  downPaymentPercent: 20,
  interestRate: 3.5,
  loanTerm: 30,
  closingCosts: 5000,
  renovationCosts: 0,
  monthlyRent: 1500,
  propertyTax: 1200,
  insurance: 100,
  hoa: 0,
  maintenance: 150,
  propertyManagement: 10,
  utilities: 0
};

export function useDealAnalyzer() {
  const [inputs, setInputs] = useState<DealInputs>(defaultInputs);
  const [results, setResults] = useState<DealResults | null>(null);

  const setInput = (field: keyof DealInputs, value: number) => {
    setInputs((prev) => ({
      ...prev,
      [field]: isNaN(value) ? 0 : value
    }));
  };

  const calculate = () => {
    const {
      purchasePrice,
      downPaymentPercent,
      interestRate,
      loanTerm,
      closingCosts,
      renovationCosts,
      monthlyRent,
      propertyTax,
      insurance,
      hoa,
      maintenance,
      propertyManagement,
      utilities
    } = inputs;

    const downPayment = purchasePrice * (downPaymentPercent / 100);
    const loanAmount = purchasePrice - downPayment;
    const totalInvestment = downPayment + closingCosts + renovationCosts;

    const monthlyRate = interestRate / 100 / 12;
    const numPayments = loanTerm * 12;

    let monthlyMortgage = 0;
    if (loanAmount > 0 && numPayments > 0) {
      if (monthlyRate > 0) {
        monthlyMortgage =
          (loanAmount * monthlyRate * Math.pow(1 + monthlyRate, numPayments)) /
          (Math.pow(1 + monthlyRate, numPayments) - 1);
      } else {
        monthlyMortgage = loanAmount / numPayments;
      }
    }

    const grossMonthlyIncome = monthlyRent;
    const effectiveMonthlyIncome = grossMonthlyIncome;

    const monthlyPropertyTax = propertyTax / 12;
    const propertyManagementFee = monthlyRent * (propertyManagement / 100);

    const totalMonthlyExpenses =
      monthlyMortgage +
      monthlyPropertyTax +
      insurance +
      hoa +
      maintenance +
      propertyManagementFee +
      utilities;

    const monthlyCashFlow = effectiveMonthlyIncome - totalMonthlyExpenses;
    const annualCashFlow = monthlyCashFlow * 12;

    const annualIncome = effectiveMonthlyIncome * 12;
    const annualExpenses = totalMonthlyExpenses * 12 - monthlyMortgage * 12;
    const noi = annualIncome - annualExpenses;

    const capRate = purchasePrice > 0 ? (noi / purchasePrice) * 100 : 0;
    const cashOnCash =
      totalInvestment > 0 ? (annualCashFlow / totalInvestment) * 100 : 0;

    const annualDebtService = monthlyMortgage * 12;
    const dscr = annualDebtService > 0 ? noi / annualDebtService : 0;

    const breakEven =
      grossMonthlyIncome > 0
        ? (totalMonthlyExpenses / grossMonthlyIncome) * 100
        : 0;

    const isProfitable = monthlyCashFlow > 0 && cashOnCash > 6;

    setResults({
      totalInvestment,
      downPayment,
      loanAmount,
      monthlyMortgage,
      grossMonthlyIncome,
      effectiveMonthlyIncome,
      totalMonthlyExpenses,
      monthlyCashFlow,
      annualCashFlow,
      capRate,
      cashOnCash,
      dscr,
      breakEven,
      isProfitable
    });
  };

  const formatCurrency = (value: number) =>
    new Intl.NumberFormat("es-ES", {
      style: "currency",
      currency: "EUR"
    }).format(value);

  const formatPercent = (value: number) => `${value.toFixed(2)}%`;

  return {
    inputs,
    results,
    setInput,
    calculate,
    formatCurrency,
    formatPercent
  };
}
