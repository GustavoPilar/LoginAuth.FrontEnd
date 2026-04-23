import { AfterViewInit, Component, OnInit, ViewChild, ViewContainerRef } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Settings } from "../../../../core/settings";
import { PrimeIcons } from "primeng/api";
import { CrudFormComponent } from "../crud-form/crud-form.component";

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
  private entityId: string | number;

  //#endregion

  //#region Constructor
  constructor(
    private activatedRoute: ActivatedRoute
  ) {
    this.entityName = this.activatedRoute.snapshot.params["entityName"];
    this.entityId = this.activatedRoute.snapshot.params["entityId"];

    Settings.breadCrumbItems = [
      { icon: PrimeIcons.PENCIL, routerLink: "manager" },
      { icon: PrimeIcons.LIST, routerLink: "manager/list/" + this.entityName },
      { label: this.entityName, icon: PrimeIcons.FILE_EDIT },
    ]
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
