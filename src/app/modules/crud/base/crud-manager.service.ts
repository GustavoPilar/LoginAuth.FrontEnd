import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { EntityBase } from "../../../models/base/entity-base";
import { CrudBaseComponent } from "./crud-base";

@Injectable({
  providedIn: "root"
})
export class CrudManagerService {

  //#region Fields

  public entityName: string | null = null;

  public entityId: number | string | null = null;

  public crudBaseComponent!: CrudBaseComponent;

  //#region Constructor
  constructor() {

  }
  //#endregion

  //#region Members 'Init' :: Initialize

  public Initialize(crudBaseComponent: CrudBaseComponent): void {
    this.crudBaseComponent = crudBaseComponent;

    this.entityName = this.crudBaseComponent.entityName;
    this.entityId = this.crudBaseComponent.entityId;
  }

  //#region Members 'ApiRequest' :: HttpGet, HttpPost, HttpPut, HttpDelete

  //#endregion HttpGet :: GetEntities(), GetEntityById()

  /**
   * @description Retorna uma lista de entidades
   * @returns {Observable<any[]>}
   */
  public GetEntities(): Observable<any[]> {
    return of([
      { id: 0, name: "Gustavo", description: "Programador", age: 20 },
      { id: 1, name: "Yasmin", description: "Estagiária", age: 21 },
    ]);
  }

  /**
   * @description Retorna uma entidade pelo Id
   * @returns {Observable<any>}
   */
  public GetEntityById(): Observable<any> {
    return of();
  }

  //#endregion

  //#region HttpPost :: CreateEntity()

  /**
   * @description Cria o resgistro de uma entidade
   * @returns {Observable<any>}
   */
  public CreateEntity(): Observable<any> {
    return of();
  }

  //#endregion

  //#region HttpPut :: UpdateEntity()

  /**
   * @description Atualiza o registro de uma entidade
   * @returns {Observable<Entity>}
   */
  public UpdateEntity(): Observable<any> {
    return of();
  }

  //#endregion

  //#region HttpDelete :: DeleteEntityById()

  /**
   * @description Excluí um registro de uma entidade pelo Id
   * @param {boolean} id Id do registro
   * @returns {Observable<boolean>}
   */
  public DeleteEntityById(id: number): Observable<boolean> {
    return of(true);
  }

  //#endregion

  //#endregion

}
