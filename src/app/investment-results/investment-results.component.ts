import { Component, Input } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { InvesmentService } from '../invesment.service';

@Component({
  selector: 'app-investment-results',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './investment-results.component.html',
  styleUrl: './investment-results.component.css'
})
export class InvestmentResultsComponent {
    constructor (private invesmentService : InvesmentService) {}

    get results() {
      return this.invesmentService.investments
    }
}
