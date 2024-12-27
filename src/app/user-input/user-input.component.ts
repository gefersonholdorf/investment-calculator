import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {

  enteredInitialInvestment = '0'
  enteredAnnualInvestment = '0'
  enteredExpectedInvestment = '5'
  enteredDuration = '10'

  onSubmit() {
    console.log('Submit OK!')
    console.log(this.enteredAnnualInvestment)
    console.log(this.enteredExpectedInvestment)
    console.log(this.enteredAnnualInvestment)
    console.log(this.enteredDuration)
  }
}
