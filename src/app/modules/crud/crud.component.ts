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

  public mangerItem!: MenuItem;

  //#endregion

  //#region Constructor
  constructor(
    private menuService: MenuService,
    private router: Router
  ) {
    Settings.breadCrumbItems = [
      { label: "Gerenciamento", icon: PrimeIcons.PENCIL }
    ]
  }
  //#endregion

  //#region Members 'On' :: ngOnInit

  public ngOnInit(): void {
    this.mangerItem = this.menuService.GetManager();
  }

  //#endregion

  //#region Members :: navigateTo()

  public navigateTo(routerLink: string): void {
    this.router.navigate(["manager/list", routerLink]);
  }

  //#endregion

}
