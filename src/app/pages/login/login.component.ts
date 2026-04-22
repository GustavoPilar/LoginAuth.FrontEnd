import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Settings } from "../../core/settings";

@Component({
  selector: "app-login",
  standalone: false,
  templateUrl: "./login.component.html"
})
export class LoginComponent implements OnInit {

  //#region Fields
  
  /** Formulário de login */
  public form: FormGroup;

  //#endregion

  //#region Constructor
  constructor(
    private formBuilder: FormBuilder
  ) {
    this.form = this.formBuilder.group({
      email: [null, Validators.required],
      password: [null, Validators.required]
    });

    Settings.showMenu = false;
  }
  //#endregion

  //#region Members 'On' :: OnInit
  public ngOnInit(): void {
  }
  //#endregion

}
