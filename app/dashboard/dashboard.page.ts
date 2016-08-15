import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';

import {
    Study,
    StudyStorage,
    StudyListComponent,
    StudyPage
} from '../study';

@Component({
  templateUrl: 'build/dashboard/dashboard.page.html',
  directives: [StudyListComponent]
})
export class DashboardPage {
  myStudies: Study[] = [];

  constructor(private navigation: NavController, private studies: StudyStorage) {
      this.navigation = navigation;

      this.myStudies = studies.all;
  }
}
