import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IInvestiment } from '../investment.model';
import { InvesmentService } from '../invesment.service';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {

  constructor(private investmentService : InvesmentService) {}

  enteredInitialInvestment = '0'
  enteredAnnualInvestment = '0'
  enteredExpectedInvestment = '5'
  enteredDuration = '10'

  onSubmit() {
    const investment : IInvestiment= {
      initialInvestment: +this.enteredInitialInvestment,
      annualInvestment: +this.enteredAnnualInvestment,
      expectedReturn: +this.enteredExpectedInvestment,
      duration: +this.enteredDuration
    }

    return this.investmentService.calculateInvestmentResults(investment)
  }
}
