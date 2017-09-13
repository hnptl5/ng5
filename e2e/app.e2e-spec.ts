import { RecipeShopPage } from './app.po';

describe('recipe-shop App', () => {
  let page: RecipeShopPage;

  beforeEach(() => {
    page = new RecipeShopPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
