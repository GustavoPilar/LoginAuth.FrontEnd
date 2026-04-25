import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CrudComponent } from "./crud.component";
import { CommonModule } from "@angular/common";
import { CrudListManagerComponent } from "./list/crud-list-manager/crud-list-manager.component";
import { CrudFormManagerComponent } from "./form/crud-form-manager/crud-form-manager.component";
import { authGuard } from "../../core/guards/auth-guards";

export const routes: Routes = [
  { path: "", component: CrudComponent, canActivate: [authGuard] },
  { path: "list/:entityName", component: CrudListManagerComponent, canActivate: [authGuard] },
  { path: "edit/:entityName/:entityId", component: CrudFormManagerComponent, canActivate: [authGuard] },
  { path: "new/:entityName", component: CrudFormManagerComponent, canActivate: [authGuard] },
]

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [CommonModule, RouterModule]
})
export class CrudRoutingModule { }
