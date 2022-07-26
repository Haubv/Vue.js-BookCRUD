export class Book {
    public id? : number;
    public name? : string;
    public type? : string;
    constructor(init?: Partial<Book>) {
        Object.assign(this, init);
    }
}