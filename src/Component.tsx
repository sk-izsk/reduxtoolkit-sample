import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { User } from "./api";
import { Actions, RootState } from "./redux";

interface Props {}

export const Component: React.FC<Props> = () => {
  const dispatch = useDispatch();
  const users: User[] = useSelector<RootState, User[]>(
    (state: RootState) => state.users
  );
  useEffect(() => {
    dispatch(Actions.getUsers());
  }, []);

  return (
    <div>
      <ul>
        {users.map((user: User) => (
          <li style={{ padding: 25 }} key={user.id}>
            <div>name : {user.name}</div>
            <div>username : {user.username}</div>
            <div>email : {user.email}</div>
            <div>contact no: {user.phone}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};
