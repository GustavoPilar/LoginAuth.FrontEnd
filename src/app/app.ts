import { Component, signal } from '@angular/core';
import { Settings } from './core/settings';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.scss'
})
export class App {

  //#region Fields
  settings = Settings;
  //#endregion

  //#region Constructor
  constructor(

  ) {
  }
  //#endregion

}
