import { browser, by, element } from 'protractor';

const invalidEmailErrorSelector = '.qa-invalid-email-error';
const requiredEmailErrorSelector = '.qa-required-email-error';
const emailFieldSelector = '.qa-email-input';
const submitButtonSelector = '.qa-sign-in-button';



export class SignInPage {


  navigateTo(): Promise<unknown> {
    return browser.get(browser.baseUrl + '/sign-in') as Promise<unknown>;
  }

  setEmailInputText(email: string): void {
    element(by.css(emailFieldSelector)).sendKeys(email);
  }

  submitForm(): void {
    element(by.css(submitButtonSelector)).click();
  }

  async checkIfRequiredErrorVisible(): Promise<boolean> {
    return await element(by.css(requiredEmailErrorSelector)).isPresent();
  }

  async checkIfInvalidEmailFormatErrorVisible(): Promise<boolean> {
    return await element(by.css(invalidEmailErrorSelector)).isPresent();
  }
}
