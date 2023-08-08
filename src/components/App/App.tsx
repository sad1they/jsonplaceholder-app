import styles from "./App.module.scss";
import UsersList from "../UsersList/UsersList";
import Filter from "../Filter/Filter";
import ResetButton from "../ResetButton/ResetButton";

export default function App() {
  return (
    <div className="App">
      <h1 className={styles.main__title}>Users List</h1>
      <Filter />
      <ResetButton />
      <UsersList />
    </div>
  );
}
