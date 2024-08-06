import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { InputField } from "../inputField";
import { SubmitButton } from "../submitButton";
import styles from "../userForm/styles.module.css";
import api from "../../services/api/api";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { toast } from "react-toastify";

const userSchema = z.object({
   fullName: z.string().min(1, "Nome completo é obrigatório."),
   email: z.string().email("Email inválido.").min(1, "Email é obrigatório."),
});

type UserFormInputs = z.infer<typeof userSchema>;

interface UserFormProps {
   onCancel: () => void;
   userId: number;
   initialData: { fullName: string; email: string };
}

export function UserFormEdit({ onCancel, userId, initialData }: UserFormProps) {
   const navigate = useNavigate();
   const {
      register,
      handleSubmit,
      setValue,
      formState: { errors, isSubmitting },
   } = useForm<UserFormInputs>({
      resolver: zodResolver(userSchema),
   });

   useEffect(() => {
      setValue("fullName", initialData.fullName);
      setValue("email", initialData.email);
   }, [initialData, setValue]);

   async function onSubmit(data: UserFormInputs) {
      try {
         await api.put(`/users/${userId}`, {
            fullName: data.fullName,
            email: data.email,
         });
         toast.success("Usuário editado com sucesso!", { autoClose: 1500 });
         onCancel();

         setTimeout(() => {
            navigate(0);
         }, 1500);
      } catch (error) {
         toast.error("Erro ao atualizar usuário!", { autoClose: 1500 });
         console.error("Erro ao atualizar usuário:", error);
      }
   }

   return (
      <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
         <h1>
            Editar usuário: <strong>{initialData.fullName}</strong>
         </h1>

         <InputField
            placeholder="Digite o nome completo do usuário"
            label="Nome Completo*"
            {...register("fullName")}
            error={errors.fullName?.message}
         />
         <InputField
            placeholder="Digite o email do usuário"
            label="Email*"
            type="email"
            {...register("email")}
            error={errors.email?.message}
         />
         <div className={styles.buttons}>
            <button
               type="button"
               onClick={onCancel}
               className={styles.cancelButton}
            >
               Cancelar
            </button>
            <SubmitButton isLoading={isSubmitting}>Salvar</SubmitButton>
         </div>
      </form>
   );
}
