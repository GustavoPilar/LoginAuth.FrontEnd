import { Injectable } from "@angular/core";
import { MenuItem, PrimeIcons } from "primeng/api";

@Injectable({
    providedIn: "root"
})
export class MenuService {

    //#region Constructor
    constructor(

    ) {

    }
    //#endregion

    //#region Members 'create' :: CreateManager(), CreateApplication, CreateReports()

    private createManager(): MenuItem {
        const root: MenuItem = {
            label: "Gerenciamento",
            icon: PrimeIcons.PENCIL,
            expanded: false,
            routerLink: "/manager",
            items: [
              { label: "Exemplo 1", icon: PrimeIcons.HASHTAG, tooltip: "Um exemplo de opção para gerenciamento", routerLink: "exempleOne" },
              { label: "Exemplo 2", icon: PrimeIcons.HASHTAG, tooltip: "Um exemplo de opção para gerenciamento", routerLink: "exemploTwo" },
            ]
        }

        return root;
    }

    private createApplication(): MenuItem {
        const root: MenuItem = {
            label: "Aplicação",
            icon: PrimeIcons.DESKTOP,
            expanded: false,
            items: []
        }

        return root;
    }

    private createReport(): MenuItem {
        const root: MenuItem = {
            label: "Relatório",
            icon: PrimeIcons.FILE,
            expanded: false,
            items: []
        }

        return root;
    }

    //#endregion

    //#region Members 'Get' :: GetMenus()

    public GetMenus(): MenuItem[] {
        return [
            this.GetManager(),
            this.GetApplication(),
            this.GetReport()
        ]
    }

    public GetManager(): MenuItem {
      return this.createManager();
    }

    public GetApplication(): MenuItem {
      return this.createApplication();
    }
    public GetReport(): MenuItem {
      return this.createReport();
    }

    //#endregion
}
