import { Component, OnInit } from "@angular/core";
import { CrudBaseComponent } from "../../base/crud-base";
import { CrudManagerService } from "../../base/crud-manager.service";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { MessageService, ConfirmationService, PrimeIcons } from "primeng/api";
import { DialogService } from "primeng/dynamicdialog";
import { Product } from "../../../../models/entities";
import { LoaderService } from "../../../../core/services/loader.service";
import { DisplayColumn } from "../../../../models/interfaces/i-display-column";
import { DisplayColumnTypeEnum } from "../../../../models/interfaces/display-column-type-enum";
import { TypeDescription } from "../../../../models/interfaces/i-type-description";
import { ApiService } from "../../../../services/communication/api.service";

@Component({
  selector: "app-product",
  standalone: false,
  templateUrl: "./product.component.html",
  providers: [CrudManagerService]
})
export class ProductComponent extends CrudBaseComponent<Product> implements OnInit {

  //#region Fields

  public override icon: string = PrimeIcons.BUILDING;

  //#endregion

  //#region Constructor
  constructor(
    public override crudManagerService: CrudManagerService,
    protected override apiService: ApiService,
    protected override formBuilder: FormBuilder,
    protected override messageService: MessageService,
    protected override confirmationService: ConfirmationService,
    protected override dialogService: DialogService,
    protected override loaderService: LoaderService,
  ) {
    super(crudManagerService, apiService, formBuilder, messageService, confirmationService, dialogService, loaderService)
  }
  //#endregion

  //#endregion Members 'Base'

  public override getDisplayColumn(): DisplayColumn[] {
    return [
      new DisplayColumn("name", "Nome", DisplayColumnTypeEnum.Text, PrimeIcons.HASHTAG),
      new DisplayColumn("description", "Descrição", DisplayColumnTypeEnum.Text, PrimeIcons.PENCIL),
      new DisplayColumn("price", "Preço", DisplayColumnTypeEnum.Numeric, PrimeIcons.TAG),
    ];
  }

  public override getTypeDescription(): TypeDescription {
    return new TypeDescription("Exemplo", "Exemplos");
  }

  public override initForm(): FormGroup {
    
    if (this.selectedEntity?.registerDate) {
      this.selectedEntity.registerDate = new Date(this.selectedEntity.registerDate);
    }

    return this.formBuilder.group({
      name: [this.selectedEntity?.name ?? null, Validators.required],
      description: [this.selectedEntity?.description ?? null, Validators.required],
      price: [this.selectedEntity?.price ?? null, Validators.required],
      registerDate: [this.selectedEntity?.registerDate ?? null, Validators.required]
    });
  }

  //#endregion

}
