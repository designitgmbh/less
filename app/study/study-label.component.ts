import {Component, Input} from '@angular/core';

import { Study } from './';

@Component({
  selector: 'study-label',
  templateUrl: 'build/study/study-label.component.html'
})
export class StudyLabelComponent {
  @Input() study: Study;

  constructor() {
      
  }
}
