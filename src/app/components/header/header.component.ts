import { Component, Input, Output } from "@angular/core";
import { MenuItem, PrimeIcons } from "primeng/api";
import { SettingsService } from "../../core/services/settings.service";
import { AppHeader } from "../../core/global";

@Component({
  selector: "app-header",
  standalone: false,
  templateUrl: './header.component.html'
})
export class HeaderComponent {

  //#region Fields

  @Input()
  public header?: AppHeader;

  //#endregion

  //#region Constructor

  constructor(
    private settingsService: SettingsService
  ) {
    const currentItem: MenuItem | undefined = this.settingsService.currentParentMenuItem;
  }

  //#endregion

}
