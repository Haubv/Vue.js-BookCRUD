export class FavoriteBook {
    public id? : number;
    public name? : string;
    public author? : string;
    public publishedDate? : string;
    public typeBook? : string;
    public typeBookId? : number | null;
    public pathFile? : string;
    public fileBookId? : number;
    public description? : string;
    constructor(init?: Partial<FavoriteBook>) {
        Object.assign(this, init);
    }
}