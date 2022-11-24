import { browser, by, element , promise} from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/');
  };

  async getTitleText():Promise<string>{
    return element(by.deepCss('app-root <ion-card-title>')).getText();
  };
  async getTestp():Promise<string>{
    return element(by.Css('app-root <p>')).getText();
  };
  async getParagraphText3():Promise<string>{
    return element(by.Css('app-root h3')).getText();
  };
}
