import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quiz-info',
  templateUrl: './quiz-info.component.html',
  styleUrls: ['./quiz-info.component.styl']
})
export class QuizInfoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  quiz = {

  }

  users = [{
    username: "Clite Tailor",
    points: 80
  }, {
    username: "Anna",
    points: 70
  }]

  start() {

  }
}
