import React, { useState } from 'react';
import UserForm from '../components/UserForm';
import UserList from '../components/UserList';

const UsersPage: React.FC = () => {
  const [users, setUsers] = useState<{ nomeCompleto: string; email: string }[]>(
    [],
  );

  const handleUserAdded = (newUser: {
    nomeCompleto: string;
    email: string;
  }) => {
    setUsers((prevUsers) => [...prevUsers, newUser]);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Usuários</h1>
      <UserForm onUserAdded={handleUserAdded} />
      <UserList />
    </div>
  );
};

export default UsersPage;
