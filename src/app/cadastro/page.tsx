"use client";
import Button from "../components/Button";
import Input from "../components/Input";
import ImgBackground from "../assets/loginPage/login_background.svg";
import { z } from  "zod";
import { useForm } from "react-hook-form"
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation'

export default function PageRegister() {
    const router = useRouter()

    const createUserFormSchema = z.object({
        username: z.string().min( 1, "Nome é obrigatório."),
        email: z.string().min(1, 'E-mail é obrigatório'),
        password: z.string().min(1, 'Senha é obrigatória.'),
        confirmPassword: z.string().min(1, 'Senha é obrigatória.'),
      })
    
      type CreateUserFormData = z.infer<typeof createUserFormSchema>;
    
      const { register, handleSubmit, formState: { errors } } = useForm<CreateUserFormData>({
        resolver: zodResolver(createUserFormSchema)
    })
    
    const onSubmit = (data: CreateUserFormData) => {
        console.log('data', data)
        router.push('/home')
    }

    return(
        <div className="flex justify-around items-center bg-[#172554] h-[100vh] bg-cover bg-center"
            style={{ backgroundImage: `url(${ImgBackground.src})`}}>      
            <div className="flex flex-col justify-around bg-white rounded-md p-4  w-[400]">
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
                        label="Nome Completo *"
                        placeholder="Jhon Doe"
                        register={register("username")}
                        hasError={!!errors.username}
                    />
                    <Input
                        label="E-mail *"
                        placeholder="exemplo@exemplo.com"
                        register={register("email")}
                        hasError={!!errors.email}
                    />
                    <Input
                        label="Senha *"
                        placeholder="*******"
                        register={register("password")}
                        hasError={!!errors.password}
                        password={true}
                    />
                    <Input
                        label="Confirmar Senha *"
                        placeholder="*******"
                        register={register("confirmPassword")}
                        hasError={!!errors.confirmPassword}
                        password={true}
                    />
                </div>
                <Button 
                    label="Continuar"
                    backgroundColor="#FF8000"
                    borderRadius={8}
                    type="submit"
                />
                </form>
            </div>
        </div>
    )
}