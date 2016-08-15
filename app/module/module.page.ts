import {Component, Input} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';

import { Module, ModuleOverviewComponent } from './';

@Component({
  templateUrl: 'build/module/module.page.html',
  directives: [ModuleOverviewComponent]
})
export class ModulePage {
  module: Module;

  constructor(private navigation: NavController, navParams: NavParams) {
      this.module = navParams.get("module");
  }
}
