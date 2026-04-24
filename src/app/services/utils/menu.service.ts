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

    //#region Members 'create' :: CreateManager(), CreateSystem, CreateReports()

    private createManager(): MenuItem {
        const root: MenuItem = {
            label: "Gerenciamento",
            icon: PrimeIcons.PENCIL,
            tooltip: "Com um clique você pode começar a alimentar o seu sistema!",
            expanded: false,
            routerLink: "manager/",
            items: [
              { label: "Exemplo 1", icon: PrimeIcons.HASHTAG, tooltip: "Um exemplo de opção para gerenciamento", target: "list/", routerLink: "exempleOne" },
              { label: "Exemplo 2", icon: PrimeIcons.HASHTAG, tooltip: "Um exemplo de opção para gerenciamento", target: "list/", routerLink: "exempleTwo" },
            ]
        }

        return root;
    }

    private createSystem(): MenuItem {
        const root: MenuItem = {
            label: "Sistema",
            icon: PrimeIcons.DESKTOP,
            tooltip: "Veja do que o sistema é capaz de fornecer e fazer!",
            expanded: false,
            routerLink: "system/",
            items: [
              { label: "Aulas", icon: PrimeIcons.PLAY_CIRCLE, tooltip: "Veja ou rejeva as aulas que estão disponíveis", target: "class/", routerLink: "videoLesson" },
              { label: "Provas / Simulados", icon: PrimeIcons.FILE_CHECK, tooltip: "Realize provas ou simulados para testar seus conhecimentos", target: "class/", routerLink: "classTest" },
            ]
        }

        return root;
    }

    private createReport(): MenuItem {
        const root: MenuItem = {
            label: "Relatório",
            icon: PrimeIcons.FILE,
            tooltip: "Deseja saber sobre estatísticas de seu sistema? Aqui é o lugar certo!",
            expanded: false,
            routerLink: "report/",
            items: [
              { label: "Geral", icon: PrimeIcons.EYE, tooltip: "Gere um relatório geral sobre seu sistema", routerLink: "general" }
            ]
        }

        return root;
    }

    //#endregion

    //#region Members 'Get' :: GetMenus()

    public GetMenus(): MenuItem[] {
        return [
            this.GetManager(),
            this.GetSystem(),
            this.GetReport()
        ]
    }

    public GetManager(): MenuItem {
      return this.createManager();
    }

    public GetSystem(): MenuItem {
      return this.createSystem();
    }
    public GetReport(): MenuItem {
      return this.createReport();
    }

    //#endregion
}
