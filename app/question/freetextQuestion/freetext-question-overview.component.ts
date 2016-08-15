import {Component, Input} from '@angular/core';

import { 
    Question
} from '../';

@Component({
  selector: 'freetext-question-overview',
  templateUrl: 'build/question/freetextQuestion/freetext-question-overview.component.html'
})
export class FreetextQuestionOverviewComponent {
  @Input() question: Question;
}