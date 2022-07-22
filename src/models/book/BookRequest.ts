export class BookRequest {
    public id? : number;
    public bookName? : string;
    public author? : string;
    public publishedDate? : string;
    constructor(init?: Partial<BookRequest>) {
        Object.assign(this, init);
    }
}