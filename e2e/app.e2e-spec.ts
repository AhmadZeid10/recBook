import { RecBookPage } from './app.po';

describe('rec-book App', () => {
  let page: RecBookPage;

  beforeEach(() => {
    page = new RecBookPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('rb works!');
  });
});
