import { Component } from "@angular/core";

@Component({
  selector: "app-logo",
  standalone: false,
  template: `

    <div class="p-2 m-auto flex justify-content-center align-items-center overflow-hidden border-1" style="width: 10rem; height: 10rem; border-radius: 50%;">
      <div class="w-full h-full border-1 flex justify-content-center align-items-center" style="border-radius: 50%;">
        <p style="font-size: 2rem">Logo</p>
      </div>
    </div>

  `
})
export class LogoComponent {

  constructor() {

  }

}
