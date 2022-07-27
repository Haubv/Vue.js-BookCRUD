export class Book {
    public id? : number;
    public name? : string;
    public author? : string;
    public typeBook? : string;
    public publishedDate? : string;
    constructor(init?: Partial<Book>) {
        Object.assign(this, init);
    }
}