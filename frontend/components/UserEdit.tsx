import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import api from '../utils/api';

const UserEdit: React.FC = () => {
  const router = useRouter();
  const { id } = router.query;
  const [nomeCompleto, setNomeCompleto] = useState('');
  const [email, setEmail] = useState('');

  useEffect(() => {
    if (id) {
      api.get(`/users/${id}`).then((response) => {
        setNomeCompleto(response.data.nomeCompleto);
        setEmail(response.data.email);
      });
    }
  }, [id]);

  const handleUpdate = async () => {
    try {
      await api.put(`/users/${id}`, { nomeCompleto, email });
      router.push('/users');
    } catch (error) {
      console.error('Erro ao atualizar usuário', error);
    }
  };

  const handleDelete = async () => {
    try {
      await api.delete(`/users/${id}`);
      router.push('/users');
    } catch (error) {
      console.error('Erro ao remover usuário', error);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Editar Usuário</h1>
      <div>
        <label className="block text-sm font-medium text-gray-700">
          Nome Completo
        </label>
        <input
          type="text"
          value={nomeCompleto}
          onChange={(e) => setNomeCompleto(e.target.value)}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        />
      </div>
      <button
        onClick={handleUpdate}
        className="self-start px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 mt-4"
      >
        Atualizar Usuário
      </button>
      <button
        onClick={handleDelete}
        className="self-start px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 mt-4 ml-4"
      >
        Remover Usuário
      </button>
    </div>
  );
};

export default UserEdit;
