import Image from "next/image";
import mainBox from "@/app/assets/images/mainbox.png";
import img1 from "@/app/assets/images/img1.png";
import img2 from "@/app/assets/images/img2.png";
import img3 from "@/app/assets/images/img3.png";
import img4 from "@/app/assets/images/img4.png";
import client1 from "@/app/assets/images/client1.png";
import logo1 from "@/app/assets/images/logo1.jpg";
import logo2 from "@/app/assets/images/logo2.jpg";
import logo3 from "@/app/assets/images/logo3.jpg";
import logo4 from "@/app/assets/images/logo4.jpg";
import logo5 from "@/app/assets/images/logo5.jpg";
import logo6 from "@/app/assets/images/logo6.jpg";

export default function CorporateGifts() {
  return (
    <div className="bg-[#f7f7f7] py-10 px-4 md:px-20">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-10 mb-16">
          <Image
            src={mainBox}
            alt="Main box with macarons"
            className="rounded-full w-full md:w-1/2"
          />
          <div className="text-center md:text-left">
            <h1 className="text-4xl font-bold mb-4">Корпоративные подарки</h1>
            <p className="mb-4 text-gray-700">
              Брендированные пирожные макароны, которые поднимут аппетит ваших
              клиентов или порадуют коллектив
            </p>
            <p className="mb-4 text-gray-600">
              Поднять мотивацию сотрудников? Увеличить лояльность клиентов или
              расположить их к себе перед большой сделкой? Мы приготовим наборы
              начиная от 200 руб за шт., сделаем индивидуальный дизайн и нанесём
              ваш логотип. Обычно готовим за 2-3 дня.
            </p>
            <button className="bg-[#d13c79] text-white py-3 px-6 rounded-md font-medium">
              Скачать весь каталог подарков
            </button>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-center mb-8">
          Некоторые варианты подарков
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
          <div className="bg-white p-4 rounded shadow text-center">
            <Image src={img1} alt="3 макарона" className="mx-auto" />
            <h3 className="font-semibold mt-4">3 макарона с печатью</h3>
            <p className="text-gray-600">В пластиковой упаковке</p>
            <p className="text-pink-600 mt-2">от 150 руб/шт</p>
          </div>
          <div className="bg-white p-4 rounded shadow text-center">
            <Image src={img2} alt="9 макаронов" className="mx-auto" />
            <h3 className="font-semibold mt-4">9 макаронов с печатью</h3>
            <p className="text-gray-600">С логотипом вашей компании</p>
            <p className="text-pink-600 mt-2">от 500 руб</p>
          </div>
          <div className="bg-white p-4 rounded shadow text-center">
            <Image src={img3} alt="40 шт набор" className="mx-auto" />
            <h3 className="font-semibold mt-4">Круглый набор, 40 шт.</h3>
            <p className="text-gray-600">Для самых любимых</p>
            <p className="text-pink-600 mt-2">от 3600 руб</p>
          </div>
          <div className="bg-white p-4 rounded shadow text-center">
            <Image src={img4} alt="70 шт набор" className="mx-auto" />
            <h3 className="font-semibold mt-4">Набор на 70 шт.</h3>
            <p className="text-gray-600">Роскошный подарок</p>
            <p className="text-pink-600 mt-2">от 5600 руб</p>
          </div>
        </div>

        <div className="text-center mb-16">
          <button className="bg-[#d13c79] text-white py-3 px-6 rounded-md font-medium">
            Получить КП
          </button>
        </div>

        <h2 className="text-2xl font-bold text-center mb-8">
          Мы уже выполнили заказы
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10">
          <div className="bg-white p-4 rounded shadow text-center">
            <Image src={client1} alt="Бла бла" className="mx-auto" />
            <p className="mt-2 text-gray-700">Макароны для отеля "Бла бла"</p>
          </div>
          <div className="bg-white p-4 rounded shadow text-center">
            <Image src={client1} alt="Мята" className="mx-auto" />
            <p className="mt-2 text-gray-700">Набор для кафе "Мята"</p>
          </div>
          <div className="bg-white p-4 rounded shadow text-center">
            <Image src={client1} alt="Бла бла" className="mx-auto" />
            <p className="mt-2 text-gray-700">Макароны для отеля "Бла бла"</p>
          </div>
          <div className="bg-white p-4 rounded shadow text-center">
            <Image src={client1} alt="Мята" className="mx-auto" />
            <p className="mt-2 text-gray-700">Набор для кафе "Мята"</p>
          </div>
        </div>

        <div className="flex flex-wrap justify-center  gap-16 mb-20">
          <Image src={logo1} alt="logo" className="h-auto w-auto " />
          <Image src={logo2} alt="logo" className="h-auto w-auto " />
          <Image src={logo3} alt="logo" className="h-auto w-auto" />
          <Image src={logo4} alt="logo" className="h-auto w-auto " />
          <Image src={logo5} alt="logo" className="h-auto w-auto " />
          <Image src={logo6} alt="logo" className="h-auto w-auto " />
        </div>

        <h2 className="text-2xl font-bold text-center mb-8 ">
          Ответы на вопросы
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8  shadow-lg cursor-pointer transition-transform duration-300 hover:scale-[1.01]">
          <div className="bg-white p-4 rounded shadow">
            <h4 className="font-semibold mb-2">
              Сколько хранятся пирожные макароны?
            </h4>
            <p>Срок хранения бла бла бла</p>
          </div>
          <div className="bg-white p-4 rounded shadow">
            <h4 className="font-semibold mb-2">
              Как быстро мы выполняем заказы
            </h4>
            <p>Обычно 3-5 дней, но может увеличиться в пиковый сезон.</p>
          </div>
          <div className="bg-white p-4 rounded shadow">
            <h4 className="font-semibold mb-2">А за 2 дня?</h4>
            <p>Текст про дополнительную стоимость срочных заказов.</p>
          </div>
          <div className="bg-white p-4 rounded shadow">
            <h4 className="font-semibold mb-2">А с НДС работаете?</h4>
            <p>
              У нас есть два варианта: с НДС и без. Уточняйте при оформлении.
            </p>
          </div>
          <div className="bg-white p-4 rounded shadow">
            <h4 className="font-semibold mb-2">Что с доставкой?</h4>
            <p>
              Доставляем по всей России. Обычно 2-7 дней в зависимости от
              региона.
            </p>
          </div>
          <div className="bg-white p-4 rounded shadow">
            <h4 className="font-semibold mb-2">Ещё вопрос</h4>
            <p>Часто задают и другие вопросы — ответим на все!</p>
          </div>
        </div>
      </div>
    </div>
  );
}
