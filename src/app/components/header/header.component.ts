import { Component, Input, Output } from "@angular/core";
import { PrimeIcons } from "primeng/api";

@Component({
  selector: "app-header",
  standalone: false,
  templateUrl: './header.component.html'
})
export class HeaderComponent {

  //#region Fields

  @Input()
  public title: string | null = null;

  @Input()
  public subTitle: string | null = null;

  @Input()
  public description: string | null = null

  @Input()
  public icon: string | null = null;

  //#endregion

  //#region Constructor

  constructor() {

  }

  //#endregion

}
