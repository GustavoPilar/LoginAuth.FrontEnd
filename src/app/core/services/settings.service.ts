import { Injectable } from "@angular/core";
import { MenuItem } from "primeng/api";
import { AppHeader } from "../global";

@Injectable({
    providedIn: "root"
})
export class SettingsService {

    //#region Fields

    private _showMenu: boolean = true;

    private _showHeader: boolean = true;

    private _currentHeader?: AppHeader;

    private _showCreatedBy: boolean = true;

    private _showBreadCrumb: boolean = true;

    private _showCards: boolean = true;

    private _currentMenuItems: MenuItem[] = [];

    private _currentParentMenuItem?: MenuItem;

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

    //#region Members 'ShowMenu' :: setShowMenu(), getShowMenu()

    set showMenu(value: boolean) {
        this._showMenu = value;
    }

    get showMenu(): boolean {
        return this._showMenu;
    }

    //#endregion

    //#region Members 'ShowCreatedBy' :: setShowCreatedBy(), getShowCreatedBy()

    set showCreatedBy(value: boolean) {
        this._showCreatedBy = value;
    }

    get showCreatedBy(): boolean {
        return this._showCreatedBy;
    }

    //#endregion

    //#region Members 'ShowBreadCrumb' :: setShowBreadCrumb(), getShowBreadCrumb()

    set showBreadCrumb(value: boolean) {
        this._showBreadCrumb = value;
    }

    get showBreadCrumb(): boolean {
        return this._showBreadCrumb;
    }

    //#endregion

    //#region Members 'ShowCards' :: setShowCards(), getShowCards()

    set showCards(value: boolean) {
        this._showCards = value;
    }

    get showCards(): boolean {
        return this._showCards;
    }

    //#endregion

    //#region Members 'CurrentMenuItems' :: setCurrentMenuItems(), getCurrentMenuItems()

    set currentMenuItems(value: MenuItem[]) {
        this._currentMenuItems = value;
    }

    get currentMenuItems(): MenuItem[] {
        return this._currentMenuItems;
    }

    //#endregion

    //#region Members 'CurrentParentMenuItem' :: setCurrentParentMenuItem(), getCurrentParentMenuItem()

    set currentParentMenuItem(value: MenuItem | undefined) {
        this._currentParentMenuItem = value;
    }

    get currentParentMenuItem(): MenuItem | undefined {
        return this._currentParentMenuItem;
    }

    //#endregion

    //#region Members 'ShowHeader' :: setShowHeader(), getShowHeader()

    set showHeader(value: boolean) {
        this._showHeader = value;
    }

    get showHeader(): boolean {
        return this._showHeader;
    }

    //#endregion

    //#region Members 'Header' :: setHeader(), getHeader()

    set currentHeader(value: AppHeader | undefined) {
        this._currentHeader = value;
    }

    get currentHeader(): AppHeader | undefined {
        return this._currentHeader;
    }

    //#endregion

}
