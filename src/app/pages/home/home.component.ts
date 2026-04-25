import { Component, OnInit } from "@angular/core";
import { MenuItem, PrimeIcons } from "primeng/api";
import { Router } from "@angular/router";
import { MenuService } from "../../core/services/menu.service";
import { SettingsService } from "../../core/services/settings.service";

@Component({
  selector: "app-home",
  standalone: false,
  templateUrl: "./home.component.html"
})
export class HomeComponent implements OnInit {

  //#region Fields

  //#endregion

  //#region Constructor
  constructor(
    private menuService: MenuService,
    private router: Router,
    private settingsService: SettingsService
  ) {
    this.settingsService.showMenu = true;
    this.settingsService.showBreadCrumb = true;
    this.settingsService.showCards = true;
    this.settingsService.currentMenuItems = this.menuService.GetAll();
    this.settingsService.currentHeader = { title: "Home", icon: PrimeIcons.HOME, description: "Escolha por qual caminho você quer começar a utilizar o sistema" }
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
