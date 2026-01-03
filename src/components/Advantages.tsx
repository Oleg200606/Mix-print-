// components/Advantages.tsx
import { CheckCircle, Package, Users, Shield } from 'lucide-react';

export default function Advantages() {
    const advantages = [
        { icon: <Package />, title: 'Только опт', desc: 'Минимальный заказ от 100 тыс. руб. Персональные условия.' },
        { icon: <Users />, title: 'Поддержка', desc: 'Выделенный менеджер на всех этапах. Решаем любые задачи.' },
        { icon: <Shield />, title: 'Полный цикл', desc: 'От дизайна до доставки. Контроль качества на каждом этапе.' },
        { icon: <CheckCircle />, title: 'Любая сложность', desc: 'Все виды печати: шелкография, вышивка, сублимация.' },
    ];

    return (
        <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-12">Почему с нами работают крупные компании</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {advantages.map((adv, index) => (
                        <div key={index} className="p-6 rounded-2xl border border-gray-200 hover:border-blue-300 hover:shadow-xl transition">
                            <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-blue-100 text-blue-600 mb-4">
                                {adv.icon}
                            </div>
                            <h3 className="text-xl font-bold mb-2">{adv.title}</h3>
                            <p className="text-gray-600">{adv.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}