import MainImg from "../../../../public/banners/main-img.svg";
import Image from "next/image";

export default function Banner() {
  return (
    <div className="bg-[#222222] relative w-full h-[600px] flex items-center justify-center">
      <div className="text-center md:text-left max-w-[80%] z-10">
        <p className="text-[100px] md:text-[168px] text-white leading-none">
          MUSTANG <br />
          2017 <span className="text-[#00AAFF]">.</span>
        </p>
      </div>

      <div className="absolute bottom-10 right-0 max-w-[80%] md:max-w-[50%]">
        <Image
          src={MainImg}
          alt="Mustang 2017"
          //   width={1018}
          //   height={600}
          className="w-full h-auto object-contain"
        />
      </div>
    </div>
  );
}
