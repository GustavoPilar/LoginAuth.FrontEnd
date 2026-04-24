export interface ITypeDescription {

  /** Descrição no singular */
  singular: string;

  /** Descrição no plural */
  plural: string;

  /** É artigo feminino?  */
  isFemale: boolean;

  /**
   * @description Retorna uma descrição para o título do formulário
   * @param {boolean} isNewForm É formulário novo?
   * @returns {string}
   */
  getFormDescription(isNewForm: boolean): string;
}

/**
 * @description Tipo de descrição
 * @example
 *  singular = "Usuário"
 *  plural = "Usuários"
 *  isFemale = true
 */
export class TypeDescription implements ITypeDescription {

  //#region Fields

  public singular!: string;

  public plural!: string;

  public isFemale!: boolean;

  //#endregion

  //#region Constructor
  constructor(
    singular: string,
    plural: string,
    isFemale: boolean = false
  ) {
    this.singular = singular;
    this.plural = plural;
    this.isFemale = isFemale;
  }
  //#endregion

  //#region Members 'Get' :: GetFormDescription()

  public getFormDescription(isNewForm: boolean = false): string {
    let prefix: string = "";

    if (isNewForm) {
      prefix = this.isFemale ? "Nova " : "Novo ";
    }
    else {
      prefix = `Editando ${this.isFemale ? "uma" : "um"} `;
    }

    return prefix + this.singular;
  }

  //#endregion
}
