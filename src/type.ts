interface IUser {
    id: number,
    name: string,
    username: string,
    email: string,
    address: {
        street: string,
        suite: string,
        city: string,
        zipcode: string,
        geo: {
        lat: string,
        lng: string
        }
    },
    phone: string,
    website: string,
    company: {
        name: string,
        catchPhrase: string,
        bs: string
    }
};

interface IUserModal {
    address: {
        street: string,
        suite: string,
        city: string,
        zipcode: string,
        geo?: {
        lat?: string,
        lng?: string
        }
    },
    company: {
        name: string,
        catchPhrase?: string,
        bs?: string
    }
}
  
type UserState = {
    items: IUser[]
};

type QueryState = {
    query: string
};
  
type UsersAction = {
    type: string
    payload: UserState | IUser[]
};

type QueryAction = {
    type: string
    payload: string
};
  
type DispatchType = (args: UsersAction | QueryAction) => UsersAction | QueryAction;

interface IStore {
    query: QueryState,
    users: UserState
}

export {
    DispatchType, UsersAction, UserState, IUser, QueryState, QueryAction, IStore, IUserModal
}