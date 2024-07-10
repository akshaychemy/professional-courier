import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUsers } from '../store/reducers/userReducer';
import UserForm from '../components/UserForm';

const Users = () => {
  const dispatch = useDispatch();
  const { users } = useSelector((state) => state.users);

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  return (
    <div>
      <h1>Users</h1>
      <UserForm />
      <ul>
        {users.map((user) => (
          <li key={user._id}>{user.name} - {user.email}</li>
        ))}
      </ul>
    </div>
  );
};

export default Users;
