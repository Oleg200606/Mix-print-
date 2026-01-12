import { Phone } from "lucide-react";

export default function PhoneLink({ className = "" }: { className?: string }) {
  const phoneNumber = "+79555054001";
  const formattedPhone = "+7 (955) 505-40-01";

  return (
    <a
      href={`tel:${phoneNumber}`}
      className={`flex items-center gap-2 ${className}`}
    >
      <Phone size={20} />
      <span className="font-semibold">{formattedPhone}</span>
      <span className="text-sm text-gray-500">Оптовый отдел</span>
    </a>
  );
}
