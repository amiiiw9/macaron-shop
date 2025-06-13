import Image from "next/image";
import Link from "next/link";

import macaronsGrid from "@/app/assets/images/macaronsGrid.png";
import waferRolls from "@/app/assets/images/waferRolls.png";
import eclairs from "@/app/assets/images/eclairs.png";
import profiteroles from "@/app/assets/images/profiteroles.png";
import combo1 from "@/app/assets/images/combo1.png";
import combo2 from "@/app/assets/images/combo2.png";
import combo3 from "@/app/assets/images/combo3.png";
import combo4 from "@/app/assets/images/combo4.png";

export default function DessertCatalog() {
  return (
    <div className="max-w-screen-xl mx-auto px-4 py-8">
      <nav className="text-sm text-gray-500 mb-4 text-center">
        Главная &gt; <span className="text-blue-500">Каталог десертов</span>
      </nav>
      <h1 className="text-2xl font-bold mb-6 text-center">Каталог десертов</h1>

      <div className="bg-pink-200 rounded-xl p-6 mb-10 flex flex-col md:flex-row items-center justify-between gap-6 md:px-10">
        <Image
          src={macaronsGrid}
          alt="Пирожные макарон"
          width={500}
          className="rounded-lg"
        />
        <div className="flex-1 text-center md:text-left">
          <h2 className="text-xl font-bold mb-2">Пирожные макарон</h2>
          <p className="mb-4">
            Самые классные, самые лучшие, свежие, воздушные, хрустящие
            макарушки. Лучшее, что мы умеем делать.
          </p>
          <div className="flex justify-center md:justify-start gap-4">
            <Link href="/ready">
              <button className="border border-blue-400 px-4 py-2 rounded hover:bg-blue-300 hover:text-white transition">
                Готовые наборы
              </button>
            </Link>
            <Link href="/create">
              <button
                className="border border-blue-400 px-4 py-2 rounded hover:bg-blue-300
               hover:text-white transition"
              >
                Собрать свой набор
              </button>
            </Link>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
        <div className="bg-orange-300 rounded-xl p-4 text-center">
          <Image
            src={waferRolls}
            alt="Трубочки со сгущёнкой"
            className="mx-auto mb-2 rounded"
          />
          <p className="font-semibold">Трубочки со сгущёнкой</p>
        </div>
        <div className="bg-pink-300 rounded-xl p-4 text-center">
          <Image src={eclairs} alt="Эклеры" className="mx-auto mb-2 rounded" />
          <p className="font-semibold">Эклеры</p>
        </div>
        <div className="bg-orange-200 rounded-xl p-4 text-center">
          <Image
            src={profiteroles}
            alt="Профитроли"
            className="mx-auto mb-2 rounded"
          />
          <p className="font-semibold">Профитроли</p>
        </div>
      </div>

      <div className="text-center mb-4">
        <h2 className="text-xl font-bold mb-2">
          Хотите попробовать всё сразу?
        </h2>
        <p className="text-gray-600">Тогда взгляните на наши комбо-наборы</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          {
            img: combo1,
            title: "1 макарон и 1 эклер",
            promo: "промо-набор",
            price: "12 сомони",
            old: "21 сомони",
          },
          {
            img: combo2,
            title: "Всего понемногу",
            promo: "3 эклера, 4 трубочки, 6 макарун",
            price: "96 сомони",
          },
          {
            img: combo3,
            title: "Ещё побольше",
            promo: "3 эклера, 4 трубочки, 6 макарун",
            price: "497 сомони",
          },
          {
            img: combo4,
            title: "Ещё побольше",
            promo: "3 эклера, 4 трубочки, 6 макарун",
            price: "497 сомони",
          },
        ].map((item, idx) => (
          <div
            key={idx}
            className="border-gray-50 shadow-md rounded-xl p-4 text-center transform transition-transform duration-200 hover:scale-105"
          >
            <Image
              src={item.img}
              alt={item.title}
              className="mx-auto mb-2 rounded"
            />
            <p>{item.title}</p>
            {item.old && (
              <p className="text-sm text-gray-400 line-through">{item.old}</p>
            )}
            <p className="text-sm text-gray-600">{item.promo}</p>
            <p className="text-pink-600 font-bold">{item.price}</p>
            <button className="mt-2 bg-pink-200 text-black px-4 py-1 rounded">
              В корзину
            </button>
          </div>
        ))}
      </div>
      <div className="text-center mt-6">
        <Link href="/ready">
          <button className="border border-gray-50 shadow-md px-6 py-2 rounded hover:bg-blue-300 hover:text-white transition">
            Все готовые наборы
          </button>
        </Link>
      </div>
    </div>
  );
}
