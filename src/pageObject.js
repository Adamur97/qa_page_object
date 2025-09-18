// Header class
class Header {
  get logo() {
    return 'Conduit logo';
  }
}

// PageObject class
class PageObject {
  constructor(url) {
    this.url = url;
    this.header = new Header();
  }

  clickOnLogo() {
    return 'Click on the ' + this.header.logo;
  }
}

// ArticlePage class
class ArticlePage extends PageObject {
  constructor(url, slug) {
    super(url);
    this.url = `${url}${slug}`;
  }

  get commentButton() {
    return '[Publish comment] button';
  }

  clickOnCommentButton() {
    return 'Click on the ' + this.commentButton;
  }

  assertPageOpened() {
    return `The ${this.url} is opened`;
  }
}

// Eksport klas
module.exports = { Header, PageObject, ArticlePage };
