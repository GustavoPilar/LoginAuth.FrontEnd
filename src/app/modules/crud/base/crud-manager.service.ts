import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { EntityBase } from "../../../models/base/entity-base";
import { CrudBaseComponent } from "./crud-base";
import { ApiService } from "../../../services/communication/api.service";

@Injectable({
  providedIn: "root"
})
export class CrudManagerService {

  //#region Fields

  public entityName!: string;

  public entityId!: number;

  public crudBaseComponent!: CrudBaseComponent;

  //#region Constructor
  constructor(
    private apiService: ApiService
  ) {

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
    return this.apiService.GetEntities(this.entityName);
  }

  /**
   * @description Retorna uma entidade pelo Id
   * @returns {Observable<any>}
   */
  public GetEntityById(): Observable<any> {
    
    if (this.entityId == undefined)
      return of({id: 0});
    
    return this.apiService.GetEntityById(this.entityName, this.entityId);
  }

  //#endregion

  //#region HttpPost :: CreateEntity()

  /**
   * @description Cria o resgistro de uma entidade
   * @returns {Observable<any>}
   */
  public CreateEntity(): Observable<any> {
    let entity: any = this.crudBaseComponent.prepareEntityToSave()
    
    if (this.entityId && this.entityId > 0) {
      entity.id = this.entityId;
      return this.UpdateEntity(entity);
    }

    return this.apiService.CreateEntity(this.entityName, entity);
  }

  //#endregion

  //#region HttpPut :: UpdateEntity()

  /**
   * @description Atualiza o registro de uma entidade
   * @returns {Observable<Entity>}
   */
  public UpdateEntity(entity: any): Observable<any> {
    return this.apiService.UpdateEntity(this.entityName, entity);
  }

  //#endregion

  //#region HttpDelete :: DeleteEntityById()

  /**
   * @description Excluí um registro de uma entidade pelo Id
   * @param {boolean} id Id do registro
   * @returns {Observable<boolean>}
   */
  public DeleteEntityById(id: number): Observable<boolean> {
    return this.apiService.DeleteEntity(this.entityName, id);
  }

  //#endregion

  //#endregion

}
