import { AfterViewInit, Component, OnInit, ViewChild, ViewContainerRef } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { CrudListComponent } from "../crud-list/crud-list.component";
import { Settings } from "../../../../core/settings";
import { PrimeIcons } from "primeng/api";

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
    private activatedRoute: ActivatedRoute
  ) {
    this.entityName = this.activatedRoute.snapshot.params["entityName"];

    Settings.breadCrumbItems = [
      { icon: PrimeIcons.PENCIL, routerLink: "manager" },
      { label: this.entityName, icon: PrimeIcons.LIST, routerLink: "manager/list/" + this.entityName },
    ]
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
