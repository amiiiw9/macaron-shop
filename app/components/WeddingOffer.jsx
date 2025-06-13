import Image from "next/image";

import set9 from "@/app/assets/images/set9.png";
import forGuests from "@/app/assets/images/forGuests.png";
import miniPyramid from "@/app/assets/images/miniPyramid.png";
import bigPyramid from "@/app/assets/images/bigPyramid.png";
import named from "@/app/assets/images/named.png";
import girlsParty from "@/app/assets/images/girlsParty.png";

const weddingSets = [
  {
    title: "Набор из 9 макарон",
    description: "С праздничной печатью и пожеланиями для молодоженов",
    price: "78 сомони",
    image: set9,
  },
  {
    title: "Для гостей",
    description:
      "Подарочный набор из 2 макарон с печатью жениха и невесты в прозрачной упаковке",
    price: "26 сомони",
    image: forGuests,
  },
  {
    title: "Пирамидка из макарон",
    description: "Прекрасное дополнение праздничного стола",
    price: "853 сомони",
    image: miniPyramid,
  },
  {
    title: "Большая пирамида (10 этажей)",
    description: "Для свадьбы или банкета, 240 макарон по вашему выбору",
    price: "1860 сомони",
    image: bigPyramid,
  },
  {
    title: "Макарон с именами гостей",
    description: "Отличное предложение на пару строк или более",
    price: "11 сомони",
    image: named,
  },
  {
    title: "Набор для девичника",
    description:
      "Дерзкий набор для девичника. 30 макаронс с разными вкусами и забавными надписями",
    price: "504 сомони",
    image: girlsParty,
  },
];

export default function WeddingOffer() {
  return (
    <div className="w-full bg-gradient-to-b from-[#fef7f2] to-white pb-20 text-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <nav className="text-sm text-gray-400 pt-6 mb-4">
          Главная \{" "}
          <span className="text-blue-500"> Предложение для свадьбы</span>
        </nav>

        <div className="text-center">
          <h1 className="text-3xl md:text-4xl font-semibold text-gray-800 mb-6">
            Свадебное предложение
          </h1>
          <p className="text-gray-600 mb-8 text-base md:text-lg max-w-xl mx-auto">
            Нежные пирожные макаронс с разными вкусами для украшения вашего
            свадебного торжества
          </p>

          <p className="text-xs text-gray-400 max-w-2xl mx-auto mb-8">
            Рыба-текст предложения. Приятно, граждане, наблюдать, как действия
            представителей оппозиции, превозмогая сложившуюся непростую
            экономическую ситуацию, смешаны с уникальными данными до степени
            совершенной неузнаваемости...
          </p>
        </div>

        <h2 className="text-2xl font-semibold mt-16 mb-6 text-gray-800">
          Наборы для свадьбы
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {weddingSets.map((set, index) => (
            <div
              key={index}
              className="bg-white border border-gray-100 rounded-xl shadow-md hover:shadow-lg transform hover:scale-105 transition duration-300 ease-in-out overflow-hidden"
            >
              <Image
                src={set.image}
                alt={set.title}
                width={400}
                height={300}
                className="w-full h-60 object-cover"
              />
              <div className="p-4">
                <h3 className="font-semibold text-base text-gray-800 mb-1">
                  {set.title}
                </h3>
                <p className="text-gray-600 text-sm mb-3 min-h-[48px]">
                  {set.description}
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-pink-600 font-semibold text-sm">
                    {set.price}
                  </span>
                  <button className="text-sm border border-gray-300 px-3 py-1 rounded hover:bg-gray-100">
                    в корзину
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
