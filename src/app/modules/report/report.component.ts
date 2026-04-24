import { Component, OnInit } from "@angular/core";
import { MenuItem, PrimeIcons } from "primeng/api";
import { MenuService } from "../../services/utils/menu.service";
import { Router } from "@angular/router";
import { Settings } from "../../core/settings";

@Component({
  selector: "app-report",
  standalone: false,
  templateUrl: './report.component.html'
})
export class ReportComponent implements OnInit {

  //#region Fields

  public report!: MenuItem;

  //#endregion

  //#region Constructor
  constructor(
    private menuService: MenuService,
    private router: Router
  ) {
    Settings.breadCrumbItems = [
      { label: "Relatório", icon: PrimeIcons.DESKTOP }
    ]
  }
  //#endregion

  //#region Members 'On' :: ngOnInit

  public ngOnInit(): void {
    this.report = this.menuService.GetReport();
  }

  //#endregion

  //#region Members :: navigateTo()

  public navigateTo(routerLink: string): void {
    const url: string = this.report.routerLink + routerLink;
    this.router.navigate([url]);
  }

  //#endregion

}
