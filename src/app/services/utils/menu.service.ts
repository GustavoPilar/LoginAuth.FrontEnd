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
            items: []
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
            this.createManager(),
            this.createApplication(),
            this.createReport()
        ]
    }
}
