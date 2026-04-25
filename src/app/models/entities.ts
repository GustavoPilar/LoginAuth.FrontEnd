import { SafeUrl } from "@angular/platform-browser";
import { EntityBase } from "./interfaces/entity-base";

// Crud

/** Produto */
export class Product extends EntityBase {

  //#region Fields

  /** Preço do produto */
  price!: number;

  /** Data de registro */
  registerDate!: Date;

  //#endregion

}

// System

/** Aula de video */
export class VideoLesson extends EntityBase {

  //#region Fields 
  
  /** URL do vídeo */
  url!: string;

  //#endregion

}


// Report
