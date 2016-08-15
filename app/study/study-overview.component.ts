import {Component, Input} from '@angular/core';

import { Study } from './';
import { ModuleListComponent } from '../module';

@Component({
  selector: 'study-overview',
  templateUrl: 'build/study/study-overview.component.html',
  directives: [ModuleListComponent]
})
export class StudyOverviewComponent {
  @Input() study: Study;

  constructor() {
      
  }
}
