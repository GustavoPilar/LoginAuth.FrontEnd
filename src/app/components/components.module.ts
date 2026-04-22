import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MenuComponent } from "./menu/menu.component";
import { CreatedByComponent } from "./created-by/created-by.component";
import { ButtonModule } from "primeng/button";
import { AvatarModule } from "primeng/avatar";
import { DividerModule } from "primeng/divider";

@NgModule({
  declarations: [
    MenuComponent,
    CreatedByComponent
  ],
  imports: [
    CommonModule,

    ButtonModule,
    AvatarModule,
    DividerModule
  ],
  exports: [
    MenuComponent,
    CreatedByComponent
  ],
  providers: [

  ]
})
export class ComponentsModule { }
