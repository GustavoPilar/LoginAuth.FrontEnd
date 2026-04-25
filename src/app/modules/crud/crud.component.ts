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

  public manager: MenuItem;

  //#endregion

  //#region Constructor
  constructor(
    private menuService: MenuService,
    private settingsService: SettingsService,
    private router: Router
  ) {
    this.settingsService.currentParentMenuItem = this.menuService.GetManager();
    this.settingsService.currentMenuItems = this.settingsService.currentParentMenuItem.items!;

    const current: MenuItem = this.settingsService.currentParentMenuItem;
    this.settingsService.currentHeader = { title: current.label!, description: current.tooltip, icon: current.icon };

    this.manager = this.menuService.GetManager();
  }
  //#endregion

  //#region Members 'On' :: ngOnInit

  public ngOnInit(): void {

  }

  //#endregion

  //#region Members :: navigateTo()

  public navigateTo(routerLink: string): void {
    let route: string = this.manager.routerLink + routerLink;

    this.router.navigate([route]);
  }

  //#endregion

}
