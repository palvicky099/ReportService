import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-generate-report',
  templateUrl: './generate-report.component.html',
  styleUrls: ['./generate-report.component.scss']
})
export class GenerateReportComponent implements OnInit {
  public reportForm: FormGroup;
  public selectData: any = [];
  constructor(public formBuilder: FormBuilder) {  
  this.createForm();
  }

  ngOnInit() {
    this.selectData = [
      {
      "ListText": "PDF",
      "ListValue": "PDF"
    },
    {
      "ListText": "DOC",
      "ListValue": "DOC"
       }
  ]
  }
  createForm() {
    this.reportForm = this.formBuilder.group({
      username: ['', Validators.required],
      dob: ['', false],
      type: ['', false],   // type false here those felid not required mandatary
    });
  }

  generate(){
   window.open('https://www.alejandrodelasota.org/wp-content/uploads/2013/03/demoform1.pdf');
  }
}
