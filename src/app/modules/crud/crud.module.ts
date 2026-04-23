import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ComponentsModule } from "../../components/components.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CrudComponent } from "./crud.component";
import { CrudRoutingModule } from "./crud-routing.module";

@NgModule({
  declarations: [
    CrudComponent
  ],
  imports: [
    CommonModule,
    CrudRoutingModule,
    ComponentsModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [

  ]
})
export class CrudModule { }
