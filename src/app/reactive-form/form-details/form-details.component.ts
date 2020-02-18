import { Component, OnInit, OnDestroy } from '@angular/core';
import { IStudentModel } from 'src/app/models/config-model';
import { CommonServiceService } from 'src/app/services/common-service.service';
import { Route, Router, ActivatedRoute, ParamMap } from '@angular/router'
import { switchMap } from 'rxjs/operators';
declare let printThis;
declare let $;


@Component({
  selector: 'app-form-details',
  templateUrl: './form-details.component.html',
  styleUrls: ['./form-details.component.scss']
})
export class FormDetailsComponent implements OnInit {

  constructor(private commonServiceService: CommonServiceService, private router: Router, private route: ActivatedRoute) { }
  Category = [
    { value: 'SC' },
    { value: 'ST' },
    { value: 'C1' },
    { value: '2A' },
    { value: '2B' },
    { value: '3A' },
    { value: '3B' },
    { value: 'GM' }
  ];


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
    { value: 995 },
    { value: 1495 },
    { value: 1795 },
    { value: 1995 },
    { value: 2995 },
    { value: 2995 },
    { value: 5995 },
    { value: 6495 }

  ]


  Eligibility = [
    { value: '5th to 10th' },
    { value: 'SSLC' },
    { value: 'PUC' },
    { value: 'DEGREE' },
    { value: 'PG' },
    { value: 'Others' }
  ]

  studentModel: IStudentModel = null;
  CurrentId = null;


  ngOnInit() {
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

  ngOnDestroy() {
  }


  OpenPdf() {
    var dd = {
      content: [
        'First paragraph',
        'kkk'
      ]
    }


    const pdfDocGenerator = this.commonServiceService.pdfMake.createPdf(dd);
    pdfDocGenerator.getDataUrl((dataUrl) => {

      const targetElement = document.querySelector('.iframeContainer');
      while (targetElement.firstChild) {
        targetElement.removeChild(targetElement.firstChild);
      }

      const iframe = document.createElement('iframe');
      iframe.src = dataUrl;
      iframe.width = "100%";
      iframe.height = (window.innerHeight - 100) + 'px';
      iframe.frameBorder = "0";
      iframe.scrolling = "no";
      targetElement.appendChild(iframe);
    });
  }


  save() {
    this.commonServiceService.addOrUpdateStudent(this.studentModel);
    this.router.navigate(['/Form/ALL']);
  }

  fileChanged(e) {
    const file = e.target.files[0];
    this.getBase64(file);
  }

  getBase64(file) {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      this.commonServiceService.studentPhoto = reader.result as string;
    };
    reader.onerror = (error) => {
      console.log('Error: ', error);
    };
  }

}
