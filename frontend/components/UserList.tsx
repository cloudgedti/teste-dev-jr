import React, { useEffect, useState } from 'react';
import api from '../utils/api';

interface User {
  id: string;
  nomeCompleto: string;
  email: string;
}

const UserList: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await api.get('/users');
        setUsers(response.data);
      } catch (error) {
        console.error('Erro ao buscar usuários', error);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Lista de Usuários</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id} className="border p-2 mb-2">
            <p>{user.nomeCompleto}</p>
            <p>{user.email}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
