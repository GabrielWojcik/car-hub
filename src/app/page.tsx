"use client";
import Image from "next/image";
import ImgCar from "../app/assets/loginPage/vintage-car.svg";
import Input from "./components/Input";
import Button from "./components/Button";
import IconMail from "../app/assets/loginPage/icons/main-icon.svg";
import IconPass from "../app/assets/loginPage/icons/password-icon.svg";
import IconCar from "../app/assets/loginPage/icons/car-icon.svg";
import { z } from  "zod";
import { useForm } from "react-hook-form"
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation'
import useLocalStorage from "@/utils/hooks/useLocalStorage";

export default function Home() {
  const router = useRouter()
  const [usernameStorage, setUsernameStorage] = useLocalStorage<string>("username", "");

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
    <div className="flex justify-around items-center  bg-[#172554] h-[100vh]">
      <div className="">
        <Image src={ImgCar} alt="" width={400} height={400} />
      </div>
      <div className="flex flex-col justify-around bg-white rounded-md p-4 h-[445px] w-[400]">
        <div className="flex justify-center">
            <p className="text-3xl text-[#172554] font-bold">
              Car Hub
            </p>
            <Image src={IconCar} alt=""  width={30} height={30}/>
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
            />
          </div>
        <Button 
          label="Entrar"
          borderRadius={8}
          backgroundColor="#172554"
          type="submit"
        />

        <Button 
          label="Criar Conta"
          backgroundColor="#6C63FF"
          borderRadius={8}
        />
        </form>

      </div>
    </div>
    
  );
}
