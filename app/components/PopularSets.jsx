import Image from "next/image";
import set1 from "@/app/assets/images/set1.png";
import set2 from "@/app/assets/images/set2.png";
import set3 from "@/app/assets/images/set3.png";
import set4 from "@/app/assets/images/set4.png";
import set5 from "@/app/assets/images/set5.png";
import set6 from "@/app/assets/images/set6.png";

const sets = [
  {
    title: "Сердце",
    description:
      "24 штуки в коробке в виде сердца. Ассорти из 6 разных вкусов на ваш выбор",
    price: "360 сомони",
    image: set1,
  },
  {
    title: "Красота спасёт мир",
    description:
      "Набор 16 шт. Вкусы: клубника-базилик, кокос, голубой сыр, пармезан",
    price: "97 сомони",
    image: set2,
  },
  {
    title: "Круглый набор",
    description: "40 макаронс в круглой коробке с персональной надписью",
    price: "500 сомони",
    image: set3,
  },
  {
    title: "Набор на 9",
    description:
      "Набор из 9 штук в квадратной коробке. Вкусы: шоколад, фисташка, вишня",
    price: "122 сомони",
    image: set4,
  },
  {
    title: "Набор на 16",
    description: "Вкусы: соленая карамель, голубой сыр, пармезан, шоколад",
    price: "193 сомони",
    image: set5,
  },
  {
    title: "Сердце",
    description:
      "24 штуки в коробке в виде сердца. Ассорти из 6 разных вкусов на ваш выбор",
    price: "321 сомони",
    image: set6,
  },
];

export default function PopularSets() {
  return (
    <section className="py-12 px-4 max-w-7xl mx-auto">
      <h2 className="text-3xl py-6 font-sans font-bold text-center ">
        Популярные наборы
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {sets.map((set, index) => (
          <div
            key={index}
            className="bg-white border-white rounded-xl shadow-sm hover:shadow-md transition"
          >
            <div className="relative w-full h-60">
              <Image
                src={set.image}
                alt={set.title}
                layout="fill"
                objectFit="cover"
                className="rounded-t-xl"
              />
            </div>
            <div className="p-4">
              <h3 className="text-md font-semibold text-gray-900 mb-1">
                {set.title}
              </h3>
              <p className="text-sm text-gray-600 mb-3">{set.description}</p>
              <div className="flex items-center justify-between">
                <span className="text-pink-600 font-semibold">{set.price}</span>
                <button className="text-sm font-semibold  border-gray-300 px-3 py-1 rounded hover:bg-gray-100">
                  В корзину
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-8">
        <button className="border  border-black-100 text-sm font-semibold px-5 py-2 rounded hover:bg-blue-100">
          Все праздничные наборы
        </button>
      </div>
    </section>
  );
}
