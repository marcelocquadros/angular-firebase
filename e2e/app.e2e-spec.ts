import { AngularTunePage } from './app.po';

describe('angular-tune App', function() {
  let page: AngularTunePage;

  beforeEach(() => {
    page = new AngularTunePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
