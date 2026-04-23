import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CrudComponent } from "./crud.component";
import { CommonModule } from "@angular/common";
import { CrudListManagerComponent } from "./list/crud-list-manager/crud-list-manager.component";

export const routes: Routes = [
  { path: "", component: CrudComponent },
  { path: "list/:entityName", component: CrudListManagerComponent }
]

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [CommonModule, RouterModule]
})
export class CrudRoutingModule { }
