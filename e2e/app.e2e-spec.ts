import { SeedVRPage } from './app.po';

describe('seed-vr App', () => {
  let page: SeedVRPage;

  beforeEach(() => {
    page = new SeedVRPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
