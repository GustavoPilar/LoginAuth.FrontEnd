import { SafeUrl } from "@angular/platform-browser";
import { EntityBase } from "./interfaces/entity-base";

// Crud
export class ExempleOne extends EntityBase {

}

export class ExempleTwo extends EntityBase {

  age!: number;

}

// System
export class VideoLesson extends EntityBase {

  url!: string;

  safeURL?: SafeUrl;

}


// Report
