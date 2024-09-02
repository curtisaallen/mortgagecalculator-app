import { Component, Input } from '@angular/core';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-component-results',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './component-results.component.html',
  styleUrl: './component-results.component.css'
})
export class ComponentResultsComponent {
  @Input({required: true}) monthlyRepayment!: number | undefined;
  @Input({required: true}) totalRepayment!: number | undefined;;
  @Input({required: true}) showResults!: boolean | false;
}
