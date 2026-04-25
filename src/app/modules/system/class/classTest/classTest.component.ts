import { Component, OnInit } from "@angular/core";
import { PrimeIcons } from "primeng/api";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: "app-class-test",
  standalone: false,
  templateUrl: "./classTest.component.html"
})
export class ClassTestComponent implements OnInit {

  //#region Field

  public options: any[][] = [];

  public questions: any[] = [];

  public questionForm!: FormGroup;

  //#endregion

  //#region Constructor
  constructor(
    private formBuilder: FormBuilder
  ) {
  }
  //#endregion

  //#region Members 'On' :: ngOnInit

  public ngOnInit(): void {
    this.questions = [
      {
        id: 0,
        title: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore odit fuga suscipit ratione velit iure?",
        options: [
          { id: 0, label: "Opção 1", value: 1 },
          { id: 1, label: "Opção 2", value: 2 },
          { id: 2, label: "Opção 3", value: 3 },
          { id: 3, label: "Opção 4", value: 4 },
        ]
      },
      {
        id: 1,
        title: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius, adipisci?",
        options: [
          { id: 0, label: "Opção 1", value: 1 },
          { id: 1, label: "Opção 2", value: 2 },
          { id: 2, label: "Opção 3", value: 3 },
          { id: 3, label: "Opção 4", value: 4 },
        ]
      }
    ]

    const formObj: any = {};

    this.questions.forEach((question: any) => {
      formObj[question.id] = [null, Validators.required];
    });

    this.questionForm = this.formBuilder.group(formObj);
  }

  //#endregion

  //#region Members 'General' ::

  public canSave(): boolean {
    return this.questionForm.valid;
  }

  //#endregion

}
