import React from "react";
import User from "./User/User";
import s from "./Users.module.scss";
import preloader from "../../assets/gifs/preloader.gif";

const Users = (props) => {
  const totalPageCount = Math.ceil(props.totalCount / props.count);
  const totalPagePageCount = Math.ceil(totalPageCount / props.pageCount);
  return (
    <div className={s.wrapper}>
      <h2 className={s.title}>Users</h2>
      <div className={s.pagination}>
        <button
          className={s.pagination__button}
          onClick={() => props.setPagePage(props.pagePage - 1)}
          disabled={props.pagePage == 1}
        >
          Previous
        </button>
        <div className={s.pagination__pages}>
          {Array.from({ length: 5 }, (_, index) => index + 1).map(
            (item, index, array) => {
              const page = item + (props.pagePage - 1) * props.pageCount;
              if (page > totalPageCount) {
                return;
              }
              return (
                <button
                  className={
                    page == props.page
                      ? s.pagination__page + " " + s.pagination__page_active
                      : s.pagination__page
                  }
                  onClick={() => props.onChagePage(page)}
                >
                  {page}
                </button>
              );
            }
          )}
        </div>
        <button
          className={s.pagination__button}
          onClick={() => props.setPagePage(props.pagePage + 1)}
          disabled={totalPagePageCount <= props.pagePage}
        >
          Next
        </button>
      </div>
      {props.isFetching ? (
        <img src={preloader} />
      ) : (
        <div className={s.users}>
          {props.users.map((user) => (
            <User follow={props.follow} unfollow={props.unfollow} user={user} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Users;
