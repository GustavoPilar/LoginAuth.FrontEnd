import { Injectable, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { MenuItem, PrimeIcons } from "primeng/api";
import { BreadcrumbService } from "./breadcrumb.service";

@Injectable({
  providedIn: "root"
})
export class MenuService {

  //#region Fields

  private items: { [key: string]: MenuItem } = {};

  private managerRoute: string = "manager";

  private systemRoute: string = "system";

  private reportRoute: string = "report";

  //#region Constructor
  constructor(
    private router: Router,
    private breadcrumbService: BreadcrumbService
  ) {
    this.initItems();
  }
  //#endregion

  //#region members 'Get' :: GetAll()

  public GetAll(): MenuItem[] {
    const keys: string[] = Object.keys(this.items);

    const items: MenuItem[] = [];

    keys.forEach((key: string) => {
      items.push(this.items[key]);
    });

    return items;
  }

  public GetManager(): MenuItem {
    return this.items[this.managerRoute];
  }

  public GetSystem(): MenuItem {
    return this.items[this.systemRoute];
  }

  public GetReport(): MenuItem {
    return this.items[this.reportRoute];
  }

  public GetByName(name: string): MenuItem {
    return this.items[name];
  }

  //#region Members 'Create' :: createItem(), CreateManager(), CreateSystem, CreateReports()

  private createItem(label: string, icon: string | undefined, tooltip: string, routerLink: string, target?: string, expanded?: boolean): MenuItem {
    return {
      label,
      icon,
      tooltip,
      routerLink,
      target,
      expanded,
      command: (evnt: any) => { this.navigateTo(evnt) }
    };
  }

  /**
   * @description Cria o item de menu para Gerenciamento e seus filhos
   * @returns {void}
   */
  private createManager(): void {

    this.items[this.managerRoute] = this.createItem(
      "Gerenciamento",
      PrimeIcons.PENCIL,
      "Com um clique você pode começar a alimentar de dados o seu sistema!",
      this.managerRoute + "/",
      undefined,
      false,
    );

    this.items[this.managerRoute].items = [
      this.createItem("Produto", PrimeIcons.BOX, "Cadastre, atualize ou remova um produto", "product", "list/")
    ];

  }

  /**
   * @description Cria o item de menu para Sistema e seus filhos
   * @returns {void}
   */
  private createSystem(): void {

    this.items[this.systemRoute] = this.createItem(
      "Sistemas",
      PrimeIcons.DESKTOP,
      "Veja do que o sistema é capaz de fornecer e fazer!",
      this.systemRoute + "/",
      undefined,
      false,
    );

    this.items[this.systemRoute].items = [
      this.createItem("Aulas", PrimeIcons.PLAY_CIRCLE, "Veja ou remova as aulas que estão disponíveis", "videoLesson", "class/"),
      this.createItem("Provas / Simulados", PrimeIcons.FILE_CHECK, "Realize provas ou simulados para testar seus conhecimentos", "classTest", "class/"),
    ];

  }

  /**
   * @description Cria o item de menu para Relatório e seus filhos
   * @returns {void}
   */
  private createReport(): void {

    this.items[this.reportRoute] = this.createItem(
      "Relatório",
      PrimeIcons.FILE,
      "Deseja saber sobre estatísticas de seu sistema? Aqui é o lugar certo!",
      this.reportRoute + "/",
      undefined,
      false,
    );

    this.items[this.reportRoute].items = [
      this.createItem("Relatório Geral", PrimeIcons.EYE, "Gere um relatório geral sobre seu sistema", "general")
    ];

  }

  //#endregion

  //#region Members 'General' :: initItems() navigateTo()

  private initItems(): void {
    this.createManager();
    this.createSystem();
    this.createReport();
  }

  private navigateTo(evnt: any): void {
    let route: string = "";
    let item: any = evnt.item;
    console.log(evnt);

    this.breadcrumbService.clear();

    if (evnt.parent) {
      let parent: any = evnt.parent;

      route += parent.routerLink;

      this.breadcrumbService.pushItem({ ...parent, label: null });
    }

    if (item.target)
      route += item.target;

    route += item.routerLink;

    this.breadcrumbService.pushItem({ ...item });

    this.router.navigate([route]);
  }

  //#endregion
}
