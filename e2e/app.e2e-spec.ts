import { AppPage } from './app.po';

<<<<<<< HEAD
describe('angular2-registration-login-example-cli App', () => {
=======
describe('angular-project App', () => {
>>>>>>> 107955331a3287aed8457845625dd6d9a8c823c5
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
