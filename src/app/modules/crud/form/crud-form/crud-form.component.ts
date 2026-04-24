import { LoaderService } from './../../../../services/utils/loader.service';
import { AfterViewInit, ChangeDetectorRef, Component, ComponentRef, Input, OnDestroy, OnInit, ViewChild, ViewContainerRef } from "@angular/core";
import { CrudBaseComponent } from "../../base/crud-base";
import { BehaviorSubject, pipe, Subject, takeUntil } from "rxjs";
import { ConfirmationService, MessageService } from "primeng/api";
import { ConfirmDialog } from "primeng/confirmdialog";
import { Router } from "@angular/router";

@Component({
  selector: "app-crud-form",
  standalone: false,
  templateUrl: "./crud-form.component.html"
})
export class CrudFormComponent implements OnInit, AfterViewInit, OnDestroy {

  //#region Fields

  @Input()
  public entityName!: string;

  @Input()
  public entityId!: number;

  @ViewChild("crudForm", { read: ViewContainerRef })
  public crudFormView!: ViewContainerRef;

  public crudBaseComponent!: CrudBaseComponent;

  private destroySubs$: Subject<void> = new Subject<void>();

  @ViewChild("confirmDialog")
  public confirmDialog!: ConfirmDialog;
  
  public keyDialog: string = "return";

  //#endregion

  //#region Constructor
  constructor(
    private cdr: ChangeDetectorRef,
    private confirmationService: ConfirmationService,
    private messageService: MessageService,
    private router: Router,
    private laoderService: LoaderService
  ) {

  }
  //#endregion

  //#region Members 'On' :: ngOnInit, ngAfterViewInit

  public ngOnInit(): void {

  }

  public ngAfterViewInit(): void {

  }

  public ngOnDestroy(): void {
    this.closeSubscription(this.destroySubs$);
  }

  //#endregion

  //#region Members 'Subscription' :: CloseSubscriptions()

  public closeSubscription(sub: Subject<void>): void {
    sub.next();
    sub.next();
  }

  //#endregion

  //#region Members 'Load' :: loadCrudBaseComponent()

  public async loadCrudBaseComponent(): Promise<void> {
    const module = await import(`../../entities/${this.entityName}/${this.entityName}.component.ts`);
    const componentName: string = Object.keys(module)[0];
    const createdComponent: ComponentRef<unknown> = this.crudFormView.createComponent(module[componentName]);
    this.crudBaseComponent = createdComponent.instance as CrudBaseComponent;

    if (this.crudBaseComponent) {
      this.crudBaseComponent.entityName = this.entityName;
      this.crudBaseComponent.entityId = this.entityId;
      this.crudBaseComponent.isForm = true;

      this.crudBaseComponent.getRefreshObservable()
        .pipe(
          takeUntil(this.destroySubs$)
        )
        .subscribe({
          next: (result: boolean | null) => {

            if (result == false) {
              this.messageService.add({
                severity: "error",
                summary: "Erro",
                detail: "Erro ao carregar o registro"
              });
            }

            this.cdr.detectChanges();
          }
        })
    }
  }

  //#endregion

  //#region Members 'Delete' :: confirmDelete(), closeConfirm()

  public onAccept(): void {
    this.confirmDialog.onAccept();
  }

  public onReject(): void {
    this.confirmDialog.onReject();
  }

  public confirmationReturn(): void {
    this.confirmationService.confirm({
      key: this.keyDialog,
      closable: true,
      accept: () => {
        this.returnToList()
      }
    });
  }

  //#endregion

  //#region Members 'List' :: returnToList()

  private returnToList(): void {
    this.router.navigate(["/manager/list/", this.entityName]);
  }

  //#endregion

  //#region Members 'General' :: getDescription(), canSave()

  public getDescription(): string {
    if (this.crudBaseComponent)
      return this.crudBaseComponent.getTypeDescription().getFormDescription();

    return "Formulário";
  }

  public canSave(): boolean {
    if (!this.crudBaseComponent)
      return false;

    return this.crudBaseComponent.canSave()
  }

  public save(): void {
    this.laoderService.Show();
    this.crudBaseComponent.crudManagerService.CreateEntity()
      .pipe(
        takeUntil(this.destroySubs$)
      ).subscribe({
        next: (result: any) => {
          this.laoderService.Hide();
          this.returnToList();
        },
        error: (err: any) => {
          this.messageService.add({
            severity: "error",
            summary: "Erro",
            detail: "Erro ao salvar.\nTenta novamente."
          });
          this.laoderService.Hide();
        }
      });
  }

  //#endregion

}
