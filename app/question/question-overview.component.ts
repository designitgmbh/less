import {Component, Input} from '@angular/core';

import { 
    Question,
    QuestionLabelComponent,
    BooleanQuestionOverviewComponent,
    FreetextQuestionOverviewComponent
} from './';

@Component({
  selector: 'question-overview',
  templateUrl: 'build/question/question-overview.component.html',
  directives: [QuestionLabelComponent, BooleanQuestionOverviewComponent, FreetextQuestionOverviewComponent]
})
export class QuestionOverviewComponent {
  @Input() question: Question;
  private questionType: string;

  ngOnChanges() {
    this.questionType = (<any>this.question).constructor.name;
  }
}