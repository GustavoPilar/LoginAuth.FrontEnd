export interface IEntityBase {
  id: number;
  name: string;
  description: string;
}

export class EntityBase implements IEntityBase {
  id!: number;
  name!: string;
  description!: string;
}
