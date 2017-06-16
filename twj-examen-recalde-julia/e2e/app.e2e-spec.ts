import { TwjExamenRecaldeJuliaPage } from './app.po';

describe('twj-examen-recalde-julia App', () => {
  let page: TwjExamenRecaldeJuliaPage;

  beforeEach(() => {
    page = new TwjExamenRecaldeJuliaPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
