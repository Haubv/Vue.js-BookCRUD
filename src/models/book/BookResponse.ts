

export class BookResponse {
    public id? : number;
    public name? : string;
    public author? : string;
    public publishedDate? : string;
    public typeBook? : string;
    constructor(init?: Partial<BookResponse>) {
        Object.assign(this, init);
    }
}