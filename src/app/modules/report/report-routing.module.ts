import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ReportComponent } from "./report.component";
import { GeneralReportComponent } from "./general/general-report.component";

export const routes: Routes = [
  { path: "", component: ReportComponent },

  { path: "general", component: GeneralReportComponent }
]

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [CommonModule, RouterModule]
})
export class ReportRoutingModule { }
