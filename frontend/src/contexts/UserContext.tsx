import { createContext, useState, useEffect, ReactNode } from "react";
import api from "../services/api/api";

interface User {
   id: number;
   fullName: string;
   email: string;
   createdAt: string;
   updatedAt: string;
}

interface UserContextProps {
   users: User[];
   loading: boolean;
}

export const UserContext = createContext({} as UserContextProps);

interface UserProviderProps {
   children: ReactNode;
}

function UserProvider({ children }: UserProviderProps) {
   const [users, setUsers] = useState<User[]>([]);
   const [loading, setLoading] = useState<boolean>(true);

   useEffect(() => {
      async function fetchProducts() {
         setLoading(true);
         try {
            const response = await api.get<User[]>("/users");
            const sortedUsers = response.data.sort(
               (a, b) =>
                  new Date(b.createdAt).getTime() -
                  new Date(a.createdAt).getTime()
            );
            setUsers(sortedUsers);
         } catch (error) {
            console.error("Erro ao buscar Usuários:", error);
            setLoading(false);
         } finally {
            setLoading(false);
         }
      }

      fetchProducts();
   }, []);

   return (
      <UserContext.Provider value={{ users, loading }}>
         {children}
      </UserContext.Provider>
   );
}

export default UserProvider;
