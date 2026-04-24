import { RouterModule, Routes } from "@angular/router";
import { SystemComponent } from "./system.component";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { VideoLessonComponent } from "./class/videoLesson/videoLesson.component";
import { ClassTestComponent } from "./class/classTest/classTest.component";

export const routes: Routes = [
  { path: "", component: SystemComponent },

  { path: "class/videoLesson", component: VideoLessonComponent },
  { path: "class/classTest", component: ClassTestComponent },
]

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [CommonModule, RouterModule]
})
export class SystemRoutingModule { }
