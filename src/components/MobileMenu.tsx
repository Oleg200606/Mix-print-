// components/MobileMenu.tsx
"use client";

import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import Link from "next/link";

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="md:hidden">
      {/* Кнопка меню */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 rounded-lg border border-gray-300"
        aria-label={isOpen ? "Закрыть меню" : "Открыть меню"}
      >
        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </button>

      {/* Мобильное меню */}
      {isOpen && (
        <div className="fixed inset-x-0 top-20 z-50 border-t bg-white shadow-xl">
          <div className="px-4 py-6 space-y-4">
            <Link
              href="/"
              className="block py-3 text-lg font-medium hover:text-blue-600"
              onClick={() => setIsOpen(false)}
            >
              Главная
            </Link>
            <Link
              href="/catalog"
              className="block py-3 text-lg font-medium hover:text-blue-600"
              onClick={() => setIsOpen(false)}
            >
              Каталог и Услуги
            </Link>
            <Link
              href="/request"
              className="block py-3 text-lg font-medium hover:text-blue-600"
              onClick={() => setIsOpen(false)}
            >
              Оптовый запрос
            </Link>

            <div className="pt-6 border-t">
              <div className="flex items-center gap-2 mb-4">
                <Phone className="h-5 w-5 text-blue-600" />
                <div>
                  <div className="font-semibold">Оптовый отдел</div>
                  <a
                    href="tel:+78001234567"
                    className="text-lg font-bold text-gray-900"
                  >
                    8 (800) 123-45-67
                  </a>
                </div>
              </div>
              <Link
                href="/request"
                className="block w-full rounded-lg bg-gradient-to-r from-orange-500 to-orange-600 py-4 text-center font-bold text-white"
                onClick={() => setIsOpen(false)}
              >
                Запрос для юр. лиц
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
