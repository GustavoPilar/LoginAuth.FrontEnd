import { ApiService } from './../../../services/communication/api.service';
import { Component, Input, OnDestroy, OnInit } from "@angular/core";
import { AbstractControl, FormBuilder, FormGroup } from "@angular/forms";
import { CrudManagerService } from "./crud-manager.service";
import { ConfirmationService, MessageService } from "primeng/api";
import { DialogService } from "primeng/dynamicdialog";
import { BehaviorSubject, Observable, of, Subject, switchMap, takeUntil } from "rxjs";
import { EntityBase } from "../../../models/interfaces/entity-base";
import { LoaderService } from "../../../core/services/loader.service";
import { DisplayColumn } from "../../../models/interfaces/i-display-column";
import { TypeDescription } from "../../../models/interfaces/i-type-description";

@Component({
  selector: "app-crud-base",
  standalone: false,
  template: ``,
  providers: [CrudManagerService]
})
export abstract class CrudBaseComponent<Entity = EntityBase> implements OnInit, OnDestroy {

  //#region Fields

  /** Nome da entidade */
  @Input()
  public entityName!: string;

  /** Identificador da entidade */
  @Input()
  public entityId?: number;

  /** É lista? */
  @Input()
  public isList: boolean = false;

  /** É formulário? */
  @Input()
  public isForm: boolean = false;

  /** Entidade selecionada */
  public selectedEntity: Entity | null = null;

  /** Lista de entidades */
  public entities: Entity[] = [];

  /** Icone do componente */
  public icon?: string;

  /** Formulário da entidade */
  public entityForm!: FormGroup;

  /** BehaviorSubejct para refresh */
  private refreshSubject$: BehaviorSubject<boolean | null> = new BehaviorSubject<boolean | null>(null);

  /** Subject para destruir subscriptions */
  private destroySubs$: Subject<void> = new Subject<void>();

  //#endregion

  //#region Constructor
  constructor(
    public crudManagerService: CrudManagerService,
    protected apiService: ApiService,
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

  /**
   * @description Carrega as entidades para lista
   * @returns {void}
   */
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

  /**
   * @description Retorna as colunas da tabela
   * @abstract
   * @returns {DisplayColumn[]}
   */
  public abstract getDisplayColumn(): DisplayColumn[];

  //#endregion

  //#region Members 'Form' :: getFormDescription()

  /**
   * @description Carrega a entidade para formulário
   * @returns {void}
   */
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

          this.entityForm = this.initForm();
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

  /**
   * @description Carrega os recursos necessários para o formulário. Por exemplo uma lista para um Select
   * @returns {Observable<any>}
   */
  public loadResources(): Observable<any> {
    return of([]);
  }

  /**
   * @description Inicia o formulário
   * @abstract
   * @returns {vooid}
   */
  protected abstract initForm(): FormGroup;

  /**
   * @description Informa se o formulário é válid ou não para salvar
   * @returns {boolean}
   */
  public canSave(): boolean {
    if (!this.entityForm)
      return false;

    return this.entityForm.valid;
  }

  /**
   * @description Retorna os valores do formulário como um objeto da entidade
   * @returns {Entity}
   */
  public prepareEntityToSave(): Entity {
    let entity: Entity = this.entityForm.value;

    return entity;
  }

  public getField(field: string): AbstractControl {
    console.log(this.entityForm);
    return this.entityForm.controls[field] as AbstractControl;
  }

  //#endregion

  //#region Members 'General' :: getRefreshObservable()

  /**
   * @description Retorna um observável para refresh
   * @returns {Observable<boolean | null>}
   */
  public getRefreshObservable(): Observable<boolean | null> {
    return this.refreshSubject$.asObservable();
  }

  /**
   * @description Retorna uma descrição da entidade
   * @returns {TypeDescription}
   */
  public abstract getTypeDescription(): TypeDescription;

  //#endregion

}
