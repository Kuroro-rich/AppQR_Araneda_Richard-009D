import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.deepCss('app-root ')).getText();
  }
  getParagraphText2() {
    return element(by.deepCss('app-root h2')).getText();
  }
  getParagraphText3() {
    return element(by.deepCss('app-root h3')).getText();
  }
}
