import Image from "next/image";
import sale1 from "@/app/assets/images/sale1.png";
import sale2 from "@/app/assets/images/sale2.png";
import sale3 from "@/app/assets/images/sale3.png";
import sale4 from "@/app/assets/images/sale4.png";

export default function Sales() {
  return (
    <div className="container  mx-auto flex flex-col items-center justify-center gap-6 py-6 ">
      <div className="font-sans font-bold text-3xl">Акции</div>
      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4  ">
        <Image
          className="mr-10 shadow-md"
          src={sale1}
          alt="sale1"
          width={270}
          height={380}
        ></Image>

        <Image
          className="mr-10 shadow-md rounded-2xl"
          src={sale2}
          alt="sale2"
          width={270}
          height={380}
        ></Image>

        <Image
          className="mr-10 shadow-md rounded-2xl"
          src={sale3}
          alt="sale3"
          width={270}
          height={380}
        ></Image>

        <Image
          className="mr-10 shadow-md rounded-2xl"
          src={sale4}
          alt="sale4"
          width={270}
          height={380}
        ></Image>
      </div>
    </div>
  );
}
