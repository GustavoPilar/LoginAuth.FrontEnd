import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ComponentsModule } from "../../components/components.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CrudComponent } from "./crud.component";
import { CrudRoutingModule } from "./crud-routing.module";
import { CrudListManagerComponent } from "./list/crud-list-manager/crud-list-manager.component";
import { CrudListComponent } from "./list/crud-list/crud-list.component";
import { ConfirmationService, MessageService } from "primeng/api";
import { DialogService, DynamicDialogModule } from "primeng/dynamicdialog";
import { ToastModule } from "primeng/toast";
import { ConfirmDialogModule } from "primeng/confirmdialog";
import { DialogModule } from "primeng/dialog";
import { TableModule } from "primeng/table";
import { ButtonModule } from "primeng/button";
import { ExempleOneComponent } from "./entities/exempleOne/exempleOne.component";
import { ToolbarModule } from "primeng/toolbar";
import { MessageModule } from "primeng/message";

@NgModule({
  declarations: [
    CrudComponent,
    CrudListManagerComponent,
    CrudListComponent,

    ExempleOneComponent
  ],
  imports: [
    CommonModule,
    CrudRoutingModule,
    ComponentsModule,
    ReactiveFormsModule,
    FormsModule,

    ToastModule,
    ConfirmDialogModule,
    DialogModule,
    DynamicDialogModule,
    TableModule,
    ButtonModule,
    ToolbarModule,
    MessageModule
  ],
  providers: [
    MessageService,
    DialogService,
    ConfirmationService
  ]
})
export class CrudModule { }
