// app/catalog/page.tsx
'use client';

import { useState } from 'react';
import { Shirt, Gift, ChevronDown, Upload, Check, FileText, Package } from 'lucide-react';

export default function CatalogPage() {
    const [activeCategory, setActiveCategory] = useState<string | null>(null);
    const [formData, setFormData] = useState({
        name: '',
        company: '',
        phone: '',
        email: '',
        quantity: '100-500',
        deadline: '2-4 недели',
        comment: '',
    });

    const categories = [
        {
            id: 'clothing',
            title: 'Корпоративная одежда',
            icon: <Shirt size={24} />,
            description: 'Футболки, поло, толстовки, худи, ветровки с нанесением логотипа',
            features: ['Шелкография', 'Вышивка', 'DTF-печать', 'Таблички размеров'],
            color: 'blue',
            minOrder: 'от 100 шт.',
            priceRange: 'от 450 ₽/шт.',
        },
        {
            id: 'accessories',
            title: 'Аксессуары и промопродукция',
            icon: <Shirt size={24} />,
            description: 'Кружки, Power Bank, рюкзаки, сумки, зонты, USB-накопители',
            features: ['УФ-печать', 'Сублимация', 'Лазерная гравировка', 'Тампопечать'],
            color: 'green',
            minOrder: 'от 50 шт.',
            priceRange: 'от 250 ₽/шт.',
        },
        {
            id: 'gifts',
            title: 'Подарочные и премиум наборы',
            icon: <Gift size={24} />,
            description: 'Корпоративные подарки для партнеров и сотрудников',
            features: ['Комплектация', 'Фирменная упаковка', 'Индивидуальный дизайн'],
            color: 'purple',
            minOrder: 'от 20 наборов',
            priceRange: 'от 1 500 ₽/набор',
        },
    ];

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        alert('Запрос отправлен! С вами свяжется менеджер в течение 30 минут.');
        setFormData({
            name: '',
            company: '',
            phone: '',
            email: '',
            quantity: '100-500',
            deadline: '2-4 недели',
            comment: '',
        });
    };

    return (
        <div className="catalog-page">
            <div className="catalog-container">
                {/* Заголовок */}
                <div className="catalog-header">
                    <h1 className="catalog-title">Каталог услуг для корпоративных клиентов</h1>
                    <p className="catalog-subtitle">
                        Мы работаем только с крупными оптовыми заказами. Выберите категорию и запросите индивидуальное коммерческое предложение.
                    </p>
                    <div className="badge" style={{ marginTop: '1rem' }}>
                        <div className="badge-dot"></div>
                        <span>Минимальный заказ — от 100 000 ₽</span>
                    </div>
                </div>

                {/* Категории */}
                <div className="categories-grid">
                    {categories.map((category) => (
                        <div key={category.id} className="category-card">
                            <div className="category-header">
                                <div className={`category-icon category-icon-${category.color}`}>
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
                                        <span key={index} className="feature-tag">{feature}</span>
                                    ))}
                                </div>

                                <div style={{ marginTop: 'auto', paddingTop: '1rem' }}>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                                        <span style={{ fontSize: '0.875rem', color: 'var(--color-gray-600)' }}>Мин. заказ:</span>
                                        <span style={{ fontWeight: '600', color: 'var(--color-gray-900)' }}>{category.minOrder}</span>
                                    </div>
                                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                        <span style={{ fontSize: '0.875rem', color: 'var(--color-gray-600)' }}>Стоимость:</span>
                                        <span style={{ fontWeight: '600', color: 'var(--color-blue-600)' }}>{category.priceRange}</span>
                                    </div>
                                </div>
                            </div>

                            <div className="category-footer">
                                <div className="category-price">
                                    {category.priceRange}
                                </div>
                                <button
                                    className="category-cta"
                                    onClick={() => setActiveCategory(activeCategory === category.id ? null : category.id)}
                                >
                                    {activeCategory === category.id ? 'Скрыть форму' : 'Запросить КП'}
                                    <ChevronDown size={16} style={{ marginLeft: '0.25rem', transform: activeCategory === category.id ? 'rotate(180deg)' : 'none', transition: 'transform 0.3s' }} />
                                </button>
                            </div>

                            {/* Форма категории */}
                            {activeCategory === category.id && (
                                <div className="catalog-form" style={{ margin: 0, borderRadius: 0, borderTop: '1px solid var(--color-gray-200)' }}>
                                    <div className="form-grid">
                                        <div>
                                            <h4 className="form-info-title">
                                                <FileText size={18} />
                                                Что мы предлагаем:
                                            </h4>
                                            <ul style={{ listStyle: 'none', padding: 0, marginTop: '1rem' }}>
                                                <li style={{ display: 'flex', alignItems: 'flex-start', marginBottom: '0.75rem' }}>
                                                    <Check size={18} style={{ color: 'var(--color-green-600)', marginRight: '0.5rem', flexShrink: 0, marginTop: '0.125rem' }} />
                                                    <span>Индивидуальный расчет в течение 2 часов</span>
                                                </li>
                                                <li style={{ display: 'flex', alignItems: 'flex-start', marginBottom: '0.75rem' }}>
                                                    <Check size={18} style={{ color: 'var(--color-green-600)', marginRight: '0.5rem', flexShrink: 0, marginTop: '0.125rem' }} />
                                                    <span>Образцы продукции по запросу (при заказе от 300 тыс. руб.)</span>
                                                </li>
                                                <li style={{ display: 'flex', alignItems: 'flex-start' }}>
                                                    <Check size={18} style={{ color: 'var(--color-green-600)', marginRight: '0.5rem', flexShrink: 0, marginTop: '0.125rem' }} />
                                                    <span>Помощь в разработке дизайна и подборе материалов</span>
                                                </li>
                                            </ul>
                                        </div>

                                        <form onSubmit={handleSubmit}>
                                            <div className="form-grid">
                                                <div className="field-group">
                                                    <label className="required">Имя</label>
                                                    <input
                                                        type="text"
                                                        name="name"
                                                        required
                                                        value={formData.name}
                                                        onChange={handleInputChange}
                                                        className="input-field"
                                                        placeholder="Александр"
                                                    />
                                                </div>

                                                <div className="field-group">
                                                    <label className="required">Компания</label>
                                                    <input
                                                        type="text"
                                                        name="company"
                                                        required
                                                        value={formData.company}
                                                        onChange={handleInputChange}
                                                        className="input-field"
                                                        placeholder="ООО 'Рога и Копыта'"
                                                    />
                                                </div>

                                                <div className="field-group">
                                                    <label className="required">Телефон</label>
                                                    <input
                                                        type="tel"
                                                        name="phone"
                                                        required
                                                        value={formData.phone}
                                                        onChange={handleInputChange}
                                                        className="input-field"
                                                        placeholder="+7 (999) 123-45-67"
                                                    />
                                                </div>

                                                <div className="field-group">
                                                    <label className="required">Email</label>
                                                    <input
                                                        type="email"
                                                        name="email"
                                                        required
                                                        value={formData.email}
                                                        onChange={handleInputChange}
                                                        className="input-field"
                                                        placeholder="alex@company.ru"
                                                    />
                                                </div>
                                            </div>

                                            <div className="form-grid">
                                                <div className="field-group">
                                                    <label>Ориентировочный тираж</label>
                                                    <select
                                                        name="quantity"
                                                        value={formData.quantity}
                                                        onChange={handleInputChange}
                                                        className="select-field"
                                                    >
                                                        <option value="100-500">100-500 шт.</option>
                                                        <option value="500-1000">500-1000 шт.</option>
                                                        <option value="1000-5000">1000-5000 шт.</option>
                                                        <option value="5000+">Более 5000 шт.</option>
                                                    </select>
                                                </div>

                                                <div className="field-group">
                                                    <label>Желаемые сроки</label>
                                                    <select
                                                        name="deadline"
                                                        value={formData.deadline}
                                                        onChange={handleInputChange}
                                                        className="select-field"
                                                    >
                                                        <option value="2-4 недели">2-4 недели</option>
                                                        <option value="1-2 месяца">1-2 месяца</option>
                                                        <option value="гибкие">Гибкие сроки</option>
                                                    </select>
                                                </div>
                                            </div>

                                            <div className="field-group">
                                                <label>Комментарий или пожелания</label>
                                                <textarea
                                                    name="comment"
                                                    value={formData.comment}
                                                    onChange={handleInputChange}
                                                    className="textarea-field"
                                                    placeholder="Опишите ваш заказ, особые требования..."
                                                    rows={3}
                                                />
                                            </div>

                                            <div className="form-actions">
                                                <div style={{ fontSize: '0.875rem', color: 'var(--color-gray-500)' }}>
                                                    Нажимая кнопку, вы соглашаетесь с обработкой данных
                                                </div>
                                                <button type="submit" className="form-submit form-submit-orange">
                                                    <Upload size={18} />
                                                    Отправить запрос
                                                </button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                {/* Комплексная форма */}
                <div className="catalog-form">
                    <h2 className="form-title">Нужен комплексный заказ из нескольких категорий?</h2>
                    <p className="form-subtitle">
                        Получите единое коммерческое предложение с персональной скидкой на весь объем.
                    </p>

                    <form onSubmit={handleSubmit} style={{ maxWidth: '600px', margin: '0 auto' }}>
                        <div className="form-grid">
                            <div className="field-group">
                                <label className="required">Имя</label>
                                <input
                                    type="text"
                                    name="name"
                                    required
                                    className="input-field"
                                    placeholder="Ваше имя"
                                />
                            </div>

                            <div className="field-group">
                                <label className="required">Телефон</label>
                                <input
                                    type="tel"
                                    name="phone"
                                    required
                                    className="input-field"
                                    placeholder="+7 (999) 123-45-67"
                                />
                            </div>
                        </div>

                        <div className="field-group">
                            <label>Что именно нужно?</label>
                            <div className="checkbox-group">
                                <input type="checkbox" id="complex-clothing" className="checkbox-input" />
                                <label htmlFor="complex-clothing" className="checkbox-label">Корпоративная одежда</label>
                            </div>
                            <div className="checkbox-group">
                                <input type="checkbox" id="complex-accessories" className="checkbox-input" />
                                <label htmlFor="complex-accessories" className="checkbox-label">Аксессуары и промопродукция</label>
                            </div>
                            <div className="checkbox-group">
                                <input type="checkbox" id="complex-gifts" className="checkbox-input" />
                                <label htmlFor="complex-gifts" className="checkbox-label">Подарочные наборы</label>
                            </div>
                        </div>

                        <div className="field-group">
                            <label>Бюджет проекта</label>
                            <select className="select-field">
                                <option value="">Выберите бюджет</option>
                                <option value="100000-300000">100 000 - 300 000 ₽</option>
                                <option value="300000-500000">300 000 - 500 000 ₽</option>
                                <option value="500000-1000000">500 000 - 1 000 000 ₽</option>
                                <option value="1000000+">Более 1 000 000 ₽</option>
                            </select>
                        </div>

                        <div className="field-group">
                            <label>Комментарий</label>
                            <textarea
                                className="textarea-field"
                                placeholder="Опишите ваш проект, сроки, особые требования..."
                                rows={4}
                            />
                        </div>

                        <div className="form-actions" style={{ justifyContent: 'center' }}>
                            <button type="submit" className="form-submit" style={{ padding: '1rem 3rem' }}>
                                <Package size={18} />
                                Получить комплексный расчет
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}