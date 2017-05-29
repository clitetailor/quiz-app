import { Component, OnInit,OnDestroy } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import {Subscription} from 'rxjs';
import { ReportService } from '../services/report.service';
@Component({
  selector: 'app-report-edit',
  templateUrl: './report-edit.component.html',
  styleUrls: ['./report-edit.component.styl']
})
export class ReportEditComponent implements OnInit,OnDestroy {
  public _id : number;
  public subscription :Subscription;
  public report :any;
 
  constructor(
     private router: Router, private activatedRoute: ActivatedRoute,
       public reportService: ReportService)
  {}

  ngOnInit() {
    this.subscription = this.activatedRoute.params.subscribe(params=>{
      this._id = params['id'];
    });
    this.reportService.GetSingle(this._id).subscribe((data)=>{
      this.report =data;
    });
  }
  GotoReport(){
    this.router.navigate(['report']);
  }
  SaveForm(){
     this.reportService.Update(this._id,this.report).subscribe(response=> {
     if(response){
         alert("Save Success");
            this.router.navigate(['report']);

     }
     })
  }
  ngOnDestroy(){
  this.subscription.unsubscribe();
  }
}