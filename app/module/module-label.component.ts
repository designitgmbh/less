import {Component, Input} from '@angular/core';

import { Module } from './';

@Component({
  selector: 'module-label',
  templateUrl: 'build/module/module-label.component.html'
})
export class ModuleLabelComponent {
  @Input() module: Module;

  constructor() {
      
  }
}
