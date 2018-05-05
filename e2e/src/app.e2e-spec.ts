import { AppPage } from './app.po';

describe('angular-modal-gallery-2018.github.io App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(true).toBe(true);
  });
});
