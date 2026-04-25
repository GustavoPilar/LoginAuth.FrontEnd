import { Injectable } from "@angular/core";
import { MenuItem, PrimeIcons } from "primeng/api";

@Injectable({
    providedIn: "root"
})
export class BreadcrumbService {

    //#region Fields

    private items: MenuItem[] = [];

    //#endregion

    //#region Constructor
    constructor() {
    }
    //#endregion

    //#region Members 'Home' :: getHome()

    public getHome(): MenuItem {
        return {
            icon: PrimeIcons.HOME,
            routerLink: "/home"
        };
    }
    //#endregion

    //#region Members 'General' :: clear(), pushItem(), setItems(), getItems()

    public clear(): void {
        this.items = [];
    }

    public pushItem(menuItem: MenuItem): void {
        this.items.push(menuItem);
    }

    public setItems(items: MenuItem[]): void {
        this.items = items;
    }

    public getItems(): MenuItem[] {
        return this.items;
    }

    //#endregion

}

