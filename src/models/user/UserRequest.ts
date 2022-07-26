export class UserRequest {
    public username? : string;
    public password? : string;
    public email? : string;
    constructor(init?: Partial<UserRequest>) {
        Object.assign(this, init);
    }
}