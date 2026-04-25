export interface IEntityBase {

  /** Id da entidade */
  id: number;

  /** Nome da entidade */
  name: string;

  /** Descrição da entidade */
  description: string;

}

/** Estrutura de entiade básica */
export class EntityBase implements IEntityBase {
  
  id!: number;
  
  name!: string;
  
  description!: string;

}
