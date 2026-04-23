import { Component, OnInit } from "@angular/core";
import { CrudBaseComponent } from "../../base/crud-base";
import { ExempleOne } from "../../../../models/entities";
import { CrudManagerService } from "../../base/crud-manager.service";
import { EntityBase } from "../../../../models/base/entity-base";
import { FormBuilder } from "@angular/forms";
import { MessageService, ConfirmationService, PrimeIcons } from "primeng/api";
import { DialogService } from "primeng/dynamicdialog";
import { DisplayColumn } from "../../base/models/display-column";
import { DisplayColumnType } from "../../base/models/display-column-type";

@Component({
  selector: "app-exemple-one",
  standalone: false,
  templateUrl: "./exempleOne.component.html",
  providers: [CrudManagerService]
})
export class ExempleOneComponent extends CrudBaseComponent<ExempleOne> implements OnInit {

  //#region Fields

  public override icon: string = PrimeIcons.BUILDING;

  //#endregion

  //#region Constructor
  constructor(
    public override crudManagerService: CrudManagerService,
    protected override formBuilder: FormBuilder,
    protected override messageService: MessageService,
    protected override confirmationService: ConfirmationService,
    protected override dialogService: DialogService
  ) {
    super(crudManagerService, formBuilder, messageService, confirmationService, dialogService)
  }
  //#endregion

  //#endregion Members 'Base'

  public override getDisplayColumn(): DisplayColumn[] {
    return [
      {
        field: "name",
        description: "Nome",
        type: DisplayColumnType.Text,
        icon: PrimeIcons.HASHTAG
      },
      {
        field: "description",
        description: "Descrição",
        type: DisplayColumnType.Text,
        icon: PrimeIcons.TAG
      }
    ]
  }

  public override getListDescription(): string {
    return "Exemplos"
  }

  //#endregion

}
