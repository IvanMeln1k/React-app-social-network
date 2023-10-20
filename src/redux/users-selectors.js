import { createSelector } from "reselect";

const getUsers = (state) => state.usersPage.users;
const getTotalCount = (state) => state.usersPage.totalCount;
const getPage = (state) => state.usersPage.page;
const getCount = (state) => state.usersPage.count;
const getPagePage = (state) => state.usersPage.pagePage;
const getPageCount = (state) => state.usersPage.pageCount;
const getIsFetching = (state) => state.usersPage.isFetching;
const getInProcess = (state) => state.usersPage.inProcess;

export const getUsersSelector = createSelector(getUsers, (users) =>
  users.filter((u) => true)
);
export const getTotalCountSelector = createSelector(
  getTotalCount,
  (totalCount) => totalCount
);
export const getPageSelector = createSelector(getPage, (page) => page);
export const getCountSelector = createSelector(getCount, (count) => count);
export const getPagePageSelector = createSelector(
  getPagePage,
  (pagePage) => pagePage
);
export const getPageCountSelector = createSelector(
  getPageCount,
  (pageCount) => pageCount
);
export const getIsFetchingSelector = createSelector(
  getIsFetching,
  (isFetching) => isFetching
);
export const getInProcessSelector = createSelector(
  getInProcess,
  (inProcess) => inProcess
);
