import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ComponentFormComponent } from './component-form/component-form.component';
import { ComponentResultsComponent } from './component-results/component-results.component';
import { MortgageService } from './mortgage.service';
import { MortgageData } from './mortgage.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ComponentFormComponent, ComponentResultsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Mortgage Calculator';
  mortgageData: object = {};
  monthlyRepayment: number | undefined;
  totalRepayment: number | undefined;
  showResults: boolean = false;

  private mortgageService = inject(MortgageService);

  onCalculate(mortgageData: MortgageData) {
      if (mortgageData.amount && mortgageData.term && mortgageData.rate) {
        const monthlyInterestRate = mortgageData.rate / 100 / 12;
        const totalPayments = mortgageData.term * 12;
        if (mortgageData.interest === 'repayment') {
            this.monthlyRepayment = this.mortgageService.calculateRepaymentMortgage(mortgageData.amount, monthlyInterestRate, totalPayments);
            this.totalRepayment = this.monthlyRepayment * totalPayments;
            this.showResults = true;
          } else {
            this.monthlyRepayment = this.mortgageService.calculateInterestOnlyMortgage(mortgageData.amount, monthlyInterestRate);
            this.totalRepayment = (this.monthlyRepayment * totalPayments) + mortgageData.amount;
            this.showResults = true;
        }
      }
  }

  onshowResults(value: boolean) {
       this.showResults = value;
  }
}


