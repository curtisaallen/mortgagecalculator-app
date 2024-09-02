import { Injectable } from "@angular/core";
@Injectable({ providedIn: 'root'})

export class MortgageService {

    calculateRepaymentMortgage(principal: number, monthlyRate: number, totalPayments: number): number {
        return principal * monthlyRate * Math.pow(1 + monthlyRate, totalPayments) / (Math.pow(1 + monthlyRate, totalPayments) - 1);
      }
    
    calculateInterestOnlyMortgage(principal: number, monthlyRate: number): number {
        return principal * monthlyRate;
    }

}