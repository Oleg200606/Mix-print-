// components/Footer.tsx - БЕЗ TAILWIND
import { MapPin, Mail, Clock, Phone } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-grid">
                    {/* О компании */}
                    <div>
                        <div className="footer-logo">
                            МИКС <span className="logo-orange">ПРИНТ</span>
                        </div>
                        <p className="footer-text">
                            Производство корпоративного мерча и промопродукции для крупного бизнеса.
                            Работаем только с оптовыми заказами от юридических лиц.
                        </p>
                    </div>

                    {/* Категории */}
                    <div>
                        <h4 className="footer-heading">Категории</h4>
                        <ul className="footer-list">
                            <li><a href="/catalog">Корпоративная одежда</a></li>
                            <li><a href="/catalog">Печать на аксессуарах</a></li>
                            <li><a href="/catalog">Подарочные наборы</a></li>
                            <li><a href="/catalog">Крупный опт</a></li>
                        </ul>
                    </div>

                    {/* Контакты */}
                    <div>
                        <h4 className="footer-heading">Контакты</h4>
                        <div className="space-y-3">
                            <div className="contact-item">
                                <Phone className="contact-icon" />
                                <div>
                                    <span className="font-bold">+7 (955) 505-40-01</span>
                                    <p style={{ fontSize: '0.875rem', color: 'var(--color-gray-500)', marginTop: '0.25rem' }}>Оптовый отдел</p>
                                </div>
                            </div>
                            <div className="contact-item">
                                <Mail className="contact-icon" />
                                <span>opt@mix-print.ru</span>
                            </div>
                            <div className="contact-item">
                                <MapPin className="contact-icon" />
                                <span>г. Москва, ул. Промышленная, 10</span>
                            </div>
                            <div className="contact-item">
                                <Clock className="contact-icon" />
                                <span>Пн-Пт: 9:00 – 18:00</span>
                            </div>
                        </div>
                    </div>

                    {/* Оптовым клиентам */}
                    <div>
                        <h4 className="footer-heading">Оптовым клиентам</h4>
                        <p className="footer-text mb-4">
                            Индивидуальный расчет, персональный менеджер, работа по договору.
                        </p>
                        <a href="/request" className="cta-button">
                            Получить коммерческое предложение
                        </a>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>© {new Date().getFullYear()} МИКС ПРИНТ. Все права защищены. Работаем с юр. лицами.</p>
                </div>
            </div>
        </footer>
    );
}