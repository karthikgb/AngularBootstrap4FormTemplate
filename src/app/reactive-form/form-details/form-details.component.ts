import { Component, OnInit,OnDestroy } from '@angular/core';
import { IStudentModel } from 'src/app/models/config-model';
import { CommonServiceService } from 'src/app/services/common-service.service';

@Component({
  selector: 'app-form-details',
  templateUrl: './form-details.component.html',
  styleUrls: ['./form-details.component.scss']
})
export class FormDetailsComponent implements OnInit {

  constructor(private commonServiceService:CommonServiceService) { }
  Category = [
    {value: 'SC'},
    {value: 'ST'},
    {value: 'C1'},
    {value: '2A'},
    {value: '2B'},
    {value: '3A'},
    {value: '3B'},
    {value: 'GM'}
  ];


  Courses = [
    {value: 'CBTC'},
    {value: 'DISM'},
    {value: 'DIOM'},
    {value: 'CAP'},
    {value: 'DAP'},
    {value: 'DTP'},
    {value: 'CTTC'}, 
    {value: 'PGDCA'}
  ];

  Fees = [
    {value: 995},
    {value: 1495},
    {value: 1795},
    {value: 1995},
    {value: 2995},
    {value: 2995},
    {value: 5995},
    {value: 6495}
    
  ]


  Eligibility = [
    {value: '5th to 10th'},
    {value: 'SSLC'},
    {value: 'PUC'},
    {value: 'DEGREE'},
    {value: 'PG'},
    {value: 'Others'}
  ]

  studentModel:IStudentModel;



  ngOnInit() {
    if(this.commonServiceService.currentViewStudent == null){
      this.studentModel = this.commonServiceService.emptyModel ;
    } else {
      this.studentModel = this.commonServiceService.currentViewStudent ;
    }

  }

  ngOnDestroy(){
  }


  

}
