import { Injectable } from "@angular/core";
import { NgxSpinnerService } from "ngx-spinner";

@Injectable({
    providedIn: "root"
})
export class LoaderService {

    //#region Constructor
    constructor(
        private spinner: NgxSpinnerService
    ) {
        
    }
    //#endregion

    //#region Members 'General' :: Hide(), Show()

    public Hide(): void {
        this.spinner.hide();
    }

    public Show(): void {
        this.spinner.show();
    }

    //#endregion

}
