import {Component, Input} from '@angular/core';
import {NavController} from 'ionic-angular';

import {
    Module,
    ModulePage,
    ModuleLabelComponent
} from './';

@Component({
  selector: 'module-list',
  templateUrl: 'build/module/module-list.component.html',
  directives: [ModuleLabelComponent]
})
export class ModuleListComponent {
  @Input() modules: Module[];

  constructor(private navigation: NavController) {  
  }

  activate(module: Module) {
      this.navigation.push(ModulePage, {
          module: module
      });
  }
}