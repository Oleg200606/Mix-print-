// components/CatalogCategory.tsx
'use client';

import { useState } from 'react';
import { ChevronDown, Upload, X } from 'lucide-react';

interface CatalogCategoryProps {
    category: {
        id: string;
        title: string;
        icon: React.ReactNode;
        description: string;
        features: string[];
        imageColor: string;
    };
    isFormActive: boolean;
    onFormOpen: () => void;
    onFormClose: () => void;
    onFormSubmit: (data: any) => void;
}

export default function CatalogCategory({
    category,
    isFormActive,
    onFormOpen,
    onFormClose,
    onFormSubmit,
}: CatalogCategoryProps) {
    const [formData, setFormData] = useState({
        name: '',
        company: '',
        phone: '',
        email: '',
        quantity: '100-500',
        deadline: '2-4 недели',
        comment: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onFormSubmit(formData);
    };

    return (
        <div className="rounded-2xl border border-gray-200 bg-white overflow-hidden shadow-lg hover:shadow-xl transition">
            {/* Заголовок категории */}
            <div className="p-8">
                <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
                    <div className={`flex-shrink-0 rounded-xl p-4 ${category.imageColor} text-white`}>
                        {category.icon}
                    </div>
                    <div className="flex-1">
                        <h3 className="text-2xl font-bold mb-2">{category.title}</h3>
                        <p className="text-gray-600 mb-4">{category.description}</p>
                        <div className="flex flex-wrap gap-2 mb-4">
                            {category.features.map((feature, idx) => (
                                <span key={idx} className="rounded-full bg-blue-50 px-3 py-1 text-sm font-medium text-blue-700">
                                    {feature}
                                </span>
                            ))}
                        </div>
                    </div>
                    <div className="flex-shrink-0">
                        {!isFormActive ? (
                            <button
                                onClick={onFormOpen}
                                className="rounded-lg bg-gradient-to-r from-blue-600 to-blue-700 px-6 py-3 font-semibold text-white hover:shadow-lg transition flex items-center gap-2"
                            >
                                Запросить КП
                                <ChevronDown className="h-4 w-4" />
                            </button>
                        ) : (
                            <button
                                onClick={onFormClose}
                                className="rounded-lg border border-gray-300 px-6 py-3 font-semibold text-gray-700 hover:bg-gray-50 transition flex items-center gap-2"
                            >
                                Свернуть
                                <X className="h-4 w-4" />
                            </button>
                        )}
                    </div>
                </div>
            </div>

            {/* Раскрывающаяся форма */}
            {isFormActive && (
                <div className="border-t border-gray-200 p-8 bg-gray-50">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {/* Левая часть - информация */}
                        <div>
                            <h4 className="text-lg font-bold mb-4">Что мы предлагаем:</h4>
                            <ul className="space-y-3">
                                <li className="flex items-start">
                                    <div className="h-6 w-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center mr-3 flex-shrink-0">✓</div>
                                    <span>Индивидуальный расчет в течение 2 часов в рабочее время</span>
                                </li>
                                <li className="flex items-start">
                                    <div className="h-6 w-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center mr-3 flex-shrink-0">✓</div>
                                    <span>Образцы продукции по запросу (при заказе от 300 тыс. руб.)</span>
                                </li>
                                <li className="flex items-start">
                                    <div className="h-6 w-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center mr-3 flex-shrink-0">✓</div>
                                    <span>Помощь в разработке дизайна и подборе материалов</span>
                                </li>
                            </ul>
                            <div className="mt-8 p-4 bg-blue-50 rounded-lg">
                                <p className="text-sm text-blue-800">
                                    <strong>Прикрепите файлы:</strong> логотип, техническое задание, референсы. Это ускорит расчет.
                                </p>
                            </div>
                        </div>

                        {/* Правая часть - форма */}
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium mb-1">Имя *</label>
                                    <input
                                        type="text"
                                        name="name"
                                        required
                                        value={formData.name}
                                        onChange={handleChange}
                                        className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none"
                                        placeholder="Александр"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium mb-1">Компания *</label>
                                    <input
                                        type="text"
                                        name="company"
                                        required
                                        value={formData.company}
                                        onChange={handleChange}
                                        className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none"
                                        placeholder="ООО 'Рога и Копыта'"
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium mb-1">Телефон *</label>
                                    <input
                                        type="tel"
                                        name="phone"
                                        required
                                        value={formData.phone}
                                        onChange={handleChange}
                                        className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none"
                                        placeholder="+7 (999) 123-45-67"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium mb-1">Email *</label>
                                    <input
                                        type="email"
                                        name="email"
                                        required
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none"
                                        placeholder="alex@company.ru"
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium mb-1">Ориентировочный тираж</label>
                                    <select
                                        name="quantity"
                                        value={formData.quantity}
                                        onChange={handleChange}
                                        className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none"
                                    >
                                        <option value="100-500">100-500 шт.</option>
                                        <option value="500-1000">500-1000 шт.</option>
                                        <option value="1000-5000">1000-5000 шт.</option>
                                        <option value="5000+">Более 5000 шт.</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium mb-1">Желаемые сроки</label>
                                    <select
                                        name="deadline"
                                        value={formData.deadline}
                                        onChange={handleChange}
                                        className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none"
                                    >
                                        <option value="срочно">Срочно (1-2 недели)</option>
                                        <option value="2-4 недели">2-4 недели</option>
                                        <option value="1-2 месяца">1-2 месяца</option>
                                        <option value="гибкие">Гибкие сроки</option>
                                    </select>
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium mb-1">Комментарий или пожелания</label>
                                <textarea
                                    name="comment"
                                    value={formData.comment}
                                    onChange={handleChange}
                                    rows={3}
                                    className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none"
                                    placeholder="Опишите ваш заказ, особые требования, прикрепите ссылки на референсы..."
                                />
                            </div>

                            <div className="flex items-center justify-between">
                                <div className="text-sm text-gray-500">
                                    Нажимая кнопку, вы соглашаетесь с обработкой данных
                                </div>
                                <button
                                    type="submit"
                                    className="rounded-lg bg-gradient-to-r from-orange-500 to-orange-600 px-8 py-3 font-bold text-white hover:shadow-lg transition flex items-center gap-2"
                                >
                                    <Upload className="h-5 w-5" />
                                    Отправить запрос
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}