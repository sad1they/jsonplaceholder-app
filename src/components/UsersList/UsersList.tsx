import { useEffect } from "react";
import styles from "./UsersList.module.scss";
import { fetchUsers, removeUser } from "../../actions/usersAction";
import { useSelector, useDispatch } from "react-redux";

export default function UsersList() {
  const dispatch = useDispatch();
  let users = useSelector((state) => state.users.items);

  function handleRemove(id) {
    const newList = users.filter((user) => user.id !== id);

    dispatch(removeUser(newList));
  }

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return (
    <>
      <ul className={styles.list}>
        {users.map((user) => {
          return (
            <li key={user.id} className={styles.list__item}>
              <div className={styles.list__layout}>
                <div>Name: {user.name}</div>
                <div>Username: {user.username}</div>
                <div>Email: {user.email}</div>
              </div>
              <div className={styles.list__layout}>
                <button onClick={() => handleRemove(user.id)}>Remove</button>
              </div>
            </li>
          );
        })}
      </ul>
    </>
  );
}
