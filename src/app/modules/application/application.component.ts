import { Component, OnInit } from "@angular/core";
import { MenuItem, PrimeIcons } from "primeng/api";
import { MenuService } from "../../services/utils/menu.service";
import { Router } from "@angular/router";
import { Settings } from "../../core/settings";

@Component({
  selector: "app-application",
  standalone: false,
  templateUrl: "./application.component.htm",
})
export class ApplicationComponent implements OnInit {

  //#region Fields

  public applicationItem!: MenuItem;

  //#endregion

  //#region Constructor
  constructor(
    private menuService: MenuService,
    private router: Router
  ) {
    Settings.breadCrumbItems = [
      { label: "Sistema", icon: PrimeIcons.DESKTOP }
    ]
  }
  //#endregion

  //#region Members 'On' :: ngOnInit

  public ngOnInit(): void {
    this.applicationItem = this.menuService.GetApplication();
  }

  //#endregion

  //#region Members :: navigateTo()

  public navigateTo(routerLink: string): void {
    this.router.navigate([this.applicationItem.routerLink, routerLink]);
  }

  //#endregion

}
