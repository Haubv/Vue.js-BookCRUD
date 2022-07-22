export class Book {
    public id? : number;
    public bookName? : string;
    public author? : string;
    public publishedDate? : string;
    constructor(init?: Partial<Book>) {
        Object.assign(this, init);
    }
}