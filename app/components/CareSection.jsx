import Image from "next/image";
import pear from "@/app/assets/images/pear.png";
import box from "@/app/assets/images/box.png";
import delivery from "@/app/assets/images/delivery.png";
import gift from "@/app/assets/images/gift.png";

export default function CareSection() {
  return (
    <section className=" py-16">
      <h2 className="text-2xl font-semibold text-center mb-10">
        Мы обо всём позаботились
      </h2>
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4">
        <div>
          <Image src={pear} alt="Ингредиенты" className="rounded-md" />
          <h3 className="mt-4 font-semibold">Лучшие ингредиенты</h3>
          <p className="text-sm text-gray-600">
            Что-то про суперкачество, лучших поваров, свежесть и т.д.
          </p>
        </div>
        <div>
          <Image src={box} alt="Упаковка" className="rounded-md" />
          <h3 className="mt-4 font-semibold">Упаковка</h3>
          <p className="text-sm text-gray-600">
            Что-то про суперкоробочки и бантики и бла бла бла
          </p>
        </div>
        <div>
          <Image src={delivery} alt="Доставка" className="rounded-md" />
          <h3 className="mt-4 font-semibold">Получение в день заказа</h3>
          <p className="text-sm text-gray-600">
            В день заказа доставка курьером или самовывоз
          </p>
        </div>
        <div>
          <Image src={gift} alt="Анонимная доставка" className="rounded-md" />
          <h3 className="mt-4 font-semibold">Анонимная доставка</h3>
          <p className="text-sm text-gray-600">
            Можем преподнести Ваш заказ как анонимный подарок
          </p>
        </div>
      </div>
    </section>
  );
}
