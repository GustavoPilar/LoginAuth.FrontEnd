import { Component, OnInit } from "@angular/core";
import { MenuItem, PrimeIcons } from "primeng/api";
import { MenuService } from "../../core/services/menu.service";
import { Router } from "@angular/router";
import { SettingsService } from "../../core/services/settings.service";

@Component({
  selector: "app-report",
  standalone: false,
  templateUrl: './report.component.html'
})
export class ReportComponent implements OnInit {

  //#region Fields

  //#endregion

  //#region Constructor
  constructor(
    private menuService: MenuService,
    private settingsService: SettingsService
  ) {
    
  }
  //#endregion

  //#region Members 'On' :: ngOnInit

  public ngOnInit(): void {
    this.settingsService.UpdateItems(this.menuService.GetReport());
  }

  //#endregion

}
