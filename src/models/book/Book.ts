export class Book {
    public id? : number;
    public name? : string;
    public author? : string;
    public typeBook? : string;
    public typeBookId? : number | null;
    public publishedDate? : string;
    public fileName? : string;
    public fileBookId? : number;
    constructor(init?: Partial<Book>) {
        Object.assign(this, init);
    }
}