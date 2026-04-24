import { Component, OnInit } from "@angular/core";
import { CrudBaseComponent } from "../../base/crud-base";
import { ExempleTwo } from "../../../../models/entities";
import { CrudManagerService } from "../../base/crud-manager.service";
import { EntityBase } from "../../../../models/base/entity-base";
import { FormBuilder, Validators } from "@angular/forms";
import { MessageService, ConfirmationService, PrimeIcons } from "primeng/api";
import { DialogService } from "primeng/dynamicdialog";
import { DisplayColumn } from "../../base/models/display-column";
import { DisplayColumnType } from "../../base/models/display-column-type";
import { TypeDescription } from "../../base/models/type-description";
import { LoaderService } from "../../../../services/utils/loader.service";

@Component({
  selector: "app-exemple-two",
  standalone: false,
  templateUrl: "./exempleTwo.component.html",
  providers: [CrudManagerService]
})
export class ExempleTwoComponent extends CrudBaseComponent<ExempleTwo> implements OnInit {

  //#region Fields

  public override icon: string = PrimeIcons.BUILDING;

  //#endregion

  //#region Constructor
  constructor(
    public override crudManagerService: CrudManagerService,
    protected override formBuilder: FormBuilder,
    protected override messageService: MessageService,
    protected override confirmationService: ConfirmationService,
    protected override dialogService: DialogService,
    protected override loaderService: LoaderService,
  ) {
    super(crudManagerService, formBuilder, messageService, confirmationService, dialogService, loaderService)
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
      },
      {
        field: "age",
        description: "Idade",
        type: DisplayColumnType.Numeric,
        icon: PrimeIcons.SORT_NUMERIC_DOWN
      }
    ]
  }

  public override getTypeDescription(): TypeDescription {
    return new TypeDescription("Exemplo", "Exemplos", false);
  }

  public override initForm(): void {
    this.form = this.formBuilder.group({
      name: [this.selectedEntity?.name ?? null, Validators.required],
      description: [this.selectedEntity?.description ?? null, Validators.required],
      age: [this.selectedEntity?.age ?? null, Validators.required],
    });
  }

  //#endregion

}
