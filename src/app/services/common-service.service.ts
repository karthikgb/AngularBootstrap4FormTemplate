import { Injectable } from '@angular/core';
import * as XLSX from 'xlsx';
import * as FileSaver from 'file-saver';
import { IStudentModel } from '../models/config-model';
import { Observable, Observer } from 'rxjs'
import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

pdfMake.vfs = pdfFonts.pdfMake.vfs;



const EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
const EXCEL_EXTENSION = '.xlsx';

@Injectable({
  providedIn: 'root'
})
export class CommonServiceService {
  pdfMake: pdfMake;

  studentPhoto = null;

  emptyModel = {
    DateOfAdmission: new Date(),
    TempADMNo: null,
    Name: null,
    FatherName: null,
    MotherName: null,
    DateOfBirth: new Date(),
    ContactNo: null,
    AlternateNo: null,
    CurrentAddress: null,
    Courses: null,
    EligibilityQualification: null,
    SSLCRegNo: null,
    AdhaarNo: null,
    Category: null,
    Caste: null,
    Fees: null,
    PermanentAddress: null,
    PaymentStatus: {},
    photo:null
  }

  Allstudents: Array<IStudentModel> = null;

  constructor(private http: HttpClient) {
    this.pdfMake = pdfMake;

  }

  public exportAsExcelFile(json: any[], excelFileName: string): void {

    const worksheet: XLSX.WorkSheet = XLSX.utils.json_to_sheet(json);
    console.log('worksheet', worksheet);
    const workbook: XLSX.WorkBook = { Sheets: { 'data': worksheet }, SheetNames: ['data'] };
    const excelBuffer: any = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
    //const excelBuffer: any = XLSX.write(workbook, { bookType: 'xlsx', type: 'buffer' });
    this.saveAsExcelFile(excelBuffer, excelFileName);
  }

  private saveAsExcelFile(buffer: any, fileName: string): void {
    const data: Blob = new Blob([buffer], {
      type: EXCEL_TYPE
    });
    FileSaver.saveAs(data, fileName + '_export_' + new Date().getTime() + EXCEL_EXTENSION);
  }

  public getAllStudentEnrollment(): Observable<Array<IStudentModel>> {
    if (this.Allstudents == null) {
      return this.http.get('./assets/tempstudentdata.json').pipe(
        map((res: any) => {
          this.Allstudents = <IStudentModel[]>res
          return this.Allstudents;
        }
        )
      )
    } else {
      return Observable.create((observer) => {
        observer.next(this.Allstudents);
        observer.complete();
      })
    }
  }

  public getStudent(id) {
    if (this.Allstudents == null) {
      return this.getAllStudentEnrollment()
        .pipe(map(res => {
          this.Allstudents = <IStudentModel[]>res
          return this.getstudentFun(id);
        }))
    }
    else {
      return Observable.create((observer) => {
        observer.next( this.getstudentFun(id));
        observer.complete();
      })
    }
  }

  private getstudentFun(id){
    return this.Allstudents.filter(a => a.TempADMNo == id)[0];
  }


  public addOrUpdateStudent(student: IStudentModel) {
    var tempStudent = this.Allstudents.filter(s => s.TempADMNo == student.TempADMNo);
    if (tempStudent.length == 0) {
      this.Allstudents.push(student)
    }
  }

  public getPdfStudentDefinition(id){
    return {
      content: [
        {
          text: 'RECEIPT',
          bold: true,
          fontSize: 20,
          alignment: 'center',
          margin: [0, 0, 0, 20]
        }
      ]
    }
  }

}
