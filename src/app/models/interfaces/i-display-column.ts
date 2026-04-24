import { DisplayColumnTypeEnum } from "./display-column-type-enum";

export interface IDisplayColumn {

  /** Campo da entidade */
  field: string;

  /** Descrição UI */
  description: string;

  /** Tipo do campo */
  type: DisplayColumnTypeEnum;

  /** Ícone */
  icon?: string;

  /**
   * @description É texto?
   * @returns {boolean}
   */
  IsText(): boolean;

  /**
   * @description É numérico?
   * @returns {boolean}
   */
  IsNumeric(): boolean;

  /**
   * @description É booleano?
   * @returns {boolean}
   */
  IsBoolean(): boolean;

  /**
   * @description É data?
   */
  IsDate(): boolean;

  /**
   * @description É objeto?
   * @returns {boolean}
   */
  IsObject(): boolean;

}

/**
 * @description Columna da tabela
 * @example
 * field = "description"
 * description = "Descrição"
 * type = DisplayColumnTypeEnum.Text
 * icon = Primeicons.TAG
 */
export class DisplayColumn implements IDisplayColumn {

  //#region Fields

  field!: string;

  description!: string;

  type!: DisplayColumnTypeEnum;

  icon?: string;

  //#endregion

  //#region Constructor
  constructor(
    field: string,
    description: string,
    type: DisplayColumnTypeEnum,
    icon?: string
  ) {
    this.field = field;
    this.description = description;
    this.type = type;
    this.icon = icon;
  }
  //#endregion

  //#region Members 'Is' :: IsText(), IsNumeric(), IsBoolean(), IsDate(), IsObject()

  IsText(): boolean {
    return this.type === DisplayColumnTypeEnum.Text;
  }

  IsNumeric(): boolean {
    return this.type === DisplayColumnTypeEnum.Numeric;
  }

  IsBoolean(): boolean {
    return this.type === DisplayColumnTypeEnum.Boolean;
  }

  IsDate(): boolean {
    return this.type === DisplayColumnTypeEnum.Date
  }

  IsObject(): boolean {
    return this.type === DisplayColumnTypeEnum.Object;
  }

  //#endregion

}
