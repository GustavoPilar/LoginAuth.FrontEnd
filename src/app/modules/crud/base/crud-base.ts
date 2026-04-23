import { Component, Input, OnDestroy, OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { EntityBase } from "../../../models/base/entity-base";
import { CrudManagerService } from "./crud-manager.service";
import { ConfirmationService, MessageService } from "primeng/api";
import { DialogService } from "primeng/dynamicdialog";
import { BehaviorSubject, catchError, Observable, of, Subject, takeUntil, throwError } from "rxjs";
import { DisplayColumn } from "./models/display-column";

@Component({
  selector: "app-crud-base",
  standalone: false,
  template: ``,
  providers: [CrudManagerService]
})
export abstract class CrudBaseComponent<Entity = EntityBase> implements OnInit, OnDestroy {

  //#region Fields

  @Input()
  public entityName: string | null = null;

  @Input()
  public entityId: number | string | null = null;


  @Input()
  public isList: boolean = false;

  @Input()
  public isForm: boolean = false;

  public selectedEntity: Entity | null = null;

  public entities: Entity[] = [];

  public icon: string | null = null;

  public form: FormGroup | null = null;

  private refreshSubject$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  private destroySubs$: Subject<void> = new Subject<void>();

  //#endregion

  //#region Constructor
  constructor(
    public crudManagerService: CrudManagerService,
    protected formBuilder: FormBuilder,
    protected messageService: MessageService,
    protected confirmationService: ConfirmationService,
    protected dialogService: DialogService
  ) {

  }
  //#endregion

  //#region Members 'On' :: ngOnInit
  public ngOnInit(): void {
    this.crudManagerService.Initialize(this as CrudBaseComponent);

    if (this.form) {

    }
    else if (this.isList) {
      this.loadEntities();
    }
  }

  public ngOnDestroy(): void {
    this.destroySubs$.next();
    this.destroySubs$.complete();
  }
  //#endregion

  //#region Members 'List' :: loadEntities()

  public loadEntities(): void {
    this.crudManagerService.GetEntities()
      .pipe(
        takeUntil(this.destroySubs$)
      )
      .subscribe({
        next: (entities: Entity[]) => {
          this.entities = entities;
          this.refreshSubject$.next(true);
        },
        error: (err: any) => {
          console.log(err);
          this.refreshSubject$.next(true);
        }
      });
  }

  public abstract getDisplayColumn(): DisplayColumn[];

  public abstract getListDescription(): string;

  //#endregion

  //#region Members 'General' :: getRefreshObservable()

  public getRefreshObservable(): Observable<boolean> {
    return this.refreshSubject$.asObservable();
  }

  //#endregion

}
