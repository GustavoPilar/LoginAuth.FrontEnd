import { environment } from "../env/environment";

export const API_URL: string = environment.apiUrl;

export class AppHeader {

    //#region Fields

    /** Título */
    title!: string;

    /** Cabeçalho */
    subTitle?: string;
    
    /** Descrição */
    description?: string;

    /** Ícone */
    icon?: string;

}