import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { API_URL } from "../../core/global";

@Injectable({
    providedIn: "root"
})
export class ApiService {

    //#region Constructor
    constructor(
        private httpClient: HttpClient
    ) {
        
    }
    //#endregion

    //#region Members 'HttpRequest' :: HttpGet, HttpPost, HttpPut, HttpDelete

    //#region Members 'HttpGet' :: GetEntities(), GetEntityById()

    public GetEntities(entityName: string): Observable<any> {
        const url: string = `${API_URL}/${entityName}`;

        return this.httpClient.get(url, { headers: { "Content-Type" : "appliation/json" } });
    }

    public GetEntityById(entityName: string, entityId: number): Observable<any> {
        const url: string = `${API_URL}/${entityName}/${entityId}`;

        return this.httpClient.get(url, { headers: { "Content-Type" : "appliation/json" } });
    }

    //#endregion

    //#region Members 'httpPost' :: CreateEntity()

    public CreateEntity(entityName: string, entity: any): Observable<any> {
        const url: string = `${API_URL}/${entityName}`;

        return this.httpClient.post(url, entity, { headers: { "Content-Type" : "appliation/json" } });
    }

    //#endregion

    //#region Members 'httpPut' :: UpdateEntity()

    public UpdateEntity(entityName: string, entity: any): Observable<any> {
        const url: string = `${API_URL}/${entityName}/${entity.id}`;

        return this.httpClient.put(url, entity, { headers: { "Content-Type" : "appliation/json" } });
    }

    //#endregion
    
    //#region Members 'HttpDelete' :: DeleteEntity()

    public DeleteEntity(entityName: string, entityId: number): Observable<any> {
        const url: string = `${API_URL}/${entityName}/${entityId}`;

        return this.httpClient.delete(url, { headers: { "Content-Type" : "appliation/json" } });
    }

    //#endregion

    //#endregion

}
