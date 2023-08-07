import styles from "./App.module.scss";
import UsersList from "../UsersList/UsersList";
import Filter from "../Filter/Filter";

export default function App() {
  return (
    <div className="App">
      <h1 className={styles.main__title}>Users List</h1>
      <Filter />
      <UsersList />
    </div>
  );
}
