import { DistribucionesPage } from './app.po';

describe('distribuciones App', function() {
  let page: DistribucionesPage;

  beforeEach(() => {
    page = new DistribucionesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
