import { Injectable } from "@angular/core";
import { MenuItem } from "primeng/api";
import { AppHeader } from "../global";

@Injectable({
    providedIn: "root"
})
export class SettingsService {

    //#region Fields

    private _showMenu: boolean = true;
    get showMenu(): boolean {
        return this._showMenu;
    }

    private _showHeader: boolean = true;
    get showHeader(): boolean {
        return this._showHeader;
    }

    private _currentHeader?: AppHeader;
    get currentHeader(): AppHeader | undefined {
        return this._currentHeader;
    }

    private _showCreatedBy: boolean = true;
    get showCreatedBy(): boolean {
        return this._showCreatedBy;
    }

    private _showBreadCrumb: boolean = true;
    get showBreadCrumb(): boolean {
        return this._showBreadCrumb;
    }

    private _showCards: boolean = true;
    get showCards(): boolean {
        return this._showCards;
    }

    private _currentMenuItems: MenuItem[] = [];
    get currentMenuItems(): MenuItem[] {
        return this._currentMenuItems;
    }

    private _currentParentMenuItem?: MenuItem;
    get currentParentMenuItem(): MenuItem | undefined {
        return this._currentParentMenuItem;
    }

    //#region Constructor
    constructor() {

    }
    //#endregion

    //#region Members 'General' :: GetAppHeader()

    public UpdateItems(menuItem: MenuItem): void {
        this.currentParentMenuItem = menuItem;
        this.currentMenuItems = this.currentParentMenuItem.items!;
        this.UpdateHeader();
    }

    public UpdateHeader(): void {
        const currentItem: MenuItem | undefined = this.currentParentMenuItem;

        if (currentItem) {
            this.currentHeader = {
                title: currentItem.label!,
                description: currentItem.tooltip,
                icon: currentItem.icon
            };
        }
        else {
            this.currentHeader = undefined;
        }
    }

    public LoginPage(): void {
        this.showMenu = false;
        this.showBreadCrumb = false;
        this.showCards = false;
        this.currentMenuItems = [];
        this.currentParentMenuItem = undefined;
    }

    // FAZER O HIDE PARA CADA ROTA?

    //#endregion

    //#region Members 'Set'

    public canShowMenu(value: boolean): void {
        this._showMenu = value;
    }

    

    //#endregion

    //#region Members 'ShowMenu' :: setShowMenu(), getShowMenu()

    set showMenu(value: boolean) {
        this._showMenu = value;
    }

    //#endregion

    //#region Members 'ShowCreatedBy' :: setShowCreatedBy(), getShowCreatedBy()

    set showCreatedBy(value: boolean) {
        this._showCreatedBy = value;
    }



    //#endregion

    //#region Members 'ShowBreadCrumb' :: setShowBreadCrumb(), getShowBreadCrumb()

    set showBreadCrumb(value: boolean) {
        this._showBreadCrumb = value;
    }



    //#endregion

    //#region Members 'ShowCards' :: setShowCards(), getShowCards()

    set showCards(value: boolean) {
        this._showCards = value;
    }



    //#endregion

    //#region Members 'CurrentMenuItems' :: setCurrentMenuItems(), getCurrentMenuItems()

    set currentMenuItems(value: MenuItem[]) {
        this._currentMenuItems = value;
    }



    //#endregion

    //#region Members 'CurrentParentMenuItem' :: setCurrentParentMenuItem(), getCurrentParentMenuItem()

    set currentParentMenuItem(value: MenuItem | undefined) {
        this._currentParentMenuItem = value;
    }



    //#endregion

    //#region Members 'ShowHeader' :: setShowHeader(), getShowHeader()

    set showHeader(value: boolean) {
        this._showHeader = value;
    }

    //#endregion

    //#region Members 'Header' :: setHeader(), getHeader()

    set currentHeader(value: AppHeader | undefined) {
        this._currentHeader = value;
    }


    //#endregion

}
