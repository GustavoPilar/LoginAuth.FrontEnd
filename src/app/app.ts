import { Component } from '@angular/core';
import { MenuItem, PrimeIcons } from 'primeng/api';
import { SettingsService } from './core/services/settings.service';
import { BreadcrumbService } from './core/services/breadcrumb.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.scss'
})
export class App {

  //#region Fields

  public breadCumbHome: MenuItem;

  //#endregion

  //#region Constructor
  constructor(
    public settingsService: SettingsService,
    public breadcrumbService: BreadcrumbService
  ) {
    this.breadCumbHome = this.breadcrumbService.getHome();
    this.breadcrumbService.clear();
  }
  //#endregion

  public clickItem(evt: any): void {
    if (evt.item.icon == PrimeIcons.HOME) {
      this.breadcrumbService.clear();
      this.settingsService.currentParentMenuItem = undefined;
      return;
    }

    let id: number = this.breadcrumbService.getItems().findIndex(x => evt.item);

    this.breadcrumbService.setItems(this.breadcrumbService.getItems().slice(0, id + 1));

  }
  
}
