import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { InputField } from "../inputField";
import { SubmitButton } from "../submitButton";
import styles from "./styles.module.css";
import api from "../../services/api/api";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const userSchema = z.object({
   fullName: z.string().min(1, "Nome completo é obrigatório."),
   email: z.string().email("Email inválido.").min(1, "Email é obrigatório."),
});
type UserFormInputs = z.infer<typeof userSchema>;

interface UserFormProps {
   onCancel: () => void;
}

export function UserForm({ onCancel }: UserFormProps) {
   const navigate = useNavigate();
   const {
      register,
      handleSubmit,
      formState: { errors, isSubmitting },
   } = useForm<UserFormInputs>({
      resolver: zodResolver(userSchema),
   });

   const onSubmit: SubmitHandler<UserFormInputs> = async (data) => {
      try {
         await api.post("/users", {
            fullName: data.fullName,
            email: data.email,
         });
         toast.success("Usuário cadastrado com sucesso!", { autoClose: 1500 });
         onCancel();

         setTimeout(() => {
            navigate(0);
         }, 1500);
      } catch (error) {
         console.error("Erro ao cadastrar usuário:", error);
         toast.error("Erro ao cadastrar usuário!", { autoClose: 1500 });
      }
   };

   return (
      <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
         <h1>Cadastrar novo usuário</h1>

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
            <SubmitButton isLoading={isSubmitting}>Cadastrar</SubmitButton>
         </div>
      </form>
   );
}
