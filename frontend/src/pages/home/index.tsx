import { useContext, useState } from "react";
import { SearchInput } from "../../components/inputSearch";
import { Modal } from "../../components/modal";
import { UserForm } from "../../components/userForm";
import { UserRow } from "../../components/userRow";
import styles from "./styles.module.css";
import { UserContext } from "../../contexts/UserContext";
import { LoadingSpinner } from "../../components/loadingSpinner";

export function Home() {
   const { users, loading } = useContext(UserContext);
   const [isModalOpen, setIsModalOpen] = useState(false);
   const [searchTerm, setSearchTerm] = useState("");

   const filteredUsers = users.filter(
      (user) =>
         user.fullName.toLowerCase().includes(searchTerm.toLowerCase()) ||
         user.email.toLowerCase().includes(searchTerm.toLowerCase())
   );

   return (
      <section className={styles.sectionContainer}>
         <div className={styles.divSearch}>
            <button
               onClick={() => setIsModalOpen(true)}
               className={styles.button}
            >
               Cadastrar Usuário
            </button>
            <SearchInput
               searchTerm={searchTerm}
               setSearchTerm={setSearchTerm}
            />
         </div>
         {loading ? (
            <div className={styles.sectionContainer}>
               <LoadingSpinner />
            </div>
         ) : (
            <>
               {users.length === 0 ? (
                  <h3>Ops, nenhum usuário encontrado...</h3>
               ) : (
                  <table className={styles.table}>
                     <thead>
                        <tr>
                           <th className={styles.th}>Nome Completo</th>
                           <th className={styles.th}>Email</th>
                           <th className={styles.th}>Criado em</th>
                           <th className={`${styles.th} ${styles.textCenter}`}>
                              Opções
                           </th>
                        </tr>
                     </thead>
                     <tbody>
                        {filteredUsers.map((user) => (
                           <UserRow
                              key={user.id}
                              id={user.id}
                              fullName={user.fullName}
                              email={user.email}
                              createdAt={user.createdAt}
                           />
                        ))}
                     </tbody>
                     <tfoot>
                        <tr className={styles.tableFooter}>
                           <td
                              className={styles.tableFooterCell}
                              colSpan={4}
                           ></td>
                        </tr>
                     </tfoot>
                  </table>
               )}
            </>
         )}

         <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
            <UserForm onCancel={() => setIsModalOpen(false)} />
         </Modal>
      </section>
   );
}
