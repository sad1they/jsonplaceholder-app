import styles from "./Filter.module.scss";
import { filterUsers } from "../../actions/filterAction";
import { useDispatch } from "react-redux";

export default function Filter() {
  const dispatch = useDispatch();

  const handleChange = (e) => {
    dispatch(filterUsers(e.target.value));
  };

  return (
    <input
      placeholder="Search user"
      className={styles.filter}
      onChange={(e) => handleChange(e)}
    />
  );
}
