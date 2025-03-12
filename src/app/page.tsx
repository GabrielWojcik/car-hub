"use client";
import ImgBackground from "../app/assets/loginPage/login_background.svg";
import Input from "./components/Input";
import Button from "./components/Button";
import IconMail from "../app/assets/loginPage/icons/main-icon.svg";
import IconPass from "../app/assets/loginPage/icons/password-icon.svg";
import { z } from  "zod";
import { useForm } from "react-hook-form"
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation'
import useLocalStorage from "@/utils/hooks/useLocalStorage";

export default function Home() {
  const router = useRouter()
  const [, setUsernameStorage] = useLocalStorage<string>("username", "");

  const createUserFormSchema = z.object({
    username: z.string().min( 1, "E-mail é obrigatório."),
    password: z.string().min(1, 'Senha é obrigatória.'),
  })

  type CreateUserFormData = z.infer<typeof createUserFormSchema>;

  const { register, handleSubmit, formState: { errors } } = useForm<CreateUserFormData>({
    resolver: zodResolver(createUserFormSchema)
})

const onSubmit = (data: CreateUserFormData) => {
  setUsernameStorage(data.username);
  router.push('/home')

}
  return (
      <div className="flex justify-around items-center bg-[#172554] h-[100vh] bg-cover bg-center"
      style={{ backgroundImage: `url(${ImgBackground.src})`}}>      
      <div className="flex flex-col justify-around bg-white rounded-md p-4 h-[445px] w-[400]">
        <div className="flex justify-center">
            <p className="text-3xl text-[#00AAFF] font-bold">
              CAR GW
            </p>
        </div>
        <form 
        className="flex flex-col gap-4"
        onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col gap-4">
            <Input
              label="E-mail"
              placeholder="exemplo@exemplo.com"
              icon={IconMail}
              register={register("username")}
              hasError={!!errors.username}
            />
            <Input
              label="Senha"
              placeholder="*******"
              icon={IconPass}
              register={register("password")}
              hasError={!!errors.password}
              password={true}
            />
          </div>
          <Button 
            label="Entrar"
            borderRadius={8}
            backgroundColor="#00AAFF"
            type="submit"
          />
          <Button 
            label="Criar Conta"
            backgroundColor="#FF8000"
            borderRadius={8}
            onClick={() => router.push("/cadastro")}
          />
        </form>
      </div>
    </div>
    
  );
}
