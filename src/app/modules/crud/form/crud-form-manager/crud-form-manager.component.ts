import { AfterViewInit, Component, OnInit, ViewChild } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { PrimeIcons } from "primeng/api";
import { CrudFormComponent } from "../crud-form/crud-form.component";
import { SettingsService } from "../../../../core/services/settings.service";

@Component({
  selector: "app-crud-form-manager",
  standalone: false,
  templateUrl: "./crud-form-manager.component.html"
})
export class CrudFormManagerComponent implements OnInit, AfterViewInit {

  //#region Fields

  @ViewChild(CrudFormComponent)
  private crudFormComponent!: CrudFormComponent;

  private entityName: string;
  private entityId: number;

  //#endregion

  //#region Constructor
  constructor(
    private activatedRoute: ActivatedRoute,
    private settingsService: SettingsService
  ) {
    this.entityName = this.activatedRoute.snapshot.params["entityName"];
    this.entityId = this.activatedRoute.snapshot.params["entityId"];
    
    this.settingsService.showCards = false;
    this.settingsService.showHeader = false;
  }
  //#endregion

  //#region Members 'On' :: ngOnInit, ngAfterViewInit

  public ngOnInit(): void {
  }

  public async ngAfterViewInit(): Promise<void> {
    this.crudFormComponent.entityName = this.entityName;
    this.crudFormComponent.entityId = this.entityId;
    this.crudFormComponent.loadCrudBaseComponent();
  }

  //#endregion

}
