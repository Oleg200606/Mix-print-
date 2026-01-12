// components/HeroSection.tsx - БЕЗ TAILWIND
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1 className="hero-title">
          Корпоративный мерч
          <br />
          <span className="hero-gradient">для гигантов бизнеса</span>
        </h1>

        <p className="hero-subtitle">
          Полный цикл производства одежды и аксессуаров с нанесением логотипа
          для IT-компаний, банков и холдингов.
          <strong className="block mt-2">
            {" "}
            Работаем только с крупным оптом.
          </strong>
        </p>

        <div className="hero-buttons">
          <Link href="/catalog" className="btn-white">
            Смотреть каталог
          </Link>
          <Link href="/request" className="btn-orange">
            Получить расчет для юр. лица
          </Link>
        </div>

        <div className="badge">
          <div className="badge-dot"></div>
          <span>Минимальный заказ от 100 000 ₽</span>
        </div>
      </div>
    </section>
  );
}
