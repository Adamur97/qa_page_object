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
    // ❌ było: 'Click on the ' + this.header.logo
    return 'Click on the' + this.header.logo;
  }
}

// ArticlePage class
class ArticlePage extends PageObject {
  constructor(url, slug) {
    super(url);
    this.url = url + slug;
  }

  get commentButton() {
    return '[Publish comment] button';
  }

  clickOnCommentButton() {
    // ❌ było: 'Click on the ' + this.commentButton
    return 'Click on the' + this.commentButton;
  }

  assertPageOpened() {
    // ❌ było: `The ${this.url} is opened`
    return 'The ' + this.url + 'is opened';
  }
}

// Export classes
module.exports = {
  Header,
  PageObject,
  ArticlePage,
};
