import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReportRoutingModule } from "./report-routing.module";
import { ComponentsModule } from "../../components/components.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ReportComponent } from "./report.component";
import { GeneralReportComponent } from "./general/general-report.component";
import { CardModule } from "primeng/card";
import { ChartModule } from 'primeng/chart';

@NgModule({
  declarations: [
    ReportComponent,

    GeneralReportComponent
  ],
  imports: [
    CommonModule,
    ReportRoutingModule,
    ComponentsModule,
    FormsModule,
    ReactiveFormsModule,

    CardModule,
    ChartModule
  ],
  providers: [

  ]
})
export class ReportModule {}
