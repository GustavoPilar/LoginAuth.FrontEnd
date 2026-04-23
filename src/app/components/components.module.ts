import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MenuComponent } from "./menu/menu.component";
import { CreatedByComponent } from "./created-by/created-by.component";
import { ButtonModule } from "primeng/button";
import { AvatarModule } from "primeng/avatar";
import { DividerModule } from "primeng/divider";
import { DialogService, DynamicDialogModule } from "primeng/dynamicdialog";
import { CardModule } from "primeng/card";
import { SettingsComponent } from "./settings/settings.component";
import { AppRoutingModule } from "../app-routing-module";
import { ConfirmationService } from "primeng/api";
import { ConfirmDialogModule } from "primeng/confirmdialog";

@NgModule({
  declarations: [
    MenuComponent,
    CreatedByComponent,
    SettingsComponent
  ],
  imports: [
    CommonModule,
    ButtonModule,
    AvatarModule,
    DividerModule,
    DynamicDialogModule,
    CardModule,
    ConfirmDialogModule
],
  exports: [
    MenuComponent,
    CreatedByComponent
  ],
  providers: [
    DialogService,
    ConfirmationService
  ]
})
export class ComponentsModule { }
