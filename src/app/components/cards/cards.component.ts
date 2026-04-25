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

  @Input()
  public parent?: MenuItem;

  //#endregion

  //#region Constructor
  constructor() {}
  //#endregion

  //#region

  public navigate(item: MenuItem): void {
    item.command!.call(item, {item: item, parent: this.parent});
  }

  //#endregion

}
