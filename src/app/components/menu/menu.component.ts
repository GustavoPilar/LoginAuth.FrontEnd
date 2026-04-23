import { Component, OnInit } from "@angular/core";
import { MenuItem, PrimeIcons } from "primeng/api";
import { MenuService } from "../../services/utils/menu.service";

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

  //#endregion

  //#region Constructor
  constructor(
    private menuService: MenuService
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

  //#endregion

}
