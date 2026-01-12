// components/Header.tsx - БЕЗ TAILWIND
"use client";

import { useState } from "react";
import { Shirt, Phone, Menu, X } from "lucide-react";
import Link from "next/link";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="header-container">
        {/* Логотип */}
        <Link href="/" className="logo">
          <div className="logo-icon">
            <Shirt size={24} />
          </div>
          <span>
            МИКС <span className="logo-orange">ПРИНТ</span>
          </span>
        </Link>

        {/* Навигация для десктопа */}
        <nav className="nav">
          <Link href="/" className="nav-link">
            Главная
          </Link>
          <Link href="/catalog" className="nav-link">
            Каталог и Услуги
          </Link>
          <Link href="/request" className="nav-link">
            Оптовый запрос
          </Link>
        </nav>

        {/* Контактная информация и CTA */}
        <div className="flex items-center gap-6">
          <div className="phone-section">
            <Phone className="phone-icon" />
            <div>
              <div className="phone-text">Оптовый отдел</div>

              <a href="tel:+79555054001" className="phone-number">
                +7 (955) 505-40-01
              </a>
            </div>
          </div>

          <Link href="/request" className="cta-button">
            Запрос для юр. лиц
          </Link>

          {/* Кнопка мобильного меню */}
          <button
            className="mobile-menu-button"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Меню"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Мобильное меню */}
      {isMobileMenuOpen && (
        <div className="mobile-menu">
          <Link
            href="/"
            className="mobile-menu-link"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Главная
          </Link>
          <Link
            href="/catalog"
            className="mobile-menu-link"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Каталог и Услуги
          </Link>
          <Link
            href="/request"
            className="mobile-menu-link"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Оптовый запрос
          </Link>
          <div className="p-4 border-t border-gray-200 mt-4">
            <div className="phone-section mb-4">
              <Phone className="phone-icon" />
              <div>
                <div className="phone-text">Оптовый отдел</div>
                <a href="tel:+78001234567" className="phone-number">
                  8 (800) 123-45-67
                </a>
              </div>
            </div>
            <Link
              href="/request"
              className="cta-button w-full justify-center"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Запрос для юр. лиц
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
