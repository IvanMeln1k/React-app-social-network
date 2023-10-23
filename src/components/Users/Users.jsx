import React from "react";
import User from "./User/User";
import s from "./Users.module.scss";
import preloader from "../../assets/gifs/preloader.gif";

const Users = ({
  onChagePage,
  setPagePage,
  totalCount,
  count,
  pageCount,
  pagePage,
  users,
  page,
  isFetching,
  inProcess,
  follow,
  unfollow,
}) => {
  const totalPageCount = Math.ceil(totalCount / count);
  const totalPagePageCount = Math.ceil(totalPageCount / pageCount);
  return (
    <div className={s.wrapper}>
      <h2 className={s.title}>Users</h2>
      <div className={s.pagination}>
        <button
          className={s.pagination__button}
          onClick={() => setPagePage(pagePage - 1)}
          disabled={pagePage == 1}
        >
          Previous
        </button>
        <div className={s.pagination__pages}>
          {Array.from({ length: 5 }, (_, index) => index + 1).map(
            (item, index, array) => {
              const i_page = item + (pagePage - 1) * pageCount;
              if (i_page > totalPageCount) {
                return;
              }
              return (
                <button
                  className={
                    i_page == page
                      ? s.pagination__page + " " + s.pagination__page_active
                      : s.pagination__page
                  }
                  onClick={() => onChagePage(i_page)}
                >
                  {i_page}
                </button>
              );
            }
          )}
        </div>
        <button
          className={s.pagination__button}
          onClick={() => setPagePage(pagePage + 1)}
          disabled={totalPagePageCount <= pagePage}
        >
          Next
        </button>
      </div>
      {isFetching ? (
        <img src={preloader} />
      ) : (
        <div className={s.users}>
          {users.map((user) => (
            <User
              inProcess={inProcess}
              user={user}
              follow={follow}
              unfollow={unfollow}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Users;
