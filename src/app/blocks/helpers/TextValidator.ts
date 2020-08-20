export class TextValidator {
  public static isEmailValid(email: string) {
    const emailRe = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    return emailRe.test(String(email).toLowerCase());
  }
}
