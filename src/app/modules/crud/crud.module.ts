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
import { ToolbarModule } from "primeng/toolbar";
import { MessageModule } from "primeng/message";
import { CrudFormManagerComponent } from "./form/crud-form-manager/crud-form-manager.component";
import { CrudFormComponent } from "./form/crud-form/crud-form.component";
import { CardModule } from "primeng/card";
import { InputTextModule } from "primeng/inputtext";
import { InputNumberModule } from "primeng/inputnumber";
import { ProductComponent } from "./entities/product/product.component";
import { DatePickerModule } from "primeng/datepicker";
import { InputIconModule } from "primeng/inputicon";
import { IconFieldModule } from "primeng/iconfield";
import { FloatLabelModule } from "primeng/floatlabel";

@NgModule({
  declarations: [
    CrudComponent,
    CrudListManagerComponent,
    CrudListComponent,
    CrudFormManagerComponent,
    CrudFormComponent,

    ProductComponent,
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
    MessageModule,
    CardModule,
    InputTextModule,
    InputNumberModule,
    DatePickerModule,
    InputIconModule,
    IconFieldModule,
    FloatLabelModule
  ],
  providers: [
    MessageService,
    DialogService,
    ConfirmationService
  ]
})
export class CrudModule { }
