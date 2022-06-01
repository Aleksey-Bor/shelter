let routingData = {
  subscribe(observer) {
    this._callSubscriber = observer;
  },

  setPage(currentPage) {
    window.location.pathname = currentPage;
    this._callSubscriber(window.location.pathname);
  },
};

export default routingData;
