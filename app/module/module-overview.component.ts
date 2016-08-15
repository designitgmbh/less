import {Component, Input, AfterViewInit} from '@angular/core';

import { 
    Module,
    Questionnaire,
    QuestionnaireOverviewComponent
} from './';

@Component({
  selector: 'module-overview',
  templateUrl: 'build/module/module-overview.component.html',
  directives: [QuestionnaireOverviewComponent]
})
export class ModuleOverviewComponent implements AfterViewInit {
  @Input() module: Module;
  private moduleType: string;

  ngAfterViewInit() {
      this.moduleType = 'Questionnaire';
  }
}