export class TypeBook {
    public id? : number;
    constructor(init?: Partial<TypeBook>) {
        Object.assign(this, init);
    }
}