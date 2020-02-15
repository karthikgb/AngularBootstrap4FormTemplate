import { Injectable } from '@angular/core';
import * as XLSX from 'xlsx';
import * as FileSaver from 'file-saver';
import { IStudentModel } from '../models/config-model';
import { Observable, Observer } from 'rxjs'
import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";
pdfMake.vfs = pdfFonts.pdfMake.vfs;



const EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
const EXCEL_EXTENSION = '.xlsx';

@Injectable({
  providedIn: 'root'
})
export class CommonServiceService {
  pdfMake: pdfMake;

  currentViewStudent: IStudentModel = null;
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
  }

  Allstudents: Array<IStudentModel> = null;

  constructor() {
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
    var students: Array<IStudentModel> = [{
      DateOfAdmission: new Date(2019, 4, 10),
      TempADMNo: 123445,
      Name: 'Mantu',
      FatherName: 'kiran',
      MotherName: 'roopa',
      DateOfBirth: new Date(2019, 4, 10),
      ContactNo: 9856985685,
      AlternateNo: 565235626,
      CurrentAddress: 'jhgdjhagdjhgjahjgh jgj jh',
      Courses: 'DISM',
      EligibilityQualification: 'DEGREE',
      SSLCRegNo: 'asassa123',
      AdhaarNo: 12302545620,
      Category: '2B',
      Caste: 'Hindu',
      Fees: 5995,
      PermanentAddress: 'sdfsdfsfd dsf sd',
      PaymentStatus: {},
    },
    {
      DateOfAdmission: new Date(2019, 4, 10),
      TempADMNo: 234234,
      Name: 'karthik',
      FatherName: 'kiran',
      MotherName: 'roopa',
      DateOfBirth: new Date(2019, 4, 10),
      ContactNo: 234234234324,
      AlternateNo: 32423423,
      CurrentAddress: 'jhgdjhagdjhgjahjgh jgj jh',
      Courses: 'CBTC',
      EligibilityQualification: 'DEGREE',
      SSLCRegNo: 'asassa123',
      AdhaarNo: 234324,
      Category: '2B',
      Caste: 'Hindu',
      Fees: 5995,
      PermanentAddress: 'sdfsdfsfd dsf sd',
      PaymentStatus: {},
    },
    {
      DateOfAdmission: new Date(2019, 4, 10),
      TempADMNo: 5656656,
      Name: 'rakesh',
      FatherName: 'kiran',
      MotherName: 'roopa',
      DateOfBirth: new Date(2019, 4, 10),
      ContactNo: 5676756756,
      AlternateNo: 565235626,
      CurrentAddress: 'jhgdjhagdjhgjahjgh jgj jh',
      Courses: 'CBTC',
      EligibilityQualification: 'DEGREE',
      SSLCRegNo: 'asassa123',
      AdhaarNo: 12302545620,
      Category: '2B',
      Caste: 'Hindu',
      Fees: 5995,
      PermanentAddress: 'sdfsdfsfd dsf sd',
      PaymentStatus: {},
    },
    {
      DateOfAdmission: new Date(2019, 4, 10),
      TempADMNo: 123446,
      Name: 'kiran',
      FatherName: 'kiran',
      MotherName: 'roopa',
      DateOfBirth: new Date(2019, 4, 10),
      ContactNo: 9856985685,
      AlternateNo: 565235626,
      CurrentAddress: 'jhgdjhagdjhgjahjgh jgj jh',
      Courses: 'CBTC',
      EligibilityQualification: 'DEGREE',
      SSLCRegNo: 'asassa123',
      AdhaarNo: 12302545620,
      Category: '2B',
      Caste: 'Hindu',
      Fees: 5995,
      PermanentAddress: 'sdfsdfsfd dsf sd',
      PaymentStatus: {},
    },
    {
      DateOfAdmission: new Date(2019, 4, 10),
      TempADMNo: 123446,
      Name: 'Mantu',
      FatherName: 'kiran',
      MotherName: 'roopa',
      DateOfBirth: new Date(2019, 4, 10),
      ContactNo: 9856985685,
      AlternateNo: 565235626,
      CurrentAddress: 'jhgdjhagdjhgjahjgh jgj jh',
      Courses: 'DISM',
      EligibilityQualification: 'DEGREE',
      SSLCRegNo: 'asassa123',
      AdhaarNo: 12302545620,
      Category: '2B',
      Caste: 'Hindu',
      Fees: 5995,
      PermanentAddress: 'sdfsdfsfd dsf sd',
      PaymentStatus: {},
    },
    {
      DateOfAdmission: new Date(2019, 4, 10),
      TempADMNo: 123446,
      Name: 'Anil',
      FatherName: 'kiran',
      MotherName: 'roopa',
      DateOfBirth: new Date(2019, 4, 10),
      ContactNo: 9856985685,
      AlternateNo: 565235626,
      CurrentAddress: 'jhgdjhagdjhgjahjgh jgj jh',
      Courses: 'CBTC',
      EligibilityQualification: 'DEGREE',
      SSLCRegNo: 'asassa123',
      AdhaarNo: 12302545620,
      Category: '2B',
      Caste: 'Hindu',
      Fees: 5995,
      PermanentAddress: 'sdfsdfsfd dsf sd',
      PaymentStatus: {},
    }
    ];

    return Observable.create((observer) => {
      if (this.Allstudents == null) {
        this.Allstudents = students;
      }
      observer.next(this.Allstudents);
      observer.complete();
    })


  }


  public addNewStudent(student: IStudentModel) {
    var tempStudent = this.Allstudents.filter(s => s.TempADMNo == student.TempADMNo);
    if (tempStudent.length == 0) {
      this.Allstudents.push(student)
    }
  }

}
