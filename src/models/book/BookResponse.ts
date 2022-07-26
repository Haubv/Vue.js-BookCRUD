export class BookResponse {
    public id? : number;
    public name? : string;
    public type? : string;
    constructor(init?: Partial<BookResponse>) {
        Object.assign(this, init);
    }
}