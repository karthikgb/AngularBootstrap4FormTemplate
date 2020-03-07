import { Component, OnInit } from '@angular/core';
import { CommonServiceService } from 'src/app/services/common-service.service';
import { IStudentModel } from 'src/app/models/config-model';
import { switchMap } from 'rxjs/operators';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {

  constructor(private commonServiceService:CommonServiceService,public route:ActivatedRoute) { }
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
  studentModel:IStudentModel = null;
  CurrentId = null;

  ngOnInit() {
    // if(this.commonServiceService.currentViewStudent == null){
    //   this.studentModel = this.commonServiceService.emptyModel ;
    // } else {
    //   this.studentModel = this.commonServiceService.currentViewStudent ;
    // }

    this.route.paramMap.pipe(
      switchMap((params: ParamMap) => {
        this.CurrentId = params.get('id')
        return this.commonServiceService.getStudent(this.CurrentId);
      }
      )
    ).subscribe((studentTemp: IStudentModel) => {
      if (this.CurrentId == null) {
        this.studentModel = this.commonServiceService.emptyModel;
      } else if (studentTemp == null || studentTemp == undefined) {
        // this.CurrentId = -1;
      } else {
        this.studentModel = studentTemp;
      }
    })


  }

  addNew(){
    this.paidAmount.push( { 'slno': '1', 'Amount': 100, 'Date': '' })
  }

}
