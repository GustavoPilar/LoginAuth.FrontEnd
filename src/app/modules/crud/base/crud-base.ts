import { Component, Input, OnDestroy, OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { EntityBase } from "../../../models/base/entity-base";
import { CrudManagerService } from "./crud-manager.service";
import { ConfirmationService, MessageService } from "primeng/api";
import { DialogService } from "primeng/dynamicdialog";
import { BehaviorSubject, catchError, Observable, of, Subject, switchMap, takeUntil, throwError } from "rxjs";
import { DisplayColumn } from "./models/display-column";
import { TypeDescription } from "./models/type-description";
import { LoaderService } from "../../../services/utils/loader.service";

@Component({
  selector: "app-crud-base",
  standalone: false,
  template: ``,
  providers: [CrudManagerService]
})
export abstract class CrudBaseComponent<Entity = EntityBase> implements OnInit, OnDestroy {

  //#region Fields

  @Input()
  public entityName!: string;

  @Input()
  public entityId!: number;


  @Input()
  public isList: boolean = false;

  @Input()
  public isForm: boolean = false;

  public selectedEntity: Entity | null = null;

  public entities: Entity[] = [];

  public icon: string | null = null;

  public form!: FormGroup;

  private refreshSubject$: BehaviorSubject<boolean | null> = new BehaviorSubject<boolean | null>(null);

  private destroySubs$: Subject<void> = new Subject<void>();

  //#endregion

  //#region Constructor
  constructor(
    public crudManagerService: CrudManagerService,
    protected formBuilder: FormBuilder,
    protected messageService: MessageService,
    protected confirmationService: ConfirmationService,
    protected dialogService: DialogService,
    protected loaderService: LoaderService
  ) {

  }
  //#endregion

  //#region Members 'On' :: ngOnInit
  public ngOnInit(): void {
    this.loaderService.Show();
    this.crudManagerService.Initialize(this as CrudBaseComponent);

    if (this.isForm) {
      this.loadEntity();
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
          this.loaderService.Hide();
          this.refreshSubject$.next(true);
        },
        error: (err: any) => {
          console.log(err);
          this.loaderService.Hide();
          this.refreshSubject$.next(false);
        }
      });
  }

  public abstract getDisplayColumn(): DisplayColumn[];

  //#endregion

  //#region Members 'Form' :: getFormDescription()

  public loadEntity(): void {
    this.crudManagerService.GetEntityById()
      .pipe(
        takeUntil(this.destroySubs$),
        switchMap((entity: Entity) => {
          this.selectedEntity = entity;
          return this.loadResources();
        })
      )
      .subscribe({
        next: (result) => {

          this.initForm();
          this.loaderService.Hide();
          this.refreshSubject$.next(true);
        },
        error: (err: any) => {
          console.log(err);
          this.loaderService.Hide();
          this.refreshSubject$.next(false);
        }
      });
  }

  public loadResources(): Observable<any> {
    return of([]);
  }

  public abstract initForm(): void;

  public canSave(): boolean {
    if (!this.form)
      return false;

    return this.form.valid;
  }

  public prepareEntityToSave(): Entity {
    let entity: Entity = this.form.value;

    return entity;
  }

  //#endregion

  //#region Members 'General' :: getRefreshObservable()

  public getRefreshObservable(): Observable<boolean | null> {
    return this.refreshSubject$.asObservable();
  }

  public abstract getTypeDescription(): TypeDescription;

  //#endregion

}
