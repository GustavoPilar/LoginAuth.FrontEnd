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
  public title!: string;

  @Input()
  public subTitle!: string;

  @Input()
  public description!: string;

  @Input()
  public icon: string = "";

  //#endregion

  //#region Constructor

  constructor() {

  }

  //#endregion

}
