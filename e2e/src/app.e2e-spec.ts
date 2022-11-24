import { AppPage } from './app.po';
import {browser} from 'protractor';

describe('new App', () => {
  let page: AppPage;

  beforeEach(() => {
    browser.waitForAngularEnabled(false)
    page = new AppPage();
  });

  it('prueba 1', () => {
    page.navigateTo();
    expect(page.getTitleText()).toContain('Registrarse');
  });
  
  it('prueba 2', () => {
    page.navigateTo();
    expect(page.getTestp()).toContain('Login');
  });


  it('prueba 3', () => {
    page.navigateTo();
    expect(page.getParagraphText3()).toContain('inicio');
  });
});
