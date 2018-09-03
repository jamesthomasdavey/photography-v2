export default class Blog {
  constructor(pages) {
    this.pages = pages; // array
    this.currentPageIndex = 0;
  }
  advancePageIndex() {
    this.currentPageIndex++;
  }
  decreasePageIndex() {
    this.currentPageIndex--;
  }
  isOnFirstPage() {
    return this.currentPageIndex === 0;
  }

  isOnLastPage() {
    return this.currentPageIndex + 1 === this.pages.length;
  }
}
