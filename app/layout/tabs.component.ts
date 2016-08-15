import {Component} from '@angular/core';

import {SearchPage} from '../search/search.page';
import {DashboardPage} from '../dashboard/dashboard.page';
import {ProfilePage} from '../profile/profile.page';

@Component({
  templateUrl: 'build/layout/tabs.component.html'
})
export class TabsComponent {

  private tab1Root: any;
  private tab2Root: any;
  private tab3Root: any;

  constructor() {
    // this tells the tabs component which Components
    // should be each tab's root Component
    this.tab1Root = SearchPage;
    this.tab2Root = DashboardPage;
    this.tab3Root = ProfilePage;
  }
}
