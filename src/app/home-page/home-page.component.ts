import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.styl']
})
export class HomePageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  tabs = [
    "Lastest",
    "Trend",
    "Math",
    "Chemistry"
  ]

  activeTab = 0;

  quizs = [{

  }]

  switchTab(i) {
    if (this.activeTab !== i) {
      this.activeTab = i;
    }
  }
}
