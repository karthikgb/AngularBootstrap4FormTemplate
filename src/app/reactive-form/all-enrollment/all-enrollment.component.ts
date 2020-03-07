import { Component, OnInit } from '@angular/core';
import { CommonServiceService } from 'src/app/services/common-service.service';
import { IStudentModel } from 'src/app/models/config-model';
import{ Router } from '@angular/router';
@Component({
  selector: 'app-all-enrollment',
  templateUrl: './all-enrollment.component.html',
  styleUrls: ['./all-enrollment.component.scss']
})
export class AllEnrollmentComponent implements OnInit {

  constructor(private commonServiceService: CommonServiceService,private router: Router) { }

  students: IStudentModel[] = [];

  ngOnInit() {
    this.commonServiceService.getAllStudentEnrollment().subscribe(data => {
      this.students = data;
    })
  }

  displayStudent(student: IStudentModel) {
    this.router.navigate(['Form','New',student.TempADMNo]);
  }

}
