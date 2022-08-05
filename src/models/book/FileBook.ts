export class FileBook {
    public id? : number;
    public desc?: string;
    public file?: File;
    constructor(init?: Partial<FileBook>) {
        Object.assign(this, init);
    }
}