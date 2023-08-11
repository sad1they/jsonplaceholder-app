import { Dispatch, MouseEvent, useEffect, useState } from "react";
import styles from "./UsersList.module.scss";
import { fetchUsers, removeUser } from "../../actions/usersAction";
import { useSelector, useDispatch } from "react-redux";
import Highlight from "react-highlight-words";
import ReactModal from 'react-modal';
import { IStore, IUser, IUserModal } from "../../type";

ReactModal.setAppElement('#modal');

export default function UsersList() {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [modalData, setModalData] = useState<IUserModal | null>(null);
  const dispatch: Dispatch<any> = useDispatch();
  const users: IUser[] = useSelector((state: IStore) => state.users.items);
  const query: string = useSelector((state: IStore) => state.query.query);

  function handleRemove(e: MouseEvent<HTMLButtonElement>, id: number) {
    const newList: IUser[] = users.filter((user: IUser) => user.id !== id);

    dispatch(removeUser(newList));

    e.stopPropagation();
  }

  function handleModal(user: IUser | null = null) {
    setIsOpen(prev => !prev);
    if (user) {
      setModalData({
        address: {
          street: user.address.street,
          suite: user.address.suite,
          city: user.address.city,
          zipcode: user.address.zipcode
        },
        company: {
          name: user.company.name
        }
      })
    }
  }

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return (
    <>
      <ul className={styles.list}>
        {users
          .filter((user: IUser) => {
            if (query) {
              const common: string = user.name + ' ' + user.username + ' ' + user.email;
              return common.toLowerCase().includes(query.toLowerCase())
            } else {
              return user
            }           
          })
          .map((user: IUser) => {
            return (
              <li key={user.id} className={styles.list__item} onClick={() => handleModal(user)}>
                <div className={styles.list__layout}>
                  <div>Name: 
                    <Highlight
                      searchWords={[query]}
                      autoEscape={true}
                      textToHighlight={user.name}
                    />
                  </div>
                  <div>Username: 
                    <Highlight
                      searchWords={[query]}
                      autoEscape={true}
                      textToHighlight={user.username}
                    />
                  </div>
                  <div>Email: 
                    <Highlight
                      searchWords={[query]}
                      autoEscape={true}
                      textToHighlight={user.email}
                    />
                  </div>
                </div>
                <div className={styles.list__layout}>
                  <button onClick={(e) => handleRemove(e, user.id)}>Remove</button>
                </div>
              </li>
            );
          })
        }
      </ul>
      <ReactModal isOpen={modalIsOpen} >
        {
          modalData?.address 
        ? 
          <p>
            Address: {modalData?.address?.street} {modalData?.address?.suite}, {modalData?.address?.city} {modalData?.address?.zipcode}
          </p> 
        :
          <p>Address not found</p>
        }
        {
          modalData?.company 
        ? 
          <p>Company: {modalData?.company?.name}</p>
        :
        <p>Company not found</p>
        }
        <button onClick={() => handleModal()}>Close</button>
      </ReactModal>
    </>
  );
}
