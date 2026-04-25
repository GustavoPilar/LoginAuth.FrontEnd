import { Component, inject, OnInit } from "@angular/core";
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, Validators } from "@angular/forms";
import { AuthService } from "../../services/auth/authentication.service";
import { Router } from "@angular/router";
import { RegisterRequest } from "../../models/auth/register-request";
import { SettingsService } from "../../core/services/settings.service";

@Component({
  selector: "app-register",
  standalone: false,
  templateUrl: "./register.component.html"
})
export class RegisterComponent implements OnInit {

  //#region Fields

  /** Formulário de login */
  public form!: FormGroup;

  public fieldsMismatch: string = "fieldsMismatch";

  public usernamePattern: string = "usernamePattern";

  //#endregion

  //#region Constructor
  constructor(
    private settingsService: SettingsService,
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.settingsService.LoginPage();
  }

  //#endregion

  //#region Members 'On' :: OnInit
  public ngOnInit(): void {
    this.initForm();
  }
  //#endregion

  //#region Members 'General' :: Register(), canRegister(), onCloseToast()

  private initForm(): void {
    this.form = this.formBuilder.group({
      fullName: [null, Validators.required],
      userName: [null, [Validators.required, Validators.pattern("^[a-zA-Z0-9 ]+$")]],
      email: [null, [Validators.required, Validators.pattern("^[^\@]+@[^\@]+.[^\@]+$")]],
      password: [null, [Validators.required, Validators.minLength(8)]],
      confirmPassword: [null, [Validators.required, Validators.minLength(8)]],
      acceptTerms: [false, Validators.requiredTrue]
    }, {
      validators: this.matchFields()
    });
  }

  private matchFields() {
    return (group: AbstractControl): ValidationErrors | null => {
      const value1 = group.get("password")?.value;
      const value2 = group.get("confirmPassword")?.value;

      if (value1 !== value2) {
        return { fieldsMismatch: true };
      }

      return null;
    }
  }

  public hasUsernameError(): boolean {
    return this.form.get('userName')?.errors?.['pattern'];
  }

  /**
   * @description Inicia o fluxo de registro
   * @returns {void}
   */
  public register(): void {
    this.router.navigate(["home"]);
    return;

    let register: RegisterRequest = this.form.value;

    this.authService.registerFlow(register);
  }

  /**
   * @description Verifica se o formulário está válido
   * @returns {boolean}
   */
  public canRegister(): boolean {
    if (!this.form)
      return false;

    console.log(this.form);
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
