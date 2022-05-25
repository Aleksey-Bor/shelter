let data = {
  pageNumber: 1,

  subscribe(observer) {
    this._callSubscriber = observer;
  },

  setPageNumber(pageNumber) {
    this.pageNumber = pageNumber;
    this._callSubscriber(this.pageNumber);
  },

  getPageNumber() {
    return this.pageNumber;
  },
};

export default data;
