import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { jwtDecode } from "jwt-decode";
import { MessageService } from "primeng/api";
import { Router } from "@angular/router";
import { LocalStorageService } from "../storage/local-storage.service";
import { LoaderService } from "../../core/services/loader.service";
import { LoginRequest } from "../../models/auth/login-request";
import { RegisterRequest } from "../../models/auth/register-request";
import { API_URL } from "../../core/global";

@Injectable({
  providedIn: "root"
})
export class AuthService {

  //#region Fields

  /** Nome para chave de segurança */
  private keySecurity: string = "UserProfile"

  /** Key do toast de sucesso */
  public successKey: string = "success";

  /** Key do toast de erro */
  public errorKey: string = "error";

  //#endregion

  //#region Constructor
  constructor(
    private httpClient: HttpClient,
    private localStorageService: LocalStorageService,
    private messageService: MessageService,
    private loaderService: LoaderService,
    private router: Router
  ) {

  }
  //#endregion

  //#region Members :: Login(), isAuthenticated()

  /**
   * @description Fluxo para login de usuário
   * @param login Formulário
   * @returns {Promise<boolean>}
   */
  public async loginFlow(login: LoginRequest): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      try {
        this.loaderService.Show();

        const url: string = `${API_URL}/auth/login`;

        login.email = login.email.toLowerCase();

        this.httpClient.post(url, login, { headers: { "Content-Type": "application/json" } }).subscribe({
          next: (result: any) => {
            this.localStorageService.SetItem(this.keySecurity, JSON.stringify(result));
            this.loaderService.Hide();

            this.showMessage("success", "Bem vindo(a)!", "Aguarde um instante, você será redirecionado.", this.successKey);

            resolve();
          },
          error: (err: any) => {
            console.log(err);
            this.localStorageService.RemoveItem(this.keySecurity);
            this.loaderService.Hide();

            this.showMessage("error", "Erro!", "Erro ao fazer login", this.errorKey);
            reject();
          }
        });

      } catch (error) {
        console.log(error);
        this.loaderService.Hide();
        reject();
      }
    });
  }

  /**
   * @description Fluxo para registro de usuário
   * @param register Formulário
   * @returns {Promise<boolean>}
   */
  public async registerFlow(register: RegisterRequest): Promise<boolean> {
    return new Promise<boolean>((resolve, reject) => {
      try {
        this.loaderService.Show();
        register.email = register.email.toLowerCase();

        const url: string = `${API_URL}/auth/register`;

        this.httpClient.post(url, register, { headers: { "Content-Type": "application/json" } }).subscribe({
          next: (result: any) => {
            this.loaderService.Hide();
            resolve(result.succeeded);
          },
          error: (err: any) => {
            console.log(err);
            this.localStorageService.RemoveItem(this.keySecurity);
            this.loaderService.Hide();

            let errorMessage: string = "Formulário inválido";

            if (err.error.errors) {
              let key: string = Object.keys(err.error.errors)[0];

              err.error.errors[key].forEach((error: any) => {
                errorMessage = error;
              });
            }

            if (err.error.length && err.error.length > 0) {
              let firstError: any = err.error[0];

              if (firstError.code == "DuplicateEmail") {
                errorMessage = "Email já cadastrado.";
              }

              if (firstError.code == "DuplicateUserName") {
                errorMessage = "Nome de usuário já existe."
              }
            }

            this.showMessage("error", "Erro", errorMessage, this.errorKey);

            reject(false);
          }
        });

      } catch (error) {
        console.log(error);
        this.loaderService.Hide();
        reject(false);
      }
    })
  }

  public async logout(): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      try {
        this.localStorageService.RemoveItem(this.keySecurity);
        this.router.navigate(["/login"]);
        resolve();
      } catch (error) {
        console.log(error);
        this.localStorageService.RemoveItem(this.keySecurity);
        this.router.navigate(["/login"]);
        reject();
      }
    })
  }

  /**
   * @description Retorna o valor do token guardado
   * @returns {any} Token
   */
  public GetToken(): any {
    const userProfile: any = this.localStorageService.GetItem(this.keySecurity);

    if (!userProfile)
      return null;

    return userProfile.token;
  }

  /**
   * @description Retorna o valor do usuário guardado
   * @returns {any} Token
   */
  public GetUser(): any {
    const userProfile: any = this.localStorageService.GetItem(this.keySecurity);

    if (!userProfile)
      return null;

    return { userName: userProfile.userName, userEmail: userProfile.email };
  }

  /**
   * @description Verifica se o usuário está autenticado
   * @returns {boolean} Valor booleano
   */
  public IsAuthenticated(): boolean {
    const token = this.GetToken();

    if (!token) return false;

    try {
      const decoded: any = jwtDecode(token);

      const expired = Date.now() >= decoded.exp * 1000;

      return !expired;
    } catch {
      return false;
    }
  }

  /**
   * @description Mostra o Toast
   * @param severity Severidade
   * @param summary Titulo
   * @param detail Texto
   * @param id Id da mensagem
   * @returns {void} Vazio
   */
  private showMessage(severity: "error" | "success", summary: string, detail: string, id: string): void {
    this.messageService.add({
      key: id,
      severity,
      summary,
      detail,
      closable: true,
      life: 2000
    });
  }

  //#endregion

}
