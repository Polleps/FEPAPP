import { HardwareAppPage } from './app.po';

describe('hardware-app App', () => {
  let page: HardwareAppPage;

  beforeEach(() => {
    page = new HardwareAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
