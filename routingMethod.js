let routingMethod = {
  setPage(currentPage) {
    const searchParams = new URLSearchParams(window.location.search);
    searchParams.set("page", currentPage);
    const newRelativePathQuery =
      window.location.pathname + "?" + searchParams.toString();
    window.location = newRelativePathQuery;
  },
};

export default routingMethod;
