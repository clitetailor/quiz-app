import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quiz-page',
  templateUrl: './quiz-page.component.html',
  styleUrls: ['./quiz-page.component.styl']
})
export class QuizPageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  questions = [{
      content: "",
      answers: Array.from({ length: 4 }, (v, k) => {
        return {
          content: "",
          checked: false
        }
      })
  }, {
      content: "",
      answers: Array.from({ length: 4 }, (v, k) => {
        return {
          content: "",
          checked: false
        }
      })
  }]

  chooseAnswer(questionId, answerId) {
    this.questions[questionId].answers[answerId].checked = !this.questions[questionId].answers[answerId].checked;
  }
}
