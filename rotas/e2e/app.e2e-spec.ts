import { AppPage } from './app.po';

describe('rotas App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('deve fazer login', () => {
    page.navigateTo();
    page.getInputUsuario().sendKeys('usuario@email.com');
    page.getInputSenha().sendKeys('123456');
    page.getButtonLogin().click();
    expect(page.getBrandLogoText()).toBe('Rotas Ng2');
  });
});
