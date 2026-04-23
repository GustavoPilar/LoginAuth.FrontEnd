import { Component, signal } from '@angular/core';
import { Settings } from './core/settings';
import { MenuItem, PrimeIcons } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.scss'
})
export class App {

  //#region Fields
  public settings = Settings;

  public breadCumbHome: MenuItem;
  //#endregion

  //#region Constructor
  constructor() {
    this.breadCumbHome = {
      // label: "Home",
      icon: PrimeIcons.HOME,
      routerLink: "/home"
    }
  }
  //#endregion

}
