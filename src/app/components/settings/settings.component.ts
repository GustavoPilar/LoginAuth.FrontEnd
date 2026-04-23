import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { ConfirmationService, MenuItem, PrimeIcons } from "primeng/api";
import { DynamicDialogConfig, DynamicDialogRef } from "primeng/dynamicdialog";

@Component({
  selector: "app-settings",
  standalone: false,
  templateUrl: "./settings.component.html"
})
export class SettingsComponent implements OnInit {

  //#region Fields

  /** Opções para configuração */
  public items: MenuItem[] = [];

  //#endregion

  //#region Constructor
  constructor(
    private dynamicConfig: DynamicDialogConfig,
    private dynamicDialogRef: DynamicDialogRef,
    private router: Router,
    private confirmationService: ConfirmationService
  ) {

  }
  //#endregion

  //#region Members 'On' :: OnInit

  public ngOnInit(): void {
    this.dynamicConfig.header = "Configuração";

    this.items = [
      { label: "Conta de usuário", icon: PrimeIcons.USER },
      { label: "Preferências", icon: PrimeIcons.PALETTE },
      { label: "Sobre o sistema", icon: PrimeIcons.QUESTION_CIRCLE },
    ]
  }

  //#endregion

  //#region Members 'Router' :: logout()

  /**
   * @description Retorna a página de login
   * @returns {void}
   */
  public logout(): void {
    this.router.navigate(["/login"]);
    this.closeConfirm();
    this.dynamicDialogRef.close();
  }

  //#region Members 'ConfirmDialog' :: openConfirm(), closeConfirm()

  /**
   * @description Abre a confirmação para logout
   * @returns {void}
   */
  public openConfirm(): void {
    this.confirmationService.confirm({
      key: "exit",
      closable: true,
      blockScroll: true
    });
  }

  /**
   * @description Fecha a confirmação para logout
   * @returns {void}
   */
  public closeConfirm(): void {
    this.confirmationService.close();
  }

  //#endregion

}
