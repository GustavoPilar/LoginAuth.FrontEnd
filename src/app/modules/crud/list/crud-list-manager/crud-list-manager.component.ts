import { AfterViewInit, Component, OnInit, ViewChild, ViewContainerRef } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { CrudListComponent } from "../crud-list/crud-list.component";
import { PrimeIcons } from "primeng/api";
import { SettingsService } from "../../../../core/services/settings.service";

@Component({
  selector: "app-crud-list-manager",
  standalone: false,
  templateUrl: "./crud-list-manager.component.html"
})
export class CrudListManagerComponent implements OnInit, AfterViewInit {

  //#region Fields

  @ViewChild(CrudListComponent)
  private crudListComponent!: CrudListComponent;

  private entityName: string;

  //#endregion

  //#region Constructor
  constructor(
    private activatedRoute: ActivatedRoute,
    private settingsService: SettingsService
  ) {
    this.entityName = this.activatedRoute.snapshot.params["entityName"];
  }
  //#endregion

  //#region Members 'On' :: ngOnInit, ngAfterViewInit

  public ngOnInit(): void {
  }

  public async ngAfterViewInit(): Promise<void> {
    this.crudListComponent.entityName = this.entityName;
    this.crudListComponent.loadCrudBaseComponent();
  }

  //#endregion

}
