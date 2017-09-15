export enum Role {
  'Client',
  'Manager',
  'Admin'
}

export namespace Utilisateur {
  export class Data {
    public email: string;
    public password: string;
    public role: Role;
  }
  export class Authentification {
    public email: string;
    public password: string;
  }
  export class Reponse {
    public success: boolean;
    public message: string;
  }
  export class IsAuthenticated {
    public logged = false;
  }
}


