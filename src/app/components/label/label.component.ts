import { Component, Input, OnInit } from "@angular/core";
import { AbstractControl, Validators } from "@angular/forms";

@Component({
    selector: "app-label",
    standalone: false,
    template: `
    <label [for]="for">
        {{title}}:
        @if (hasRequiredValidators()) {
            <span style="color: red;">*</span>
        }
    </label>
    `
})
export class LabelComponent {

    //#region Fields

    @Input()
    public title!: string;

    @Input()
    public for?: string;

    @Input()
    public control?: AbstractControl;

    //#endregion

    //#region Constructor
    constructor() {
        
    }
    //#endregion

    //#region Members 'General' :: hasRequiredValidators()

    public hasRequiredValidators(): boolean {
        if (!this.control)
            return false;

        return this.control.hasValidator(Validators.required) || this.control.hasValidator(Validators.requiredTrue);
    }

    //#endregion

}
