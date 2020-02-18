import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { CommonServiceService } from '../services/common-service.service';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss']
})
export class ReactiveFormComponent implements OnInit {

  constructor(private router: Router, private commonServiceService: CommonServiceService) { }

  ngOnInit() {
    // this.router.url
    this.router.events.subscribe((s) => {
      if (s instanceof NavigationEnd) {
         if( s.urlAfterRedirects == "/Form/ALL"){
            this.commonServiceService.studentPhoto = null;
         }
      }

    });
  }

  newClick() {
    this.router.navigate(['Form', 'New']);
  }

}
