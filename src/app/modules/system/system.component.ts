import { Component, OnInit } from "@angular/core";
import { MenuItem, PrimeIcons } from "primeng/api";
import { MenuService } from "../../services/utils/menu.service";
import { Router } from "@angular/router";
import { Settings } from "../../core/settings";

@Component({
  selector: "app-system",
  standalone: false,
  templateUrl: "./system.component.html",
})
export class SystemComponent implements OnInit {

  //#region Fields

  public system!: MenuItem;

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
    this.system = this.menuService.GetSystem();
  }

  //#endregion

  //#region Members :: navigateTo()

  public navigateTo(routerLink: string): void {
    const url: string = this.system.routerLink + routerLink;
    this.router.navigate([url]);
  }

  //#endregion

}
