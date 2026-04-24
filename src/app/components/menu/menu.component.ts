import { Component, OnInit } from "@angular/core";
import { MenuItem, PrimeIcons } from "primeng/api";
import { MenuService } from "../../services/utils/menu.service";
import { DialogService, DynamicDialogRef } from "primeng/dynamicdialog";
import { SettingsComponent } from "../settings/settings.component";
import { Router } from "@angular/router";

@Component({
  selector: "app-menu",
  standalone: false,
  templateUrl: "./menu.component.html"
})
export class MenuComponent implements OnInit {

  //#region Fields

  /** Menu bar expandido? (mobile) */
  public expanded: boolean = false;

  /** Itens de menu */
  public items: MenuItem[] = [];

  public settingsDialogRef: DynamicDialogRef<SettingsComponent> | null = null;

  //#endregion

  //#region Constructor
  constructor(
    private menuService: MenuService,
    private dialogService: DialogService,
    private router: Router
  ) {
  }
  //#endregion

  //#region Members 'On' :: OnInit
  public ngOnInit(): void {
    this.items = this.menuService.GetMenus();
  }
  //#endregion

  //#region Members :: OnExpandOrCollapseRoot(), onExpandOrCollapseChild(), collapseAll()

  /**
   * @description Expande ou colapsa a barra de navegação. Usado para mobile
   * @returns {void}
   */
  public onExpandOrCollapseRoot(): void {
    this.expanded = !this.expanded;

    if (!this.expanded) this.collapseAll();
  }

  /**
   * @description Expande ou colapsa os filhos do item de menu selecionado
   * @param {MenuItem} menuItem Item de menu
   * @returns {void}
   */
  public onExpandOrCollapseChild(menuItem: MenuItem): void {
    if (menuItem.expanded) {
      this.collapseAll();
    }
    else {
      this.collapseAll();

      menuItem.expanded = true;
    }
  }

  /**
   * @description Colapsa todos os menus
   * @returns {void}
   */
  public collapseAll(): void {
    this.items.forEach((menuItem: MenuItem) => {
      menuItem.expanded = false;
    });
  }

  public navigateTo(parentRouterLink: string, target: string, routerLink: string): void {
    let url: string = parentRouterLink + "/" + target + "/" + routerLink;
    this.router.navigate([url]);
    this.collapseAll();
    this.expanded = false;
  }

  public openSettings(): void {
    this.settingsDialogRef = this.dialogService.open(SettingsComponent ,{
      styleClass: "w-11 max-w-30rem p-2",
      closable: true,
      draggable: false
    });
  }

  //#endregion

}
