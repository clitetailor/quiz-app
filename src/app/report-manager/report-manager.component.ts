import { Component, OnInit } from '@angular/core';
import { ReportService } from '../services/report.service';
@Component({
  selector: 'app-report-manager',
  templateUrl: './report-manager.component.html',
  styleUrls: ['./report-manager.component.styl']
})
export class ReportManagerComponent implements OnInit {
  public reports: any[];
  public keyword: string;
  constructor(private reportService: ReportService) {

  }
  ngOnInit() {
    this.loadData();
  }
  Search() {
    this.reportService.Search(this.keyword).subscribe((response: any) => {
      this.reports = response;
    }, error => {
      console.log("System error API");
    });
  }
  Delete(id: number) {
    let confirmResult = confirm("Are you sure to delete report ?");
    if (confirmResult) {
      this.reportService.Delete(id).subscribe(response => {
        if (response) {
          alert('Delete Success !!!');
          this.loadData();
        }
      })
    }
  }
  loadData() {
    this.reportService.GetList().subscribe((response: any) => {
      this.reports = response;
    }, error => {
      console.log("System error API");
    });
  }
}
