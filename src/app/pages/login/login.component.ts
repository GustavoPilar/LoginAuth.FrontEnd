import { Component, inject, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { AuthService } from "../../services/auth/authentication.service";
import { LoginRequest } from "../../models/auth/login-request";
import { Router } from "@angular/router";
import { SettingsService } from "../../core/services/settings.service";

@Component({
  selector: "app-login",
  standalone: false,
  templateUrl: "./login.component.html"
})
export class LoginComponent implements OnInit {

  //#region Fields

  /** Formulário de login */
  public form!: FormGroup;

  //#endregion

  //#region Constructor
  constructor(
    private settingsSerivice: SettingsService,
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.settingsSerivice.LoginPage();
  }
  //#endregion

  //#region Members 'On' :: OnInit
  public ngOnInit(): void {
    this.initForm()
  }
  //#endregion

  //#region Members 'General' :: login(), canLogin(), onCloseToast()

  private initForm(): void {
    this.form = this.formBuilder.group({
      email: [null, [Validators.required, Validators.pattern("^[^\@]+@[^\@]+.[^\@]+$")]],
      password: [null, [Validators.required, Validators.minLength(8)]]
    });
  }

  /**
   * @description Inicia o fluxo de login()
   * @returns {void}
   */
  public login(): void {
    this.router.navigate(["home"]);
    return;

    let login: LoginRequest = this.form.value;

    this.authService.loginFlow(login);
  }

  /**
   * @description Verifica se o formulário está válido
   * @returns {boolean}
   */
  public canLogin(): boolean {
    if (!this.form)
      return false;

    return this.form.valid;
  }

  /**
   * @description Quando o Toast de sucesso fechar, navega para a página Home
   * @returns {void}
   */
  public onCloseToast(): void {
    this.router.navigate(["/home"]);
  }

  //#endregion

}
