import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ReportComponent } from "./report.component";
import { GeneralReportComponent } from "./general/general-report.component";
import { authGuard } from "../../core/guards/auth-guards";

export const routes: Routes = [
  { path: "", component: ReportComponent, canActivate: [authGuard] },

  { path: "general", component: GeneralReportComponent, canActivate: [authGuard] }
]

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [CommonModule, RouterModule]
})
export class ReportRoutingModule { }
