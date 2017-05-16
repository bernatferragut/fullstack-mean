import { FullstackPage } from './app.po';

describe('fullstack App', () => {
  let page: FullstackPage;

  beforeEach(() => {
    page = new FullstackPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
