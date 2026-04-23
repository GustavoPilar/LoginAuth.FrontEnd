import { Component, OnInit } from "@angular/core";
import { Settings } from "../../core/settings";
import { MenuItem } from "primeng/api";
import { MenuService } from "../../services/utils/menu.service";

@Component({
  selector: "app-home",
  standalone: false,
  templateUrl: "./home.component.html"
})
export class HomeComponent implements OnInit {

  //#region Fields

  public items: MenuItem[] = [];

  //#endregion

  //#region Constructor
  constructor(
    private menuService: MenuService
  ) {
    Settings.showMenu = true;
    this.items = this.menuService.GetMenus();
  }
  //#endregion

  //#region Members 'On' :: OnInit
  public ngOnInit(): void {

  }
  //#endregion

  //#region Members

  //#endregion

}
