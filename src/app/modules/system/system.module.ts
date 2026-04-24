import { NgModule } from "@angular/core";
import { SystemComponent } from "./system.component";
import { CommonModule } from "@angular/common";
import { SystemRoutingModule } from "./system-routing.module";
import { ComponentsModule } from "../../components/components.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { VideoLessonComponent } from "./class/videoLesson/videoLesson.component";
import { CardModule } from "primeng/card";
import { DividerModule } from "primeng/divider";
import { ClassTestComponent } from "./class/classTest/classTest.component";
import { CheckboxModule } from 'primeng/checkbox';
import { RadioButtonModule } from 'primeng/radiobutton';
import { ButtonModule } from "primeng/button";

@NgModule({
  declarations: [
    SystemComponent,

    VideoLessonComponent,
    ClassTestComponent
  ],
  imports: [
    CommonModule,
    SystemRoutingModule,
    ComponentsModule,
    FormsModule,
    ReactiveFormsModule,

    CardModule,
    DividerModule,
    CheckboxModule,
    RadioButtonModule,
    ButtonModule
  ],
  providers: [

  ]
})
export class SystemModule { }
