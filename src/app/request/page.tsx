// app/request/page.tsx
'use client';

import { useState } from 'react';
import { Send, FileText, Phone, Mail, Building, Package, Upload, Check } from 'lucide-react';

export default function RequestPage() {
    const [formData, setFormData] = useState({
        name: '',
        position: '',
        company: '',
        phone: '',
        email: '',
        orderType: 'mixed',
        budget: '100000-300000',
        deadline: '2-4 недели',
        categories: {
            clothing: false,
            accessories: false,
            gifts: false,
        },
        hasLogo: 'yes',
        comment: '',
        getNewsletter: true,
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value, type } = e.target;

        if (type === 'checkbox') {
            const checked = (e.target as HTMLInputElement).checked;
            if (name.includes('.')) {
                const [parent, child] = name.split('.');
                setFormData(prev => ({
                    ...prev,
                    [parent]: {
                        ...(prev as any)[parent],
                        [child]: checked
                    }
                }));
            } else {
                setFormData(prev => ({ ...prev, [name]: checked }));
            }
        } else {
            setFormData(prev => ({ ...prev, [name]: value }));
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            const response = await fetch('/api/send-email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: formData.name,
                    phone: formData.phone,
                    email: formData.email,
                    company: formData.company,
                    position: formData.position,
                    subject: 'Запрос КП для юр. лица',
                    message: formData.comment,
                    orderDetails: `Тип заказа: ${formData.orderType}\nБюджет: ${formData.budget}\nСроки: ${formData.deadline}\nЛоготип: ${formData.hasLogo}\nКатегории: ${JSON.stringify(formData.categories)}`
                }),
            });

            const data = await response.json();

            if (data.success) {
                alert('Ваш запрос успешно отправлен! Менеджер свяжется с вами в течение 30 минут.');
                // Сброс формы
                setFormData({
                    name: '',
                    position: '',
                    company: '',
                    phone: '',
                    email: '',
                    orderType: 'mixed',
                    budget: '100000-300000',
                    deadline: '2-4 недели',
                    categories: { clothing: false, accessories: false, gifts: false },
                    hasLogo: 'yes',
                    comment: '',
                    getNewsletter: true,
                });
            } else {
                alert('Ошибка отправки. Пожалуйста, попробуйте еще раз или позвоните нам.');
            }
        } catch (error) {
            console.error('Ошибка:', error);
            alert('Ошибка отправки. Пожалуйста, попробуйте еще раз.');
        }
    };

    return (
        <div className="form-section">
            <div className="form-container">
                {/* Заголовок */}
                <div className="catalog-header">
                    <h1 className="catalog-title">Запрос коммерческого предложения для юр. лиц</h1>
                    <p className="catalog-subtitle">
                        Заполните эту форму, и наш специалист по работе с корпоративными клиентами подготовит для вас персональное предложение в течение 2 часов.
                    </p>
                </div>

                <div className="form-grid" style={{ gridTemplateColumns: '1fr 2fr', gap: '3rem', alignItems: 'start' }}>
                    {/* Левая колонка - информация */}
                    <div>
                        <div className="form-card">
                            <div className="form-header">
                                <h3 style={{ fontSize: '1.5rem', fontWeight: '700', color: 'var(--color-gray-900)' }}>
                                    Почему стоит отправить запрос:
                                </h3>
                            </div>

                            <div className="form-body">
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                                    <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                                        <div style={{
                                            width: '48px',
                                            height: '48px',
                                            backgroundColor: 'var(--color-blue-100)',
                                            borderRadius: 'var(--radius-lg)',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            flexShrink: 0,
                                            color: 'var(--color-blue-600)'
                                        }}>
                                            <Phone size={24} />
                                        </div>
                                        <div>
                                            <h4 style={{ fontWeight: '600', marginBottom: '0.5rem', color: 'var(--color-gray-900)' }}>
                                                Персональный менеджер
                                            </h4>
                                            <p style={{ color: 'var(--color-gray-600)', fontSize: '0.875rem' }}>
                                                Выделенный специалист будет сопровождать ваш заказ от расчета до доставки.
                                            </p>
                                        </div>
                                    </div>

                                    <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                                        <div style={{
                                            width: '48px',
                                            height: '48px',
                                            backgroundColor: 'var(--color-green-100)',
                                            borderRadius: 'var(--radius-lg)',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            flexShrink: 0,
                                            color: 'var(--color-green-600)'
                                        }}>
                                            <FileText size={24} />
                                        </div>
                                        <div>
                                            <h4 style={{ fontWeight: '600', marginBottom: '0.5rem', color: 'var(--color-gray-900)' }}>
                                                Детальный расчет
                                            </h4>
                                            <p style={{ color: 'var(--color-gray-600)', fontSize: '0.875rem' }}>
                                                Предложение с разбивкой по стоимости, срокам и этапам производства.
                                            </p>
                                        </div>
                                    </div>

                                    <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                                        <div style={{
                                            width: '48px',
                                            height: '48px',
                                            backgroundColor: 'var(--color-orange-100)',
                                            borderRadius: 'var(--radius-lg)',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            flexShrink: 0,
                                            color: 'var(--color-orange-600)'
                                        }}>
                                            <Package size={24} />
                                        </div>
                                        <div>
                                            <h4 style={{ fontWeight: '600', marginBottom: '0.5rem', color: 'var(--color-gray-900)' }}>
                                                Образцы продукции
                                            </h4>
                                            <p style={{ color: 'var(--color-gray-600)', fontSize: '0.875rem' }}>
                                                При заказе от 300 000 ₽ предоставляем образцы материалов и печати.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="form-info" style={{ marginTop: '2rem' }}>
                                    <h4 className="form-info-title">
                                        Для ускорения расчета:
                                    </h4>
                                    <p className="form-info-text">
                                        • Подготовьте логотип в векторном формате<br />
                                        • Укажите желаемые цвета продукции<br />
                                        • Определитесь с ориентировочным бюджетом
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Правая колонка - форма */}
                    <div className="form-card">
                        <form onSubmit={handleSubmit}>
                            <div className="form-body">
                                {/* Раздел 1: Информация о компании */}
                                <div style={{ marginBottom: '3rem' }}>
                                    <h3 style={{
                                        fontSize: '1.5rem',
                                        fontWeight: '700',
                                        marginBottom: '1.5rem',
                                        color: 'var(--color-gray-900)',
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '0.75rem'
                                    }}>
                                        <Building size={24} style={{ color: 'var(--color-blue-600)' }} />
                                        Информация о компании
                                    </h3>

                                    <div className="form-grid">
                                        {[
                                            { label: 'Контактное лицо *', name: 'name', type: 'text', placeholder: 'Иванов Иван', icon: <Send size={20} /> },
                                            { label: 'Должность', name: 'position', type: 'text', placeholder: 'Руководитель отдела маркетинга', icon: <Send size={20} /> },
                                            { label: 'Компания *', name: 'company', type: 'text', placeholder: 'ООО "Вектор"', icon: <Building size={20} /> },
                                            { label: 'Телефон *', name: 'phone', type: 'tel', placeholder: '+7 (999) 123-45-67', icon: <Phone size={20} /> },
                                            { label: 'Email *', name: 'email', type: 'email', placeholder: 'ivanov@company.ru', icon: <Mail size={20} /> },
                                        ].map((field) => (
                                            <div key={field.name} className="field-group">
                                                <label className="required">{field.label}</label>
                                                <div style={{ position: 'relative' }}>
                                                    <div style={{
                                                        position: 'absolute',
                                                        left: '1rem',
                                                        top: '50%',
                                                        transform: 'translateY(-50%)',
                                                        color: 'var(--color-gray-400)'
                                                    }}>
                                                        {field.icon}
                                                    </div>
                                                    <input
                                                        type={field.type}
                                                        name={field.name}
                                                        required={field.label.includes('*')}
                                                        value={(formData as any)[field.name]}
                                                        onChange={handleChange}
                                                        className="input-field"
                                                        style={{ paddingLeft: '3rem' }}
                                                        placeholder={field.placeholder}
                                                    />
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Раздел 2: Параметры заказа */}
                                <div style={{ marginBottom: '3rem' }}>
                                    <h3 style={{
                                        fontSize: '1.5rem',
                                        fontWeight: '700',
                                        marginBottom: '1.5rem',
                                        color: 'var(--color-gray-900)'
                                    }}>
                                        Параметры заказа
                                    </h3>

                                    <div className="form-grid">
                                        <div className="field-group">
                                            <label>Тип заказа</label>
                                            <select
                                                name="orderType"
                                                value={formData.orderType}
                                                onChange={handleChange}
                                                className="select-field"
                                            >
                                                <option value="mixed">Смешанный (одежда + аксессуары)</option>
                                                <option value="clothing">Только одежда</option>
                                                <option value="accessories">Только аксессуары</option>
                                                <option value="gifts">Подарочные наборы</option>
                                            </select>
                                        </div>

                                        <div className="field-group">
                                            <label>Бюджет (руб.)</label>
                                            <select
                                                name="budget"
                                                value={formData.budget}
                                                onChange={handleChange}
                                                className="select-field"
                                            >
                                                <option value="100000-300000">100 000 - 300 000</option>
                                                <option value="300000-500000">300 000 - 500 000</option>
                                                <option value="500000-1000000">500 000 - 1 000 000</option>
                                                <option value="1000000+">Более 1 000 000</option>
                                            </select>
                                        </div>

                                        <div className="field-group">
                                            <label>Сроки реализации</label>
                                            <select
                                                name="deadline"
                                                value={formData.deadline}
                                                onChange={handleChange}
                                                className="select-field"
                                            >
                                                <option value="2-4 недели">2-4 недели</option>
                                                <option value="1-2 месяца">1-2 месяца</option>
                                                <option value="квартал">В течение квартала</option>
                                                <option value="гибкие">Гибкие сроки</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>

                                {/* Раздел 3: Категории */}
                                <div style={{ marginBottom: '3rem' }}>
                                    <h3 style={{
                                        fontSize: '1.5rem',
                                        fontWeight: '700',
                                        marginBottom: '1.5rem',
                                        color: 'var(--color-gray-900)'
                                    }}>
                                        Какие категории интересуют?
                                    </h3>

                                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(1, 1fr)', gap: '1rem' }}>
                                        {[
                                            { id: 'clothing', label: 'Корпоративная одежда', desc: 'Футболки, толстовки, поло' },
                                            { id: 'accessories', label: 'Аксессуары', desc: 'Кружки, рюкзаки, Power Bank' },
                                            { id: 'gifts', label: 'Подарочные наборы', desc: 'Премиум подарки для партнеров' },
                                        ].map((cat) => (
                                            <label key={cat.id} style={{
                                                display: 'flex',
                                                alignItems: 'flex-start',
                                                padding: '1rem',
                                                border: '1px solid var(--color-gray-300)',
                                                borderRadius: 'var(--radius-lg)',
                                                cursor: 'pointer',
                                                transition: 'all 0.2s'
                                            }} className="category-card">
                                                <input
                                                    type="checkbox"
                                                    name={`categories.${cat.id}`}
                                                    checked={(formData.categories as any)[cat.id]}
                                                    onChange={handleChange}
                                                    style={{ marginTop: '0.25rem', marginRight: '1rem' }}
                                                    className="checkbox-input"
                                                />
                                                <div>
                                                    <div style={{ fontWeight: '500', color: 'var(--color-gray-900)' }}>{cat.label}</div>
                                                    <div style={{ fontSize: '0.875rem', color: 'var(--color-gray-500)', marginTop: '0.25rem' }}>{cat.desc}</div>
                                                </div>
                                            </label>
                                        ))}
                                    </div>
                                </div>

                                {/* Раздел 4: Дополнительно */}
                                <div style={{ marginBottom: '3rem' }}>
                                    <h3 style={{
                                        fontSize: '1.5rem',
                                        fontWeight: '700',
                                        marginBottom: '1.5rem',
                                        color: 'var(--color-gray-900)'
                                    }}>
                                        Дополнительная информация
                                    </h3>

                                    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                                        <div>
                                            <label style={{
                                                display: 'block',
                                                marginBottom: '1rem',
                                                fontWeight: '500',
                                                color: 'var(--color-gray-700)'
                                            }}>
                                                Есть готовый логотип?
                                            </label>
                                            <div style={{ display: 'flex', gap: '2rem' }}>
                                                {[
                                                    { value: 'yes', label: 'Да, есть векторный файл' },
                                                    { value: 'no', label: 'Нет, нужна разработка' },
                                                    { value: 'in_progress', label: 'В разработке' },
                                                ].map((option) => (
                                                    <label key={option.value} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer' }}>
                                                        <input
                                                            type="radio"
                                                            name="hasLogo"
                                                            value={option.value}
                                                            checked={formData.hasLogo === option.value}
                                                            onChange={handleChange}
                                                            className="radio-input"
                                                        />
                                                        <span style={{ fontSize: '0.875rem' }}>{option.label}</span>
                                                    </label>
                                                ))}
                                            </div>
                                        </div>

                                        <div className="field-group">
                                            <label>Комментарии и пожелания</label>
                                            <textarea
                                                name="comment"
                                                value={formData.comment}
                                                onChange={handleChange}
                                                className="textarea-field"
                                                placeholder="Опишите ваш заказ, корпоративные цвета, особые требования, сроки проведения мероприятия и т.д."
                                                rows={4}
                                            />
                                        </div>

                                        {/* Загрузка файлов */}
                                        <div className="file-upload">
                                            <label className="file-upload-label">
                                                <input type="file" multiple />
                                                <div className="file-upload-icon">
                                                    <Upload size={24} />
                                                </div>
                                                <div className="file-upload-text">Прикрепить файлы</div>
                                                <div className="file-upload-hint">
                                                    Логотип, ТЗ, референсы (макс. 10 МБ)
                                                </div>
                                            </label>
                                        </div>
                                    </div>
                                </div>

                                {/* Кнопка отправки */}
                                <div className="form-actions">
                                    <label className="checkbox-group">
                                        <input
                                            type="checkbox"
                                            name="getNewsletter"
                                            checked={formData.getNewsletter}
                                            onChange={handleChange}
                                            className="checkbox-input"
                                        />
                                        <span className="checkbox-label">
                                            Хочу получать новости об акциях и новых технологиях печати
                                        </span>
                                    </label>

                                    <button
                                        type="submit"
                                        className="form-submit"
                                        style={{ padding: '1rem 2.5rem' }}
                                    >
                                        <Send size={20} />
                                        Отправить запрос менеджеру
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}