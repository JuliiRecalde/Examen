import { TwjExamenApiRecaldeJuliaPage } from './app.po';

describe('twj-examen-api-recalde-julia App', () => {
  let page: TwjExamenApiRecaldeJuliaPage;

  beforeEach(() => {
    page = new TwjExamenApiRecaldeJuliaPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
