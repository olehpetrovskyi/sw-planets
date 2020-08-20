export interface IUser {
  email: string;
}

export class User {
  email: string;

  constructor(options: IUser) {
    if (!options || !options.email) { throw new Error('User: email field is required!'); }
    this.init(options);
  }

  init(options: IUser) {
    this.email = options.email;
  }

  toJson(): IUser {
    return {
      email: this.email
    };
  }
}
