import { Component, OnInit,OnDestroy } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { QuizService } from '../services/quiz.service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-quiz-detail',
  templateUrl: './quiz-detail.component.html',
  styleUrls: ['./quiz-detail.component.styl']
})
export class QuizDetailComponent implements OnInit {

  ngOnInit() {

  }

}
