export class BookResponse {
    public id? : number;
    public bookName? : string;
    public author? : string;
    public publishedDate? : string;
    constructor(init?: Partial<BookResponse>) {
        Object.assign(this, init);
    }
}