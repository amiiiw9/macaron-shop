import Image from "next/image";
import news1 from "@/app/assets/images/news1.png";
import news2 from "@/app/assets/images/news2.png";
import news3 from "@/app/assets/images/news3.png";

export default function News() {
  return (
    <div className="container  mx-auto flex flex-col items-center justify-center gap-6 py-6  ">
      <div className="font-sans font-bold text-3xl">Новости</div>
      <div className=" grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 ">
        <Image
          className="mr-10 shadow-md"
          src={news1}
          alt="news1"
          width={370}
          height={420}
        ></Image>

        <Image
          className="mr-10 shadow-md"
          src={news2}
          alt="news2"
          width={370}
          height={420}
        ></Image>

        <Image
          className="mr-10 shadow-md"
          src={news3}
          alt="news3"
          width={370}
          height={420}
        ></Image>
      </div>
      <button className="border  border-black-100 text-sm font-semibold px-5 py-2 rounded hover:bg-blue-100">
        Все Новости
      </button>
    </div>
  );
}
