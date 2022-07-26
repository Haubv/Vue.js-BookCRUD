import { TypeBook } from "./TypeBook";

export class BookRequest {
    public id? : number;
    public name? : string;
    public typeBook? : TypeBook;
    constructor(init?: Partial<BookRequest>) {
        Object.assign(this, init);
    }
}