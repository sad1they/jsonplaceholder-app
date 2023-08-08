import { Dispatch } from "react";
import { filterUsers } from "../../actions/filterAction";
import { fetchUsers } from "../../actions/usersAction";
import { useDispatch } from "react-redux";

export default function ResetButton() {
  const dispatch: Dispatch<any> = useDispatch();

  const handleClick = () => {
    dispatch(filterUsers(''));
    dispatch(fetchUsers());
  };

  return (
    <button
      onClick={handleClick}
    >Reset</button>
  );
}