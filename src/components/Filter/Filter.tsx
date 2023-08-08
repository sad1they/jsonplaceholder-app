import styles from "./Filter.module.scss";
import { filterUsers } from "../../actions/filterAction";
import { useDispatch, useSelector } from "react-redux";
import { Dispatch } from "redux";
import { IStore } from "../../type";
import { ChangeEvent } from "react";

export default function Filter() {
  const dispatch: Dispatch<any> = useDispatch();
  const query: string = useSelector((state: IStore) => state.query.query);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(filterUsers(e.target.value));
  };

  return (
    <input
      placeholder="Search user"
      value={query}
      className={styles.filter}
      onChange={(e) => handleChange(e)}
    />
  );
}
