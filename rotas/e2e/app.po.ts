import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }

  getInputUsuario() {
    return element(by.css('#usuario'));
  }

  getInputSenha() {
    return element(by.css('#senha'));
  }

  getButtonLogin() {
    return element(by.css('button[type=submit]'));
  }

  getBrandLogoText() {
    return element(by.css('.brand-logo')).getText();
  }
}
