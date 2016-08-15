import {Component, Input} from '@angular/core';
import {NavController} from 'ionic-angular';

import {
    Question,
    QuestionOverviewComponent
} from '../../question';

import { 
    Questionnaire
} from '../';

@Component({
  selector: 'questionnaire-overview',
  templateUrl: 'build/module/questionnaire/questionnaire-overview.component.html',
  directives: [QuestionOverviewComponent]
})
export class QuestionnaireOverviewComponent {
  @Input() questionnaire: Questionnaire;
  question: Question;
  iterator: number;

  constructor(private navigation: NavController) {  
  }

  ngOnInit() {
      this.goToQuestion(0);
  }

  next() {
      this.goToQuestion(this.iterator + 1);
  }

  previous() {
      this.goToQuestion(this.iterator - 1);
  }

  finish() {
    this.questionnaire.passed = true;
    this.navigation.pop();
  }

  private goToQuestion(iterator: number) {
      console.log(iterator);
      if(this.questionnaire.questions[iterator]) {
          this.question = this.questionnaire.questions[iterator];
          this.iterator = iterator;    
      }      
  }
}