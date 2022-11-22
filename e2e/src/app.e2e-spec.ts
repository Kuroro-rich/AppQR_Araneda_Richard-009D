import { AppPage } from './app.po';

describe('new App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('prueba 1', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toContain('Bienvenido a Protactor');
  });
  
  it('prueba 2', () => {
    page.navigateTo();
    expect(page.getParagraphText2()).toContain('Hola');
  });


  it('prueba 1', () => {
    page.navigateTo();
    expect(page.getParagraphText3()).toContain('Cualquier cosita');
  });
});
