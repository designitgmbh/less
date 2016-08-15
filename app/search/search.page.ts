import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';

@Component({
  templateUrl: 'build/search/search.page.html'
})
export class SearchPage {
  
  constructor(private navCtrl: NavController) {
      console.log(this.navCtrl);
  }
}
