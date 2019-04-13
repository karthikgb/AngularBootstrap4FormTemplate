import { Component, OnInit } from '@angular/core';
import{ Router } from '@angular/router';
import { CommonServiceService } from '../services/common-service.service';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss']
})
export class ReactiveFormComponent implements OnInit {

  constructor(private router: Router,private commonServiceService:CommonServiceService) { }

  ngOnInit() {
  }

  newClick(){
    this.commonServiceService.currentViewStudent = null;
    this.router.navigate(['Form']);
    setTimeout(() => {
    this.router.navigate(['Form','New']);
    }, 100);

  }

}
