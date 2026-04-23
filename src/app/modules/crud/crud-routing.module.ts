import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CrudComponent } from "./crud.component";
import { CommonModule } from "@angular/common";

export const routes: Routes = [
  { path: "", component: CrudComponent }
]

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [CommonModule, RouterModule]
})
export class CrudRoutingModule { }
