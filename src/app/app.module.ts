import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { MaterialModule } from '@angular/material'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { QuizPageComponent } from './quiz-page/quiz-page.component';
import { QuizEditorComponent } from './quiz-editor/quiz-editor.component';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { QuizInfoComponent } from './quiz-info/quiz-info.component';
import { QuizResultComponent } from './quiz-result/quiz-result.component';
import { ReportManagerComponent } from './report-manager/report-manager.component';
import { LoginComponent } from './login/login.component';
import { UserComponent } from './user/user.component';

const appRoutes = [
  { path: '', component: HomePageComponent },
  { path: 'quiz-info', component: QuizInfoComponent },
  { path: 'quiz', component: QuizPageComponent },
  { path: 'editor', component: QuizEditorComponent },
  { path: 'result', component: QuizResultComponent },
  { path: 'report', component: ReportManagerComponent },
  { path: 'login', component: LoginComponent },
  { path: 'admin', component: AdminPageComponent },
  { path: 'user', component: UserComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    QuizPageComponent,
    QuizEditorComponent,
    AdminPageComponent,
    QuizInfoComponent,
    QuizResultComponent,
    ReportManagerComponent,
    LoginComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    MaterialModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
