export class TypeDescription {
    singular!: string;
    plural!: string;
    isFamale!: boolean;

    constructor(singular: string, plural: string, isFamale: boolean) {
        this.singular = singular;
        this.plural = plural;
        this.isFamale = isFamale;
    }

    public getFormDescription(isNew: boolean = false): string {
        let prefix: string = "";

        if (isNew) {
            prefix = this.isFamale ? "Nova " : "Novo ";
        }
        else {
            prefix = `Editando ${this.isFamale ? "uma" : "um"} `;
        }

        return prefix + this.singular;
    }
}