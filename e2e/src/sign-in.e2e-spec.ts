import { SignInPage } from './sign-in.po';
import { browser, logging } from 'protractor';

describe('Sign In Form', () => {
  let page: SignInPage;

  beforeEach(() => {
    page = new SignInPage();
  });

  it('should display "required" error-message message when input is empty', () => {
    page.navigateTo();
    page.setEmailInputText('');
    page.submitForm();

    expect(page.checkIfRequiredErrorVisible()).toBeTruthy();
  });

  it('should display "invalid email" error-message message when email is invalid', () => {
    page.navigateTo();
    page.setEmailInputText('someinvalidemail@');
    page.submitForm();

    expect(page.checkIfInvalidEmailFormatErrorVisible()).toBeTruthy();
  });

  it('should path user with valid email and redirect him to planets list', async (done) => {
    page.navigateTo();
    page.setEmailInputText('valid@email');
    page.submitForm();

    browser.getCurrentUrl().then(url => {
        expect(url).not.toContain('/sign-in');
        done();
      }
    );
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
