import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Settings } from "../../providers/settings";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

 selectedTheme: String;

  constructor(public navCtrl: NavController, private settings: Settings) {
    this.settings.getActiveTheme().subscribe(val => this.selectedTheme = val);
  }

    toggleAppTheme() {
    if (this.selectedTheme === 'dark-theme') {
      this.settings.setActiveTheme('light-theme');
    } else {
      this.settings.setActiveTheme('dark-theme');
    }
  }
}
