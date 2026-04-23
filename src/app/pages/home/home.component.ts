import { Component, OnInit } from "@angular/core";
import { Settings } from "../../core/settings";
import { MenuItem } from "primeng/api";
import { MenuService } from "../../services/utils/menu.service";
import { Router } from "@angular/router";

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
    private menuService: MenuService,
    private router: Router
  ) {
    Settings.showMenu = true;
    Settings.showBreadCrumb = true;
    Settings.breadCrumbItems = [];
    this.items = this.menuService.GetMenus();
  }
  //#endregion

  //#region Members 'On' :: OnInit
  public ngOnInit(): void {

  }
  //#endregion

  //#region Members :: navigateTo()

    public navigateTo(target: string): void {
    this.router.navigate([target]);
  }

  //#endregion

}
