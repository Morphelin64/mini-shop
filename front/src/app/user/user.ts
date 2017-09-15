export namespace UserModel {
  export class User {
    public id: number;
    public email: string;
    public password: string;
  }
  export class Authentication {
    public email: string;
    public password: string;
  }
  export class Answer {
    public succes: boolean;
    public message: string;
  }
}
