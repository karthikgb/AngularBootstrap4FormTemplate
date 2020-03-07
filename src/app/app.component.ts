import { Component, HostListener ,AfterViewInit} from '@angular/core';
import { CommonServiceService } from './services/common-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'AngularElectronReactiveFormApp';

  constructor(public commonServiceService: CommonServiceService){

  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.commonServiceService.innerWidth = window.innerWidth;
  }
  
  ngAfterViewInit(){
    this.onResize("");
  }
}
