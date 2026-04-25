import { RouterModule, Routes } from "@angular/router";
import { SystemComponent } from "./system.component";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { VideoLessonComponent } from "./class/videoLesson/videoLesson.component";
import { ClassTestComponent } from "./class/classTest/classTest.component";
import { authGuard } from "../../core/guards/auth-guards";

export const routes: Routes = [
  { path: "", component: SystemComponent, canActivate: [authGuard] },

  { path: "class/videoLesson", component: VideoLessonComponent, canActivate: [authGuard] },
  { path: "class/classTest", component: ClassTestComponent, canActivate: [authGuard] },
]

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [CommonModule, RouterModule]
})
export class SystemRoutingModule { }
