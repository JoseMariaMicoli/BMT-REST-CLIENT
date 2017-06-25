import { BMTRESTCLIENTPage } from './app.po';

describe('bmt-rest-client App', () => {
  let page: BMTRESTCLIENTPage;

  beforeEach(() => {
    page = new BMTRESTCLIENTPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
