"use client";

import Image from "next/image";
import Link from "next/link";

import readyIcon from "@/app/assets/icons/readyIcon.svg";
import createIcon from "@/app/assets/icons/createIcon.svg";
import printIcon from "@/app/assets/icons/printIcon.svg";
import weddingIcon from "@/app/assets/icons/weddingIcon.svg";
import corporateIcon from "@/app/assets/icons/corporateIcon.svg";
import optomIcon from "@/app/assets/icons/optomIcon.svg";

import readyBg from "@/app/assets/images/readyBg.png";
import createBg from "@/app/assets/images/createBg.png";
import printBg from "@/app/assets/images/printBg.png";
import weddingBg from "@/app/assets/images/weddingBg.png";
import corporateBg from "@/app/assets/images/corporateBg.png";
import optomBg from "@/app/assets/images/optomBg.png";

const sections = [
  {
    title: "Готовые наборы",
    description:
      "Готовые наборы со скидкой.  Вы можете подобрать набор на подходящий случай.",
    icon: readyIcon,
    background: readyBg,
    href: "/ready",
  },
  {
    title: "Собрать свой набор",
    description: "Выбрать количество макарун и выбрать вкусы по собственному",
    icon: createIcon,
    background: createBg,
    href: "/create",
  },
  {
    title: "Набор с индивидуальной печатью",
    description: "Создать набор макарун с индивидуальной печатью",
    icon: printIcon,
    background: printBg,
    href: "/create",
  },
  {
    title: "Свадебные предложения",
    description:
      "Нежные пирожные макаронс с разными вкусами для украшения вашего свадебного торжества",
    icon: weddingIcon,
    background: weddingBg,
    href: "/wedding",
  },
  {
    title: "Корпоративные подарки",
    description:
      "От 8 сомони за шт. С уникальным дизайном. Приятный комплимент для коллег и партнеров",
    icon: corporateIcon,
    background: corporateBg,
    href: "/corporate",
  },
  {
    title: "Оптовые поставки",
    description:
      "Предложение для кофеен, кафе, отелей и т.д. Посмотрите условия сотрудничества и отзывы.",
    icon: optomIcon,
    background: optomBg,
    href: "/corporate",
  },
];

export default function FutureSections() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 p-6 bg-blue-50 pr-10 pl-10 ">
      {sections.map((section, index) => (
        <Link href={section.href} key={index}>
          <div className="relative rounded-xl shadow-md overflow-hidden cursor-pointer transition-transform duration-300 hover:scale-[1.01]">
            <Image
              src={section.background}
              alt="background"
              width={570}
              height={260}
              className="absolute inset-0 w-full h-full object-cover"
            />

            <div className="container mx-auto relative flex flex-col items-center text-center p-6 rounded-full m-4">
              <Image
                src={section.icon}
                alt={section.title}
                width={100}
                height={100}
              />
              <h3 className="text-lg font-semibold mt-4">{section.title}</h3>
              <p className="text-gray-600 mt-2">{section.description}</p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
