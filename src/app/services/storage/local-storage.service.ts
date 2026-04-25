import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class LocalStorageService {

  //#region Constructor
  constructor() {

  }
  //#endregion

  //#region Members 'Get' :: GetItem()

  /**
   * @description Retorna o item guardado no localstorage
   * @param key Chave
   * @returns {any} Valor
   */
  public GetItem(key: string): any {
    let item: any = localStorage.getItem(key);

    if (!item)
      return null;

    return JSON.parse(item);
  }

  //#endregion

  //#region Members 'Set' :: SetItem()

  /**
   * @description Salva o item no localstorage
   * @param key Chave
   * @param value Valor
   * @returns {void} Vazio
   */
  public SetItem(key: string, value: any): void {
    localStorage.setItem(key, value);
  }

  //#endregion

  //#region Members 'Remove' :: RemoveItem()

  /**
   * @description Remove o item do localstorage
   * @param {string} key Chave
   * @returns {void} Vazio
   */
  public RemoveItem(key: string): void {

    const value: any = this.GetItem(key);

    if (!value)
      return;

    localStorage.removeItem(key);
  }

  //#endregion
}
