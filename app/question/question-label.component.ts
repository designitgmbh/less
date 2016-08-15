import {Component, Input} from '@angular/core';

import { 
    Question
} from './';

@Component({
  selector: 'question-label',
  templateUrl: 'build/question/question-label.component.html'
})
export class QuestionLabelComponent {
  @Input() question: Question;
}