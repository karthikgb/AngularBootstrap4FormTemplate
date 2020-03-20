import { Component, OnInit } from '@angular/core';
import { CommonServiceService } from '../services/common-service.service';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent implements OnInit {

  constructor(private commonServiceService: CommonServiceService) { }

  ngOnInit() {
    this.commonServiceService.getStudent(234234).subscribe(x => {
      this.OpenPdf()
    });
    
  }
  

  OpenPdf() {
    var dd = this.commonServiceService.getPdfStudentDefinition(123445);



    const pdfDocGenerator = this.commonServiceService.pdfMake.createPdf(dd);
    pdfDocGenerator.getDataUrl((dataUrl) => {

      const targetElement = document.querySelector('.iframeContainer');
      while (targetElement.firstChild) {
        targetElement.removeChild(targetElement.firstChild);
      }

      const iframe = document.createElement('iframe');
      iframe.src = dataUrl;
      iframe.width = "100%";
      iframe.height = '500px';
      iframe.frameBorder = "0";
      iframe.scrolling = "no";
      targetElement.appendChild(iframe);
    });
  }


}
