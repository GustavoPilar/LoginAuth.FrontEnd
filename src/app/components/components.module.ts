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
import { HeaderComponent } from "./header/header.component";
import { CardsComponent } from "./cards/cards.component";
import { LabelComponent } from "./label/label.component";

@NgModule({
  declarations: [
    MenuComponent,
    CreatedByComponent,
    SettingsComponent,
    HeaderComponent,
    CardsComponent,
    LabelComponent
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
    CreatedByComponent,
    HeaderComponent,
    CardsComponent,
    LabelComponent
  ],
  providers: [
    DialogService,
    ConfirmationService
  ]
})
export class ComponentsModule { }
