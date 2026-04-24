import { Component, OnInit } from "@angular/core";
import { MenuService } from "../../services/utils/menu.service";
import { Router } from "@angular/router";
import { MenuItem, PrimeIcons } from "primeng/api";
import { Settings } from "../../core/settings";

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
    private router: Router
  ) {
    this.manager = this.menuService.GetManager();

    Settings.breadCrumbItems = [
      { label: this.manager.label, icon: this.manager.icon }
    ]
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
