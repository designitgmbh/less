import {Component, Input} from '@angular/core';

import { 
    Question
} from '../';

@Component({
  selector: 'boolean-question-overview',
  templateUrl: 'build/question/booleanQuestion/boolean-question-overview.component.html'
})
export class BooleanQuestionOverviewComponent {
  @Input() question: Question;
}