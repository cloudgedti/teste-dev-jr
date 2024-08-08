import React from 'react';
import UserEdit from '../../components/UserEdit';

const EditUserPage: React.FC = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Editar Usuário</h1>
      <UserEdit />
    </div>
  );
};

export default EditUserPage;
