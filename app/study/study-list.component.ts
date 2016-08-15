import {Component, Input} from '@angular/core';
import {NavController} from 'ionic-angular';

import { Study, StudyPage, StudyLabelComponent } from './';

@Component({
  selector: 'study-list',
  templateUrl: 'build/study/study-list.component.html',
  directives: [StudyLabelComponent]
})
export class StudyListComponent {
  @Input() studies: Study[];

  constructor(private navigation: NavController) {   
  }

  openStudy(study: Study) {
    this.navigation.push(StudyPage, {
      study: study
    });
  }
}
