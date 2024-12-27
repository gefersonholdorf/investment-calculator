export interface IInvestimentResult{
    year: number,
    interest: number,
    valueEndOfYear: number,
    annualInvestment: number,
    totalInterest: number,
    totalAmountInvested: number
}

export interface IInvestiment {
    initialInvestment : number,
    duration : number, 
    expectedReturn : number, 
    annualInvestment : number
}