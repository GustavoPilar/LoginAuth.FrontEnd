import { Component, OnInit } from "@angular/core";
import { PrimeIcons } from "primeng/api";

@Component({
  selector: "app-general-report",
  standalone: false,
  templateUrl: "./general-report.component.html"
})
export class GeneralReportComponent implements OnInit {

  basicData: any;
  basicOptions: any;

  constructor() {
  }

  public ngOnInit(): void {
    this.basicData = {
      labels: ['P1', 'P1', 'P3', 'P4'],
      datasets: [
        {
          label: 'Provas',
          data: [54, 32.5, 70.2, 62.0],
          backgroundColor: ['rgba(249, 115, 22, 0.2)', 'rgba(6, 182, 212, 0.2)', 'rgb(107, 114, 128, 0.2)', 'rgba(139, 92, 246, 0.2)'],
          borderColor: ['rgb(249, 115, 22)', 'rgb(6, 182, 212)', 'rgb(107, 114, 128)', 'rgb(139, 92, 246)'],
          borderWidth: 1
        }
      ]
    };

    this.basicOptions = {
      maintainAspectRatio: false,
      aspectRatio: 0.8,
      plugins: {
        legend: {
          labels: {
            color: "black"
          }
        }
      },
      scales: {
        x: {
          ticks: {
            color: "black"
          },
          grid: {
            color: "white"
          }
        },
        y: {
          beginAtZero: true,
          ticks: {
            color: "black"
          },
          grid: {
            color: "black"
          },
          max: 100
        }
      }
    };
  }

}
