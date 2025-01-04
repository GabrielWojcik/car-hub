import Image from "next/image";
import ImgCar from "../app/assets/loginPage/vintage-car.svg";
import Input from "./components/Input";
import Button from "./components/Button";
import IconMail from "../app/assets/loginPage/icons/main-icon.svg";
import IconPass from "../app/assets/loginPage/icons/password-icon.svg";
import IconCar from "../app/assets/loginPage/icons/car-icon.svg";

export default function Home() {
  return (
    <div className="flex justify-around items-center  bg-[#172554] h-[100vh]">
      <div className="">
        <Image src={ImgCar} alt="" width={400} height={400} />
      </div>
      <div className="flex flex-col justify-around bg-white rounded-md p-4 h-[400px] w-[400]">
        <div className="flex justify-center">
            <p className="text-3xl text-[#172554] font-bold">
              Car Hub
            </p>
            <Image src={IconCar} alt=""  width={30} height={30}/>
        </div>
        <div className="flex flex-col gap-4">
          <Input
            label="E-mail"
            placeholder="exemplo@exemplo.com"
            icon={IconMail}
          />
          <Input
            label="Senha"
            placeholder="*******"
            icon={IconPass}
          />
        </div>

        <Button 
          label="Entrar"
          borderRadius={8}
          backgroundColor="#172554"
        />

        <Button 
          label="Criar Conta"
          backgroundColor="#6C63FF"
          borderRadius={8}
        />
      </div>
    </div>
    
  );
}
