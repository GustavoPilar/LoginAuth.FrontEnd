import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { MenuItem, PrimeIcons } from "primeng/api";
import { MenuService } from "../../core/services/menu.service";
import { SettingsService } from "../../core/services/settings.service";

@Component({
  selector: "app-crud",
  standalone: false,
  templateUrl: "./crud.component.html"
})
export class CrudComponent implements OnInit {

  //#region Fields

  // public manager: MenuItem;

  //#endregion

  //#region Constructor
  constructor(
    private menuService: MenuService,
    private settingsService: SettingsService
  ) {
    this.settingsService.UpdateItems(this.menuService.GetManager());
  }
  //#endregion

  //#region Members 'On' :: ngOnInit

  public ngOnInit(): void {

  }

  //#endregion

}
