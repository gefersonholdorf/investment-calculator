import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IInvestiment } from '../investment.model';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {

  @Output() calculate = new EventEmitter<IInvestiment>()

  enteredInitialInvestment = '0'
  enteredAnnualInvestment = '0'
  enteredExpectedInvestment = '5'
  enteredDuration = '10'

  onSubmit() {
    return this.calculate.emit({
      initialInvestment: +this.enteredInitialInvestment,
      annualInvestment: +this.enteredAnnualInvestment,
      expectedReturn: +this.enteredExpectedInvestment,
      duration: +this.enteredDuration
    })
  }
}
