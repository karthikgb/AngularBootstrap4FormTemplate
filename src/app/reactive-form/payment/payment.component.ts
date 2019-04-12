import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {

  constructor() { }
  Courses = [
    { value: 'CBTC' },
    { value: 'DISM' },
    { value: 'DIOM' },
    { value: 'CAP' },
    { value: 'DAP' },
    { value: 'DTP' },
    { value: 'CTTC' },
    { value: 'PGDCA' }
  ];


  Fees = [
    { value: '995' },
    { value: '1495' },
    { value: '1795' },
    { value: '1995' },
    { value: '2995' },
    { value: '2995' },
    { value: '5995' },
    { value: '6495' }
  ];

  feesAmont: number = 2000;
  paidAmount: Array<any> = [
    { 'slno': '1', 'Amount': 100, 'Date': '' },
    { 'slno': '2', 'Amount': 200, 'Date': '' }
  ]

  ngOnInit() {
  }

  addNew(){
    this.paidAmount.push( { 'slno': '1', 'Amount': 100, 'Date': '' })
  }

}
