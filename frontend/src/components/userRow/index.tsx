import { useState } from "react";
import { BiSolidEdit } from "react-icons/bi";
import { FaTrashAlt } from "react-icons/fa";
import styles from "./styles.module.css";
import api from "../../services/api/api";
import { useNavigate } from "react-router-dom";
import { formatDate } from "../../utils/dateUtils";
import { UserFormEdit } from "../userFormEdit";
import { Modal } from "../modal";
import { toast } from "react-toastify";

interface ProductRowProps {
   id: number;
   fullName: string;
   email: string;
   createdAt: string;
}

export function UserRow({ id, fullName, email, createdAt }: ProductRowProps) {
   const navigate = useNavigate();
   const [isModalOpen, setIsModalOpen] = useState(false);

   async function handleDeleteProduct(id: number) {
      try {
         await api.delete(`/users/${id}`);
         toast.success("Usuário deletado com sucesso!", { autoClose: 1500 });
         setTimeout(() => {
            navigate(0);
         }, 1500);
      } catch (error) {
         console.error(error);
         toast.error("Erro ao deletar o Usuário!", { autoClose: 1500 });
      }
   }

   const formattedDate = formatDate(createdAt);

   return (
      <>
         <tr className={styles.tableRow}>
            <td className={`${styles.tableCell} ${styles.nameCell}`}>
               {fullName}
            </td>
            <td className={`${styles.tableCell} ${styles.descriptionCell}`}>
               {email}
            </td>
            <td className={`${styles.tableCell} ${styles.createdCell}`}>
               {formattedDate}
            </td>
            <td className={styles.actionButtons}>
               <button
                  className={`${styles.actionButton} ${styles.blue}`}
                  onClick={() => setIsModalOpen(true)}
               >
                  <BiSolidEdit size={18} color="#ffffff" />
               </button>
               <button
                  onClick={() => handleDeleteProduct(id)}
                  className={`${styles.actionButton} ${styles.red}`}
               >
                  <FaTrashAlt size={18} color="#ffffff" />
               </button>
            </td>
         </tr>
         <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
            <UserFormEdit
               onCancel={() => setIsModalOpen(false)}
               userId={id}
               initialData={{ fullName, email }}
            />
         </Modal>
      </>
   );
}
