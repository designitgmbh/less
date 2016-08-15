import {Component, Input} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';

import { Study, StudyStorage, StudyOverviewComponent } from './';

@Component({
  templateUrl: 'build/study/study.page.html',
  directives: [StudyOverviewComponent]
})
export class StudyPage {
  study: Study;
  storage: StudyStorage;

  constructor(private navigation: NavController, navParams: NavParams, storage: StudyStorage) {
      this.navigation = navigation;
      this.storage = storage;

      this.study = navParams.get("study");
  }
}
