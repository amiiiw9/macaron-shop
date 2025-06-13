"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "@/app/assets/icons/logo.svg";
import burgerIcon from "@/app/assets/icons/burger.svg"; // твой бургер

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="border-b border-gray-200 bg-white z-50 relative">
      {/* Десктоп: оригинальный список — без изменений */}
      <ul className="hidden md:flex container mx-auto justify-between items-center font-semibold text-gray-700 py-4">
        <li>
          <Link href="/wedding">СЛАДКИЕ ДНИ</Link>
        </li>
        <li>
          <Link href="/ready">ПОДАРОЧНЫЕ НАБОРЫ</Link>
        </li>
        <li>
          <Link href="/create">СОБРАТЬ НАБОР</Link>
        </li>
        <li>
          <Image src={logo} alt="logo icon" width={80} height={80} />
        </li>
        <li>
          <Link href="/create">СОЗДАТЬ ДИЗАЙН</Link>
        </li>
        <li>
          <Link href="/corporate">КОМПАНИЯМ</Link>
        </li>
        <li>
          <Link href="/catalog">ВЕСЬ КАТАЛОГ</Link>
        </li>
      </ul>

      {/* Мобильный хедер */}
      <div className="flex items-center justify-between md:hidden px-4 py-3">
        <Image src={logo} alt="logo icon" width={60} height={60} />
        <button onClick={() => setMenuOpen(!menuOpen)}>
          <Image src={burgerIcon} alt="burger menu" width={28} height={28} />
        </button>
      </div>

      {/* Мобильное меню */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-4 pb-4">
          <ul className="flex flex-col space-y-3 font-semibold text-gray-700">
            <li>
              <Link href="/wedding" onClick={() => setMenuOpen(false)}>
                СЛАДКИЕ ДНИ
              </Link>
            </li>
            <li>
              <Link href="/ready" onClick={() => setMenuOpen(false)}>
                ПОДАРОЧНЫЕ НАБОРЫ
              </Link>
            </li>
            <li>
              <Link href="/create" onClick={() => setMenuOpen(false)}>
                СОБРАТЬ НАБОР
              </Link>
            </li>
            <li>
              <Link href="/create" onClick={() => setMenuOpen(false)}>
                СОЗДАТЬ ДИЗАЙН
              </Link>
            </li>
            <li>
              <Link href="/corporate" onClick={() => setMenuOpen(false)}>
                КОМПАНИЯМ
              </Link>
            </li>
            <li>
              <Link href="/catalog" onClick={() => setMenuOpen(false)}>
                ВЕСЬ КАТАЛОГ
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
