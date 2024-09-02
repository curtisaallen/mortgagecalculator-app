import { Component, Output, EventEmitter, inject, Input} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MortgageData } from '../mortgage.model';

@Component({
  selector: 'app-component-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './component-form.component.html',
  styleUrl: './component-form.component.css'
})
export class ComponentFormComponent {
  amount:number | undefined;  
  term:number | undefined;
  rate:number | undefined;
  interest:string = '';
  @Output() calculate = new EventEmitter<MortgageData>();
  @Output() clear = new EventEmitter<boolean>();
  @Input({required: true}) title!: string;

  handleSubmit() {
    this.calculate.emit({
      amount: this.amount,
      term: this.term,
      rate: this.rate,
      interest: this.interest,
    })
  }

  onHandleClearAll() {
   this.amount = undefined;
   this.term = undefined;
   this.rate = undefined;
   this.interest  = '';
   this.clear.emit(false)
  }
}
