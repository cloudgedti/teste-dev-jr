import React from 'react';
import UserForm from '../../components/UserForm';
import { useRouter } from 'next/router';

const NewUserPage: React.FC = () => {
  const router = useRouter();

  const handleUserAdded = () => {
    router.push('/users');
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Novo Usuário</h1>
      <UserForm onUserAdded={handleUserAdded} />
    </div>
  );
};

export default NewUserPage;
