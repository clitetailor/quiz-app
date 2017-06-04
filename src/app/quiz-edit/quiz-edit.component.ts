import { Component, OnInit,OnDestroy } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import {Subscription} from 'rxjs';
import { QuizService } from '../services/quiz.service';
@Component({
  selector: 'app-quiz-edit',
  templateUrl: './quiz-edit.component.html',
  styleUrls: ['./quiz-edit.component.styl']
})
export class ReportEditComponent implements OnInit,OnDestroy {

  ngOnInit() {
  }
}
