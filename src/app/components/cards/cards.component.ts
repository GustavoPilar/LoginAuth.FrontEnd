import { Component, EventEmitter, Input, Output } from "@angular/core";
import { MenuItem } from "primeng/api";

@Component({
  selector: "app-cards",
  standalone: false,
  templateUrl: "./cards.component.html"
})
export class CardsComponent {

  //#region Fields

  @Input()
  public items: MenuItem[] = [];

  @Output()
  public onRouter: EventEmitter<string> = new EventEmitter<string>();

  //#endregion

  //#region Constructor
  constructor() {}
  //#endregion

  //#region

  public navigateTo(routerLink: string, target?: string): void {
    let route: string = "";

    if (target)
      route += target;

    route += routerLink;

    this.onRouter.emit(route);
  }

  //#endregion

}
