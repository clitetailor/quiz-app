import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ReportService } from '../services/report.service';

@Component({
  selector: 'app-report-add',
  templateUrl: './report-add.component.html',
  styleUrls: ['./report-add.component.styl']
})
export class ReportAddComponent implements OnInit {
 public _id : number;
  public report :any;
 
  constructor(
     private router: Router, private activatedRoute: ActivatedRoute,
       public reportService: ReportService)
  {}

  ngOnInit() {
  this.report={};
  }
  SaveForm(){
     this.reportService.Add(this.report).subscribe(response=> {
     if(response){
         alert("Add Report Success !!!");
            this.router.navigate(['report']);

     }
     })
  }
}
