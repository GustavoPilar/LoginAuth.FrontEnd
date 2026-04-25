import { Component, OnInit } from "@angular/core";
import { MenuItem } from "primeng/api";
import { DialogService, DynamicDialogRef } from "primeng/dynamicdialog";
import { SettingsComponent } from "../settings/settings.component";
import { Router } from "@angular/router";
import { MenuService } from "../../core/services/menu.service";

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
    this.items = this.menuService.GetAll();
  }
  //#endregion

  //#region Members 'Expand && Collapse' :: OnExpandOrCollapseRoot(), onExpandOrCollapseChild(), collapseAll()

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

  //#endregion

  //#region Members 'General' :: navigateTo(), openSettings()

  /**
   * @description navega para a rota especifica
   * @param {string} parentRouterLink Rota do pai
   * @param {string} middleField Meio campo da rota
   * @param {string} routerLink Rota
   * @returns {void}
   */
  public navigateTo(parentRouterLink: string, middleField: string, routerLink: string): void {
    let url: string = parentRouterLink + "/" + middleField + "/" + routerLink;
    this.router.navigate([url]);

    this.collapseAll();
    this.expanded = false;
  }

  /**
   * @description Abre o painél para configuração
   * @returns {void}
   */
  public openSettings(): void {
    this.settingsDialogRef = this.dialogService.open(SettingsComponent, {
      styleClass: "w-11 max-w-30rem p-2",
      closable: true,
      draggable: false
    });
  }

  //#endregion

}
