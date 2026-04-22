import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Settings } from "../../core/settings";

@Component({
  selector: "app-register",
  standalone: false,
  templateUrl: "./register.component.html"
})
export class RegisterComponent implements OnInit {

  public form: FormGroup;

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

  public ngOnInit(): void {
  }

}
