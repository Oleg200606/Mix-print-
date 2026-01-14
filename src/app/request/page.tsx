// app/request/page.tsx
"use client";
import { useState } from "react";
import CommercialOfferForm from "@/components/CommercialOfferForm";
import {
  Send,
  FileText,
  Phone,
  Mail,
  Building,
  Package,
  Upload,
  Check,
} from "lucide-react";

export default function RequestPage() {
  return (
    <div className="form-section">
      <div className="form-container">
        {/* Заголовок */}
        <div className="catalog-header">
          <h1 className="catalog-title">
            Запрос коммерческого предложения для юр. лиц
          </h1>
          <p className="catalog-subtitle">
            Заполните эту форму, и наш специалист по работе с корпоративными
            клиентами подготовит для вас персональное предложение в течение 2
            часов.
          </p>
        </div>

        <div className="grid grid-cols-1 items-stretch lg:grid-cols-3 gap-3">
          {/* Левая колонка - информация */}
          <div>
            <div className="form-card">
              <div className="form-header">
                <h3
                  style={{
                    fontSize: "1.5rem",
                    fontWeight: "700",
                    color: "var(--color-gray-900)",
                  }}
                >
                  Почему стоит отправить запрос:
                </h3>
              </div>

              <div className="form-body">
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "2rem",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "1rem",
                    }}
                  >
                    <div
                      style={{
                        width: "48px",
                        height: "48px",
                        backgroundColor: "var(--color-blue-100)",
                        borderRadius: "var(--radius-lg)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                        color: "var(--color-blue-600)",
                      }}
                    >
                      <Phone size={24} />
                    </div>
                    <div>
                      <h4
                        style={{
                          fontWeight: "600",
                          marginBottom: "0.5rem",
                          color: "var(--color-gray-900)",
                        }}
                      >
                        Персональный менеджер
                      </h4>
                      <p
                        style={{
                          color: "var(--color-gray-600)",
                          fontSize: "0.875rem",
                        }}
                      >
                        Выделенный специалист будет сопровождать ваш заказ от
                        расчета до доставки.
                      </p>
                    </div>
                  </div>

                  <div
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "1rem",
                    }}
                  >
                    <div
                      style={{
                        width: "48px",
                        height: "48px",
                        backgroundColor: "var(--color-green-100)",
                        borderRadius: "var(--radius-lg)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                        color: "var(--color-green-600)",
                      }}
                    >
                      <FileText size={24} />
                    </div>
                    <div>
                      <h4
                        style={{
                          fontWeight: "600",
                          marginBottom: "0.5rem",
                          color: "var(--color-gray-900)",
                        }}
                      >
                        Детальный расчет
                      </h4>
                      <p
                        style={{
                          color: "var(--color-gray-600)",
                          fontSize: "0.875rem",
                        }}
                      >
                        Предложение с разбивкой по стоимости, срокам и этапам
                        производства.
                      </p>
                    </div>
                  </div>

                  <div
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "1rem",
                    }}
                  >
                    <div
                      style={{
                        width: "48px",
                        height: "48px",
                        backgroundColor: "var(--color-orange-100)",
                        borderRadius: "var(--radius-lg)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                        color: "var(--color-orange-600)",
                      }}
                    >
                      <Package size={24} />
                    </div>
                    <div>
                      <h4
                        style={{
                          fontWeight: "600",
                          marginBottom: "0.5rem",
                          color: "var(--color-gray-900)",
                        }}
                      >
                        Образцы продукции
                      </h4>
                      <p
                        style={{
                          color: "var(--color-gray-600)",
                          fontSize: "0.875rem",
                        }}
                      >
                        При заказе от 300 000 ₽ предоставляем образцы материалов
                        и печати.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="form-info" style={{ marginTop: "2rem" }}>
                  <h4 className="form-info-title">Для ускорения расчета:</h4>
                  <p className="form-info-text">
                    • Подготовьте логотип в векторном формате
                    <br />
                    • Укажите желаемые цвета продукции
                    <br />• Определитесь с ориентировочным бюджетом
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Правая колонка - форма */}
          <div className="col-span-2 h-fit bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden p-3 lg:p-10">
            <div className="">
              <CommercialOfferForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
