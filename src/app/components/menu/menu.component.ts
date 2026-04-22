import { Component, OnInit } from "@angular/core";
import { MenuItem, PrimeIcons } from "primeng/api";

@Component({
  selector: "app-menu",
  standalone: false,
  templateUrl: "./menu.component.html"
})
export class MenuComponent implements OnInit {

  //#region Fields

  public expanded: boolean = false;

  public items: MenuItem[] = [
    { label: "Gerenciamento", icon: PrimeIcons.PENCIL, expanded: false, command: (menuItem: MenuItem) => { menuItem.expanded = !menuItem.expanded; }, items: [ { label: "Usuários", icon: PrimeIcons.USERS } ]},
    { label: "Segurança", icon: PrimeIcons.SHIELD, expanded: false },
    { label: "Relatório", icon: PrimeIcons.FILE, expanded: false },
  ];

  //#endregion

  //#region Constructor
  constructor() {

  }
  //#endregion

  //#region Members 'On' :: OnInit
  public ngOnInit(): void {

  }
  //#endregion

  //#region Members

  public onExpandOrCollapseRoot(): void {
    this.expanded = !this.expanded;
  }

  public onExpandOrCollapseChild(menuItem: MenuItem): void {
    menuItem.expanded = !menuItem.expanded;
  }

  //#endregion

}
