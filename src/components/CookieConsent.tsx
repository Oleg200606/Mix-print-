// components/CookieConsent.tsx
"use client";

import { useState, useEffect } from "react";
import { X, Cookie } from "lucide-react";

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Проверяем, соглашался ли пользователь ранее
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      // Показываем с задержкой для лучшего UX
      const timer = setTimeout(() => setIsVisible(true), 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("cookie-consent", "accepted");
    setIsVisible(false);
  };

  const declineCookies = () => {
    localStorage.setItem("cookie-consent", "declined");
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 md:left-auto md:right-4 md:w-96 z-50">
      <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 p-6">
        <div className="flex items-start gap-4 mb-4">
          <div className="flex-shrink-0">
            <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center">
              <Cookie className="h-6 w-6 text-blue-600" />
            </div>
          </div>
          <div className="flex-1">
            <div className="flex justify-between items-start mb-2">
              <h3 className="font-bold text-lg">Мы используем cookies</h3>
              <button
                onClick={declineCookies}
                className="text-gray-400 hover:text-gray-600"
                aria-label="Закрыть"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <p className="text-gray-600 text-sm mb-4">
              Это помогает нам улучшать работу сайта и показывать вам
              релевантные предложения. Продолжая использовать сайт, вы
              соглашаетесь с политикой конфиденциальности.
            </p>
            <div className="flex gap-3">
              <button
                onClick={acceptCookies}
                className="flex-1 rounded-lg bg-blue-600 py-3 font-semibold text-white hover:bg-blue-700 transition"
              >
                Принять
              </button>
              <button
                onClick={declineCookies}
                className="flex-1 rounded-lg border border-gray-300 py-3 font-semibold text-gray-700 hover:bg-gray-50 transition"
              >
                Отклонить
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
