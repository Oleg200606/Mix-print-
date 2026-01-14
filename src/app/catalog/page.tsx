// app/catalog/page.tsx
"use client";

import { useState } from "react";
import CommercialOfferForm from "@/components/CommercialOfferForm.tsx";
import {
  Shirt,
  Gift,
  ChevronDown,
  Upload,
  Check,
  FileText,
  Package,
} from "lucide-react";

export default function CatalogPage() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    phone: "",
    email: "",
    quantity: "100-500",
    deadline: "2-4 недели",
    comment: "",
  });

  const categories = [
    {
      id: "clothing",
      title: "Корпоративная одежда",
      icon: <Shirt size={24} />,
      description:
        "Футболки, поло, толстовки, худи, ветровки с нанесением логотипа",
      features: ["Шелкография", "Вышивка", "DTF-печать", "Таблички размеров"],
      color: "blue",
      minOrder: "от 100 шт.",
      priceRange: "от 450 ₽/шт.",
    },
    {
      id: "accessories",
      title: "Аксессуары и промопродукция",
      icon: <Shirt size={24} />,
      description: "Кружки, Power Bank, рюкзаки, сумки, зонты, USB-накопители",
      features: [
        "УФ-печать",
        "Сублимация",
        "Лазерная гравировка",
        "Тампопечать",
      ],
      color: "green",
      minOrder: "от 50 шт.",
      priceRange: "от 250 ₽/шт.",
    },
    {
      id: "gifts",
      title: "Подарочные и премиум наборы",
      icon: <Gift size={24} />,
      description: "Корпоративные подарки для партнеров и сотрудников",
      features: ["Комплектация", "Фирменная упаковка", "Индивидуальный дизайн"],
      color: "purple",
      minOrder: "от 20 наборов",
      priceRange: "от 1 500 ₽/набор",
    },
  ];

  return (
    <div className="catalog-page">
      <div className="catalog-container">
        {/* Заголовок */}
        <div className="catalog-header">
          <h1 className="catalog-title">
            Каталог услуг для корпоративных клиентов
          </h1>
          <p className="catalog-subtitle">
            Мы работаем только с крупными оптовыми заказами. Выберите категорию
            и запросите индивидуальное коммерческое предложение.
          </p>
          <div className="badge" style={{ marginTop: "1rem" }}>
            <div className="badge-dot"></div>
            <span>Минимальный заказ — от 100 000 ₽</span>
          </div>
        </div>

        {/* Категории */}
        <div className="categories-grid">
          {categories.map((category) => (
            <div key={category.id} className="category-card">
              <div className="category-header">
                <div
                  className={`category-icon category-icon-${category.color}`}
                >
                  {category.icon}
                </div>
                <div>
                  <h3 className="category-title">{category.title}</h3>
                  <p className="category-description">{category.description}</p>
                </div>
              </div>

              <div className="category-body">
                <div className="category-features">
                  {category.features.map((feature, index) => (
                    <span key={index} className="feature-tag">
                      {feature}
                    </span>
                  ))}
                </div>

                <div style={{ marginTop: "auto", paddingTop: "1rem" }}>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      marginBottom: "0.5rem",
                    }}
                  >
                    <span
                      style={{
                        fontSize: "0.875rem",
                        color: "var(--color-gray-600)",
                      }}
                    >
                      Мин. заказ:
                    </span>
                    <span
                      style={{
                        fontWeight: "600",
                        color: "var(--color-gray-900)",
                      }}
                    >
                      {category.minOrder}
                    </span>
                  </div>
                  <div
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <span
                      style={{
                        fontSize: "0.875rem",
                        color: "var(--color-gray-600)",
                      }}
                    >
                      Стоимость:
                    </span>
                    <span
                      style={{
                        fontWeight: "600",
                        color: "var(--color-blue-600)",
                      }}
                    >
                      {category.priceRange}
                    </span>
                  </div>
                </div>
              </div>

              <div className="category-footer">
                <div className="category-price">{category.priceRange}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Комплексная форма */}
        <div className="bg-white shadow-xl rounded-2xl border border-gray-200 flex flex-col gap-7 items-center p-2">
          <div>
            <h2 className="text-gray-900 text-4xl font-bold text-center lg:mt-10">
              Нужен комплексный заказ из нескольких категорий?
            </h2>
            <p className="form-subtitle mt-2">
              Получите единое коммерческое предложение с персональной скидкой на
              весь объем.
            </p>
          </div>
          <div className="min-w-1/2">
            <CommercialOfferForm />
          </div>
        </div>
      </div>
    </div>
  );
}
