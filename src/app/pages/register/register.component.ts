import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Settings } from "../../core/settings";

@Component({
  selector: "app-register",
  standalone: false,
  templateUrl: "./register.component.html"
})
export class RegisterComponent implements OnInit {

  //#region Fields

  /** Formulário de cadastro */
  public form: FormGroup;

  //#endregion

  //#region Constructor
  constructor(
    private formBuilder: FormBuilder
  ) {
    this.form = this.formBuilder.group({
      fullName: [null, Validators.required],
      userName: [null, Validators.required],
      email: [null, Validators.required],
      password: [null, Validators.required],
      confirmPassword: [null, Validators.required]
    });

    Settings.showMenu = false;
  }
  //#endregion

  //#region Members 'On' :: OnInit()
  public ngOnInit(): void {
  }
  //#endregion

}
