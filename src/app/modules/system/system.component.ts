import { SettingsService } from './../../core/services/settings.service';
import { Component, OnInit } from "@angular/core";
import { MenuItem, PrimeIcons } from "primeng/api";
import { MenuService } from "../../core/services/menu.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-system",
  standalone: false,
  templateUrl: "./system.component.html",
})
export class SystemComponent implements OnInit {

  //#region Fields

  //#endregion

  //#region Constructor
  constructor(
    private menuService: MenuService,
    private SettingsService: SettingsService
  ) {
  }
  //#endregion

  //#region Members 'On' :: ngOnInit

  public ngOnInit(): void {
    this.SettingsService.UpdateItems(this.menuService.GetSystem());
  }

  //#endregion

}
