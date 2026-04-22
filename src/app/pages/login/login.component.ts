import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: "app-login",
  standalone: false,
  templateUrl: "./login.component.html"
})
export class LoginComponent implements OnInit {

  public form: FormGroup;

  constructor(
    private formBuilder: FormBuilder
  ) {
    this.form = this.formBuilder.group({
      email: [null, Validators.required],
      password: [null, Validators.required]
    });
  }

  public ngOnInit(): void {
  }

}
