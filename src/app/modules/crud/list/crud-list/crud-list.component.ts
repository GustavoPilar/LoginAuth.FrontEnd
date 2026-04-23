import { AfterViewInit, ChangeDetectorRef, Component, ComponentRef, Input, OnDestroy, OnInit, ViewChild, ViewContainerRef } from "@angular/core";
import { CrudBaseComponent } from "../../base/crud-base";
import { BehaviorSubject, pipe, Subject, takeUntil } from "rxjs";
import { ConfirmationService, MessageService } from "primeng/api";
import { ConfirmDialog } from "primeng/confirmdialog";

@Component({
  selector: "app-crud-list",
  standalone: false,
  templateUrl: "./crud-list.component.html"
})
export class CrudListComponent implements OnInit, AfterViewInit, OnDestroy {

  //#region Fields

  @Input()
  public entityName: string | null = null;

  public crudBaseComponent!: CrudBaseComponent;

  public refresh: boolean = false;

  private destroySubs$: Subject<void> = new Subject<void>();

  @ViewChild("confirmDialog")
  public confirmDialog!: ConfirmDialog;

  public keyDialog: string = "delete";

  //#endregion

  //#region Constructor
  constructor(
    private viewRef: ViewContainerRef,
    private cdr: ChangeDetectorRef,
    private confirmationService: ConfirmationService,
    private messageService: MessageService
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
    const createdComponent: ComponentRef<unknown> = this.viewRef.createComponent(module[componentName]);
    this.crudBaseComponent = createdComponent.instance as CrudBaseComponent;

    if (this.crudBaseComponent) {
      this.crudBaseComponent.entityName = this.entityName;
      this.crudBaseComponent.isList = true;

      this.crudBaseComponent.getRefreshObservable()
        .pipe(
          takeUntil(this.destroySubs$)
        )
        .subscribe({
          next: (result: boolean) => {
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

  public confirmationDelete(id: number): void {
    this.confirmationService.confirm({
      key: this.keyDialog,
      closable: true,
      accept: () => {
        const deleteSub$: Subject<void> = new Subject<void>();

        this.crudBaseComponent.crudManagerService.DeleteEntityById(id)
          .pipe(
            takeUntil(deleteSub$)
          )
          .subscribe({
            next: (result: boolean) => {
              if (result) {
                this.messageService.add({
                  severity: "success",
                  summary: "Sucesso",
                  detail: "Registro deletado com sucesso",
                });
              }
              else {
                this.messageService.add({
                  severity: "error",
                  summary: "Erro",
                  detail: "O registro possui relações com outros. Remova-os antes de excluir esse."
                });
              }

              this.cdr.detectChanges();
              this.closeSubscription(deleteSub$);
              this.crudBaseComponent.loadEntities();
            },
            error: (err: any) => {
              console.log(err);
              this.messageService.add({
                severity: "error",
                summary: "Erro",
                detail: "Erro ao tentar excluir o registro"
              });
              this.closeSubscription(deleteSub$);
            }
          });
      },
      reject: () => {
        this.messageService.add({
          severity: "info",
          summary: "Cancelado",
          detail: "Exclusão de registro cancelada.",
          closable: true
        });
      }
    });
  }

  //#endregion

  //#region Members 'Form' :: newEntity(), editEntity()



  //#endregion

}
