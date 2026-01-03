// app/page.tsx - БЕЗ TAILWIND
import HeroSection from '@/components/HeroSection';
import { Package, Users, Shield, CheckCircle } from 'lucide-react';

export default function HomePage() {
  return (
    <>
      <HeroSection />

      {/* Преимущества */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">Почему с нами работают крупные компании</h2>

          <div className="advantages-grid">
            <div className="advantage-card">
              <div className="advantage-icon">
                <Package size={28} />
              </div>
              <h3 className="advantage-title">Только опт</h3>
              <p className="advantage-description">
                Минимальный заказ от 100 тыс. руб. Персональные условия для каждого клиента.
              </p>
            </div>

            <div className="advantage-card">
              <div className="advantage-icon">
                <Users size={28} />
              </div>
              <h3 className="advantage-title">Персональная поддержка</h3>
              <p className="advantage-description">
                Выделенный менеджер на всех этапах. Решаем любые задачи клиента.
              </p>
            </div>

            <div className="advantage-card">
              <div className="advantage-icon">
                <Shield size={28} />
              </div>
              <h3 className="advantage-title">Полный цикл</h3>
              <p className="advantage-description">
                От дизайна до доставки. Контроль качества на каждом этапе производства.
              </p>
            </div>

            <div className="advantage-card">
              <div className="advantage-icon">
                <CheckCircle size={28} />
              </div>
              <h3 className="advantage-title">Любая сложность</h3>
              <p className="advantage-description">
                Все виды печати: шелкография, вышивка, сублимация, тампопечать.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Клиенты */}
      <section className="clients-section">
        <div className="container">
          <h2 className="section-title">Работаем с лидерами рынка</h2>
          <div className="clients-grid">
            {['IT-компании', 'Банки', 'Производство', 'Сети', 'Холдинги', 'Франшизы'].map((industry) => (
              <div key={industry} className="client-item">
                <span>{industry}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Процесс работы */}
      <section className="section" style={{ backgroundColor: 'white' }}>
        <div className="container">
          <h2 className="section-title">Схема работы с оптовыми клиентами</h2>

          <div className="process-grid">
            <div className="process-step">
              <div className="step-number">1</div>
              <h3 className="step-title">Запрос</h3>
              <p className="step-description">Вы оставляете заявку или ТЗ</p>
            </div>

            <div className="process-step">
              <div className="step-number">2</div>
              <h3 className="step-title">Расчет</h3>
              <p className="step-description">Персональный менеджер готовит КП</p>
            </div>

            <div className="process-step">
              <div className="step-number">3</div>
              <h3 className="step-title">Производство</h3>
              <p className="step-description">Изготовление и контроль качества</p>
            </div>

            <div className="process-step">
              <div className="step-number">4</div>
              <h3 className="step-title">Доставка</h3>
              <p className="step-description">Отправка по РФ и СНГ</p>
            </div>
          </div>

          <div className="text-center mt-12">
            <a href="/request" className="btn-orange">
              Начать сотрудничество
            </a>
          </div>
        </div>
      </section>
    </>
  );
}