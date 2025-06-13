import Image from "next/image";
import macaronbox from "@/app/assets/images/macaronbox.png";
import logotext from "@/app/assets/icons/logotext.svg";

export default function HeroSection() {
  return (
    <section className="relative bg-blue-50 py-16 flex justify-center items-center overflow-hidden">
      <div className="container mx-auto flex flex-col md:flex-row items-center px-4 md:px-12 relative">
        {/* Левая колонка — изображение */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-start mb-10 md:mb-0 relative z-10">
          <Image
            src={macaronbox}
            alt="macaronbox"
            width={700}
            height={700}
            className="w-full max-w-[400px] md:max-w-[700px] h-auto"
          />
        </div>

        {/* Правая колонка — текст */}
        <div className="w-full md:w-1/2 text-center md:text-left relative z-20">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-800">
            Настоящая любовь
          </h2>
          <p className="text-gray-600 mt-4 text-lg">
            Пирожные макарон и другие десерты <br /> из натуральных
            ингредиентов, приготовленные с любовью.
          </p>
        </div>

        {/* Логотип логотекст — поверх, но адаптивно позиционируется */}
        <div className="absolute top-4 right-4 md:top-8 md:right-16 z-30 w-[120px] md:w-[250px]">
          <Image
            src={logotext}
            alt="logotext"
            width={250}
            height={250}
            className="w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
}
