import { Component, OnInit } from "@angular/core";
import { Settings } from "../../core/settings";

@Component({
  selector: "app-home",
  standalone: false,
  templateUrl: "./home.component.html"
})
export class HomeComponent implements OnInit {

  //#region Fields

  //#endregion

  //#region Constructor
  constructor() {
    Settings.showMenu = true;
  }
  //#endregion

  //#region Members 'On' :: OnInit
  public ngOnInit(): void {

  }
  //#endregion

  //#region Members

  //#endregion

}
