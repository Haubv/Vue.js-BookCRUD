export class Response<T> {
    public code?: number;
    public data?: T;
  
    constructor(init?: Response<T>) {
      Object.assign(this, init);
    }
  }
  