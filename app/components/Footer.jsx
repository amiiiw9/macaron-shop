import Image from "next/image";
import heartIcon from "@/app/assets/icons/heartIcon.svg";
import deliveryIcon from "@/app/assets/icons/deliveryIcon.svg";
import flourIcon from "@/app/assets/icons/flourIcon.svg";
import insta from "@/app/assets/icons/insta.svg";
import facebook from "@/app/assets/icons/facebook.svg";
import vk from "@/app/assets/icons/vk.svg";

export default function Footer() {
  return (
    <footer className="bg-gray-100 text-sm text-gray-700 pt-10 pb-6">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-4 gap-8">
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <Image src={heartIcon} alt="love" width={24} height={24} />
            <p>Готовим вручную и с любовью</p>
          </div>
          <div className="flex items-center gap-2">
            <Image src={deliveryIcon} alt="delivery" width={24} height={24} />
            <p>Доставим в день заказа</p>
          </div>
          <div className="flex items-center gap-2">
            <Image src={flourIcon} alt="flour" width={24} height={24} />
            <p>100% миндальная мука и натуральные ингредиенты</p>
          </div>
        </div>

        <div>
          <h4 className="font-semibold mb-2">ИНФОРМАЦИЯ</h4>
          <ul className="space-y-1">
            <li>О компании</li>
            <li>Гарантии вкуса и свежести</li>
            <li>Доставка и оплата</li>
            <li>Контакты</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-2">КАТАЛОГ</h4>
          <ul className="space-y-1">
            <li>Каталог десертов</li>
            <li>Готовые наборы</li>
            <li>Собрать свой набор</li>
            <li>Акции</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-2">ДЛЯ БИЗНЕСА</h4>
          <ul className="space-y-1">
            <li>Корпоративные подарки</li>
            <li>Для юридических лиц</li>
            <li>Оптовикам</li>
          </ul>
          <p className="mt-4 font-semibold">+7 (812) 309 82 88</p>
          <p>с 9:00 до 21:00</p>
          <div className="flex gap-4 mt-3">
            <Image src={insta} alt="Instagram" width={24} height={24} />
            <Image src={facebook} alt="Facebook" width={24} height={24} />
            <Image src={vk} alt="VK" width={24} height={24} />
          </div>
        </div>
      </div>

      <div className="text-center text-xs text-gray-500 mt-10">
        © 2021 Макароншоп ООО "Квантум", Санкт-Петербург, улица Маршала
        Тухачевского, дом 22
      </div>
    </footer>
  );
}
