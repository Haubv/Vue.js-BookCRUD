export class FileBook {
    public id? : number;
    public path? : string;
    public desc?: string;
    public file?: File;
    constructor(init?: Partial<FileBook>) {
        Object.assign(this, init);
    }
}